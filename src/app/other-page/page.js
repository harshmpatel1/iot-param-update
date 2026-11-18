"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { socket } from "@/lib/socket";

const fetchWithTimeout = async (url, options = {}, timeout = 60000) => {
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

import { Suspense } from 'react'
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

const OtherPageClient = () => {

  const [updateStatus, setUpdateStatus] = useState("");
  const [checkingUpdate, setCheckingUpdate] = useState(false);
  const [password, setPassword] = useState("c++");
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const macId = atob(searchParams.get("macId"));
    const type = atob(searchParams.get("type") || "default");

  const [form, setForm] = useState({
    filename: "",
    url: "",
    port: "",
    password: "",
  });
  const [firmware, setFirmware] = useState({
    MODSOFTVER: "",

  });
  useEffect(() => {
    if (macId) {
      getFirmwareVersion();
    }
  }, [macId]);
  const getFirmwareVersion = async () => {
    try {
      const res = await fetch(`/api/firmware?macId=${macId}&type=${type}`);
      const data = await res.json();

      if (data.success) {
        setFirmware(data.firmware);
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
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleRead = async () => {
    try {
      setLoading(true);
      console.log("Reading for MAC ID:", macId);
      const res = await fetchWithTimeout(
        `/api/read?macId=${macId}&type=${type}`,
        {},
        60000 // 1 minute
      );
      const data = await res.json();

      setForm((prev) => ({
        ...prev,
        filename: data.filename || "",
        url: data.url || "",
        port: data.port || "",
      }));
    } catch (err) {
      if (err.name === "AbortError") {
        alert("❌ Read failed. No response.");
      } else {
        alert("❌ Read failed.");
      }
    }
    finally {
      setLoading(false);
    }
  };
  const handleWrite = async () => {
    try {
      if (!form.password || form.password !== "c++") {
        alert("Incorrect password. Write not allowed.");
        return;
      }
      setLoading(true)
      const res = await fetchWithTimeout(
        "/api/write",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...form,
            macId,
                type
          }),
        },
        60000 // 1 minute
      );

      const data = await res.json();
      console.log("Write:", data);
      setLoading(false);
      if (password !== "c++") {
        alert("Incorrect password. Write not allowed.");
        return;
      }

      setForm((prev) => ({
        ...prev,
        filename: data.filename || "",
        url: data.url || "",
        port: data.port || "",

      }));
    } catch (err) {
      console.error(err);

      if (err.name === "AbortError") {
        alert("❌ Write failed. No response received within 1 minute.");
      } else {
        alert("❌ Write failed.");
      }
    } finally {
      setLoading(false);
    }
  };
  const handleStart = async () => {
    try {
      setLoading(true);

      if (!form.password || form.password !== "c++") {
        alert("Incorrect password. Start not allowed.");
        return;
      }

      // SAVE OLD VERSION
      const oldFirmware = firmware.MODSOFTVER;

      console.log("OLD VERSION:", oldFirmware);

      const res = await fetch("/api/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ macId,type }),
      });

      const data = await res.json();

      console.log("Start:", data);

      if (!data.success) {
        alert("Start failed");
        return;
      }


      setUpdateStatus("Checking firmware update...");
      setCheckingUpdate(true);

      // START POLLING
      const startTime = Date.now();

      const interval = setInterval(async () => {
        console.log("Checking firmware version...");

        const latestFirmware = await getFirmwareVersion();

        if (!latestFirmware) return;

        const newVersion = latestFirmware.MODSOFTVER;

        console.log("NEW VERSION:", newVersion);

        // SUCCESS CONDITION
        if (
          newVersion &&
          oldFirmware &&
          newVersion !== oldFirmware
        ) {
          clearInterval(interval);

          setUpdateStatus(
            `✅ Success! Firmware updated to ${newVersion}`
          );

          setCheckingUpdate(false);

          alert(`Firmware Updated Successfully!\nNew Version: ${newVersion}`);

          return;
        }

        // FAIL AFTER 5 MINUTES
        const elapsed = Date.now() - startTime;

        if (elapsed >= 2 * 60 * 1000) {
          clearInterval(interval);

          setUpdateStatus("❌ Failed! Firmware did not change.");

          setCheckingUpdate(false);



          return;
        }

      }, 20000); // every 20 seconds

    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-indigo-50 to-purple-100 flex items-center justify-center px-4 py-2">
      <div className="w-full max-w-xl">
        <div className="bg-white/80 backdrop-blur-xl border border-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] rounded-3xl overflow-hidden">

          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-2">
            <h1 className="text-2xl font-bold text-white">
              IoT Firmware Management
            </h1>
            <p className="text-blue-100 text-sm mt-1">
              Configure and manage firmware updates
            </p>
            {loading && (
              <div className="">
                <Loader />
              </div>
            )}
          </div>

          <div className="p-4 space-y-2">

            {/* Firmware Info */}
            <div className="rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-2">
              <h2 className="font-semibold text-blue-900 mb-3">
                Current Firmware Information
              </h2>

              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-sm">
                  MOD Software Version
                </span>

                <span className="px-3 py-1 rounded-full bg-white border border-blue-200 text-blue-700 font-semibold text-sm">
                  {firmware.MODSOFTVER || "-"}
                </span>
              </div>
            </div>

            {/* Form Fields */}
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
                  Server URL
                </label>

                <input
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-400 transition"
                  placeholder="Enter server URL"
                  name="url"
                  value={form.url}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Port Number
                </label>

                <input
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-400 transition"
                  placeholder="Enter port number"
                  name="port"
                  value={form.port}
                  onChange={handleChange}
                />
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
            <div className="grid grid-cols-3 gap-3 pt-2">

              <button
                onClick={handleRead}
                className="rounded-xl bg-emerald-500 text-white py-3 text-sm font-semibold shadow-md hover:bg-emerald-600 hover:shadow-lg transition-all duration-200"
              >
                Read
              </button>

              <button
                onClick={handleWrite}
                className="rounded-xl bg-blue-500 text-white py-3 text-sm font-semibold shadow-md hover:bg-blue-600 hover:shadow-lg transition-all duration-200"
              >
                Write
              </button>

              <button
                onClick={handleStart}
                className="rounded-xl bg-orange-500 text-white py-3 text-sm font-semibold shadow-md hover:bg-orange-600 hover:shadow-lg transition-all duration-200"
              >
                Start
              </button>

            </div>

            {/* Loader */}


            {/* Status Message */}
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
    </div>
  );
}


export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OtherPageClient />
    </Suspense>
  )
}