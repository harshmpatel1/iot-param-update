"use client";

import React, { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { socket } from "@/lib/socket";



const Loader = () => (
  <div className="flex items-center justify-center h-16">
    <svg
      className="animate-spin h-6 w-6 text-gray-600"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      ></path>
    </svg>
  </div>
);

const fetchWithTimeout = async (
  url,
  options = {},
  timeout = 60000
) => {
  const controller = new AbortController();

  const timeoutId = setTimeout(() => {
    controller.abort();
  }, timeout);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
};

const OtherPageClient = () => {
  const [progress, setProgress] = useState(0);
  const [deviceData, setDeviceData] = useState(null);

  const [updateStatus, setUpdateStatus] = useState("");
  const [checkingUpdate, setCheckingUpdate] = useState(false);
  const [loading, setLoading] = useState(false);
  const progressIntervalRef = useRef(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, []);

  const encodedMacId = searchParams.get("macId");
  const macId = encodedMacId ? atob(encodedMacId) : "";

  const encodedType = searchParams.get("type");
  const type = encodedType ? atob(encodedType) : "";
  console.log("Decoded Type:", type);

  useEffect(() => {
    socket.connect();

    socket.emit("register-device", macId);

    socket.on("device-data", (data) => {
      console.log("Received device data:", data);
      setDeviceData(data);
    });

    return () => {
      socket.off("device-data");
      socket.disconnect();
    };
  }, [macId]);
  const intervalRef = useRef(null);

  const [form, setForm] = useState({
    filename: "",
    password: "",
    deviceType: type === "afor1phase" ? "MASTER_OTA" : "HMI",
  });

  const [firmware, setFirmware] = useState({
    INVMSTRFWVR: "",
  });

  useEffect(() => {
    if (macId) {
      getFirmwareVersion();
    }
  }, [macId]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const getFirmwareVersion = async () => {
    try {
      const res = await fetch(`/api/firmware-inv?macId=${macId}&type=${type}`);
      const data = await res.json();
      console.log("Firmware Data:", data);

      if (data.success) {
        setFirmware(data.firmware);
        console.log("Firmware Version:", data.firmware.INVMSTRFWVR);
        console.log("MODSOFTVER:", data.firmware.MODSOFTVER);
        return data.firmware;
      }

      return null;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRead = async () => {
    try {
      setLoading(true);

      console.log("Reading for MAC ID:", macId);

      const res = await fetchWithTimeout(
        `/api/read?macId=${macId}&inv=true&type=${type}`,
        {},
        60000
      );

      const data = await res.json();

      setForm((prev) => ({
        ...prev,
        filename: data.filename || "",
      }));
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleWrite = async () => {
    try {
      if (form.password !== "c++") {
        alert("Invalid password");
        return;
      }

      setLoading(true);

      const res = await fetchWithTimeout(
        `/api/write?tmacId=${macId}&type=${type}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            filename: form.filename,
            macId,
            inv: true,
            type
          }),
        },
        60000
      );

      const data = await res.json();

      console.log("Write:", data);

      if (!data.success) {
        alert("Write failed");
        return;
      }

      setForm((prev) => ({
        ...prev,
        filename: data.filename || "",
      }));

      alert("Write successful");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleStart = async () => {
    try {
      if (checkingUpdate) return;

      if (form.password !== "c++") {
        alert("Invalid password");
        return;
      }

      setLoading(true);
      setProgress(0);
      const oldFirmware = firmware.INVMSTRFWVR;

      console.log("OLD VERSION:", oldFirmware);

      let startCommand = "";
      if(type == "afor1phase") {
        let deviceType = form.deviceType;
        if(deviceType === "MASTER_OTA") {
          startCommand = "MASTER_OTA";
        } else if(deviceType === "SLAVE_OTA") {
          startCommand = "SLAVE_OTA";
        } else if(deviceType === "COMM_OTA") {
          startCommand = "COMM_OTA";
        }
      }else if(type == "watech") {
        let deviceType = form.deviceType;
        if(deviceType === "HMI") {
          startCommand = "HMI_OTA";
        }else if(deviceType === "DSP") {
          startCommand = "DSP_OTA";
        }
      }
      else{
        startCommand = form.deviceType === "HMI" ? "INV_1OTA" : "INV_2OTA";
      }

      // const startCommand = type === "afor1phase" ? "INV_1OTA" : form.deviceType === "HMI"
      //     ? "INV_1OTA"
      //     : "INV_2OTA";;

      // const startCommand =
      //   form.deviceType === "HMI"
      //     ? "INV_1OTA"
      //     : "INV_2OTA";

      const res = await fetch(`/api/start?type=${type}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          macId,
          inv: true,
          startCommand,
          type
        }),
      });

      const data = await res.json();

      console.log("Start:", data);

      if (!data.success) {
        alert("Start failed");
        return;
      }

      setLoading(false);

      setUpdateStatus("Checking firmware update...");
      setCheckingUpdate(true);
      const totalDuration = 5 * 60 * 1000; // 5 min

      progressIntervalRef.current = setInterval(() => {
        const elapsed = Date.now() - startTime;

        const percentage = Math.min(
          (elapsed / totalDuration) * 100,
          100
        );

        // setProgress(Math.round(percentage));

        if (percentage >= 100) {
          clearInterval(progressIntervalRef.current);
        }
      }, 1000);

      const startTime = Date.now();

      intervalRef.current = setInterval(async () => {
        try {
          console.log("Checking firmware version...");

          const latestFirmware =
            await getFirmwareVersion();

          if (!latestFirmware) return;

          const newVersion =
            latestFirmware.INVMSTRFWVR;

          console.log("NEW VERSION:", newVersion);

          if (
            newVersion &&
            oldFirmware &&
            newVersion !== oldFirmware
          ) {
            clearInterval(intervalRef.current);
            clearInterval(progressIntervalRef.current);
            setProgress(100);

            await getFirmwareVersion();

            setUpdateStatus(
              `✅ Success! Firmware updated to ${newVersion}`
            );

            setCheckingUpdate(false);

            alert(
              `Firmware Updated Successfully!\nNew Version: ${newVersion}`
            );

            return;
          }

          const elapsed =
            Date.now() - startTime;

          if (elapsed >= 5 * 60 * 1000) {
            clearInterval(intervalRef.current);
            clearInterval(progressIntervalRef.current);
            setProgress(100);

            setUpdateStatus(
              "❌ Failed! Firmware did not change."
            );

            setCheckingUpdate(false);

            return;
          }
        } catch (error) {
          console.error(error);
        }
      }, 20000);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-indigo-50 to-purple-100 flex items-center justify-center px-4 py-4">
      <div className="w-full max-w-xl">
        <div className="bg-white/80 backdrop-blur-xl border border-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] rounded-3xl overflow-hidden">

          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3">
            {loading && (
              <div className="flex justify-center py-2">
                <Loader />
              </div>
            )}

            <h1 className="text-2xl font-bold text-white">
              Firmware Management
            </h1>
            <p className="text-blue-100 text-sm mt-1">
              Read, write and update inverter firmware
            </p>
          </div>

          <div className="p-8 space-y-4">

            {/* Current Firmware */}
            <div className="rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-3">
              <h2 className="font-semibold text-blue-900 mb-3">
                Current Firmware Information
              </h2>

              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-sm">
                  DSP Software Version
                </span>

                <span className="px-3 py-1 rounded-full bg-white border border-blue-200 text-blue-700 font-semibold text-sm">
                  {firmware.INVMSTRFWVR || "-"}
                </span>
              </div>
              <div className="flex justify-between items-center">
                {/* <span className="text-gray-600 text-sm">
              DSP Software Version
            </span> */}
                {firmware.MODSOFTVER === "AH-00" && (<p className="text-red-500 bg-red-100 p-2 text-xl rounded-lg">Please Update IOT module firmware First</p>)}
                {deviceData?.status == "0" && (<p className="text-blue-500 bg-blue-100 p-2 text-xl rounded-lg">Running</p>)}
                {deviceData?.status == "1" && (<p className="text-blue-500 bg-blue-100 p-2 text-xl rounded-lg">Complete</p>)}
                {deviceData?.status == "2" && (<p className="text-blue-500 bg-blue-100 p-2 text-xl rounded-lg">Error {deviceData?.error}</p>)}

                {/* <span className="px-3 py-1 rounded-full bg-white border border-blue-200 text-blue-700 font-semibold text-sm">
              {firmware.INVMSTRFWVR || "-"}
            </span> */}
              </div>
              <p>

              </p>
            </div>

            {/* Form */}
            <div className="space-y-4">

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Firmware Filename
                </label>

                <input
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-400 transition"
                  placeholder="Enter firmware filename"
                  name="filename"
                  value={form.filename}
                  onChange={handleChange}
                />
              </div>



              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Device Type
                </label>

                <select
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-400 transition"
                  name="deviceType"
                  value={form.deviceType}
                  onChange={handleChange}
                >
                    {
                type == 'afor1phase' ? (
                  <>
                  <option value="MASTER_OTA">Master</option>
                  <option value="SLAVE_OTA">Slave</option>
                  <option value="COMM_OTA">Common</option>
                  </>
                ) : (
                  <>
                    <option value="HMI">HMI</option>
                  <option value="DSP">DSP</option>
                  </>
                )
              }

                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>

                <input
                  type="password"
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-400 transition"
                  placeholder="Enter password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                />
              </div>

            </div>

            {/* Action Buttons */}
            <div className={`grid grid-cols-3 gap-3 pt-2 ${firmware.MODSOFTVER === "AH-00" && firmware.MODSOFTVER === "AH-00" ? "hidden" : ""}`}>

              <button
                onClick={handleRead}
                className="rounded-xl bg-emerald-500 text-white py-3 text-sm font-semibold shadow-md hover:bg-emerald-600 hover:shadow-lg transition-all"
              >
                Read
              </button>

              <button
                onClick={handleWrite}
                className="rounded-xl bg-blue-500 text-white py-3 text-sm font-semibold shadow-md hover:bg-blue-600 hover:shadow-lg transition-all"
              >
                Write
              </button>

              <button
                onClick={handleStart}
                disabled={checkingUpdate}
                className="rounded-xl bg-orange-500 text-white py-3 text-sm font-semibold shadow-md hover:bg-orange-600 hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                start
                {checkingUpdate ? "Checking..." : "Start"}
              </button>

            </div>

            {/* Progress */}
            {checkingUpdate && (
              <div className="rounded-2xl bg-white border border-gray-100 p-4 shadow-sm">

                <div className="flex justify-between mb-3">
                  <span className="text-sm font-medium text-gray-700">
                    Firmware Update Progress
                  </span>

                  <span className="text-sm font-bold text-blue-600">
                    {deviceData?.percentage || progress}%
                  </span>
                </div>

                <div className="w-full h-4 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full transition-all duration-1000"
                    style={{ width: `${deviceData?.percentage ||  progress}%` }}
                  />
                </div>
              </div>
            )}

            {/* Loader */}

            {/* Status */}
            {updateStatus && (
              <div className="rounded-2xl border border-green-200 bg-green-50 p-4">
                <div className="text-sm font-medium text-green-800">
                  {updateStatus}
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
       {deviceData && Object.keys(deviceData).length > 0 && (
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-auto text-sm max-h-96">
            {JSON.stringify(deviceData, null, 2)}
          </pre>
        )}
    </div>
  );
};

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OtherPageClient />
    </Suspense>
  );
}