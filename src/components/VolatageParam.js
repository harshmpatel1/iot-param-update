'use client';
import React, { useState } from 'react';
import { Upload, Cpu } from "lucide-react";
import { Download, Loader2 } from "lucide-react";
import { CheckSquare, Square } from "lucide-react";
const Spinner = () => (
  <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center">
    <div className="w-10 h-10 border-[3px] border-blue-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

const alterInputOutPutConstraints = {
  'V': '0.1', '0.1V': '0.1', '0.01V': '0.01', '20ms': '20',
  '0.01Hz': '0.01', 'Hz': '0.01', '0.01S': '0.01', '0.1%Hz': '0.1',
  '0.1A': '0.1', '10mSec': '10', '0.01C': '0.01', '0.1Kohm': '0.1',
  '0.01sec': '0.01', 'A.': '0.01', 'Ahr': '0.1', '0.1%/s': '0.001',
  'C': '0.1', '%.': '0.1', '0.001V': '0.001','0.001Hz': '0.001','0.5S': '0.5'
};

/* ───────────────── BIT-FIELD CONFIG ─────────────────
 * Params whose single value packs many flags into a 32-bit number.
 * Reading the param fills ALL 32 bits; writing rebuilds all 32 bits
 * and sends them as one decimal number.
 *
 * MSB_FIRST = true  -> bit index 0 is the LEFTMOST char of the 32-char string
 * MSB_FIRST = false -> bit index 0 is the least significant (rightmost) bit
 *
 * Add a label for every bit you want to show. Bits without a label are
 * still kept (read from the device and sent back unchanged on write).
 */
const MSB_FIRST = false; // bit 0 = least significant bit (standard for hex registers)
const WRITE_AS_BINARY_STRING = false; // true -> send "0101…" (32 chars) instead of decimal

const BIT_FIELDS = {
  PROTFUNSEL: [ // key must match the variable name in the API response
    { bit: 0, label: 'Grid connection range judgment' },
    { bit: 1, label: 'ActiveIsland' },
    { bit: 2, label: 'PassiveIsland' },   // TODO: rename
    { bit: 3, label: 'OverVolt' },   // TODO: rename
    { bit: 4, label: 'UnderVolt' },
    { bit: 5, label: 'OverFreq' },
    { bit: 6, label: 'UnderFreq' },
    { bit: 7, label: '10minOverVolt' },
    { bit: 8, label: 'IsoChk' },
    { bit: 9, label: 'DciChk' },
    { bit: 10, label: 'GfciChk' },
    { bit: 11, label: 'EarthChk' },
    { bit: 12, label: 'Three-phase unbalance' },
    { bit: 13, label: 'Power grid transient voltage protection' },
    { bit: 14, label: 'Bus midpoint unbalance protection' },
    { bit: 15, label: 'PV Reverse connection' },
    { bit: 16, label: 'PV Abnormal' },
    { bit: 17, label: 'Sampling detection' },
    { bit: 18, label: 'Abnormal temperature sampling' },
    { bit: 19, label: 'High and low temperature protection' },
    { bit: 20, label: 'GEN voltage frequency detection' },
    { bit: 21, label: 'Relay detection' },
    { bit: 22, label: 'Internal communication detection' },
    { bit: 23, label: 'Fan detection' },
    { bit: 24, label: 'ammete & CT detection' },
    { bit: 25, label: 'Afci' },
    { bit: 26, label: 'RSDEN' },

    // ...add more as needed up to bit 31
  ],
};

const EMPTY_BITS = () => Array(32).fill('0');

// device value (decimal number or "0101…" string) -> array of 32 '0'/'1'
const toBits = (raw) => {
  const s = String(raw).trim();
  const str = /^[01]{32}$/.test(s)
    ? s
    : (Math.round(parseFloat(s)) >>> 0).toString(2).padStart(32, '0'); // handles "262520.00"
  const arr = str.split('');
  return MSB_FIRST ? arr : arr.reverse();
};

// array of 32 '0'/'1' -> decimal string (or binary string)
const fromBits = (bits) => {
  const arr = MSB_FIRST ? bits : [...bits].reverse();
  const str = arr.join('');
  return WRITE_AS_BINARY_STRING ? str : (parseInt(str, 2) >>> 0).toString();
};

// array of 32 '0'/'1' -> hex string like "0x40178"
const bitsToHex = (bits) => '0x' + parseInt(fromBitsBinary(bits), 2).toString(16).toUpperCase();
const fromBitsBinary = (bits) => (MSB_FIRST ? bits : [...bits].reverse()).join('');

const formatDateTimeToYYMMDDHHMMSS = (dateTimeStr) => {
  if (!dateTimeStr) return dateTimeStr;
  const [date, time] = dateTimeStr.split(' ');
  if (!date || !time) return dateTimeStr;
  const [year, month, day] = date.split('-');
  const [hour, minute, second] = time.split(':');
  return `${year.slice(2)}${month}${day}${hour}${minute}${second}`;
};

export default function VoltageParam({ data, macId, version, type }) {
  const [values, setValues] = useState({});
  const [bitValues, setBitValues] = useState({}); // { IslandingProtection: ['0','1',… x32] }
  const [statuses, setStatuses] = useState({});
  const [selectedVars, setSelectedVars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [readOnlyVars, setReadOnlyVars] = useState([]);
  const genMode = values?.GENCNTRLMOD;
  console.log('type', type);


  const getOptionLabel = (options, numericValue) => {
    if (!options || numericValue == null) return numericValue;
    const key = Math.floor(parseFloat(numericValue)).toString();
    const found = options.find(opt => Object.keys(opt)[0] === key);
    return found ? Object.values(found)[0] : numericValue;
  };

  const getOptionValue = (options, label) => {
    if (!options) return label;
    const found = options.find(opt => Object.values(opt)[0] === label);
    return found ? Object.keys(found)[0] : label;
  };

  const toggleSelectAll = () => {
    setSelectedVars(selectedVars.length === data.length ? [] : data.map(i => i.key));
  };

  const handleValueChange = (varName, value) => {
    setValues(prev => ({ ...prev, [varName]: value }));
    setReadOnlyVars(prev => prev.filter(v => v !== varName));
  };

  // change ONE bit of a bit-field param; the other 31 bits are kept as they were read
  const handleBitChange = (varName, bitIndex, val) => {
    setBitValues(prev => {
      const next = [...(prev[varName] || EMPTY_BITS())];
      next[bitIndex] = val;
      return { ...prev, [varName]: next };
    });
    setReadOnlyVars(prev => prev.filter(v => v !== varName));
  };

  const handleCheckboxChange = (varName, isChecked) => {
    setSelectedVars(prev => isChecked ? [...prev, varName] : prev.filter(v => v !== varName));
  };

  const handleReadAll = async () => {
    if (selectedVars.length === 0) return alert('Select at least one variable to read');
    setIsLoading(true);
    setStatuses({});
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/process-variables`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          variables: selectedVars.map(v => ({ variable: v })),
          macId, version,
          type: type || 'default'
        }),
      });
      const result = await response.json();
      if (result.success) {
        const newValues = {}, newStatuses = {}, newBits = {};
        result.details.forEach(detail => {
          const value = detail.response?.[detail.variable];

          // ── bit-field param: one read fills all 32 bits ──
          if (BIT_FIELDS[detail.variable]) {
            if (value !== undefined) {
              newBits[detail.variable] = toBits(value);
              newStatuses[detail.variable] = 'success';
            } else {
              newStatuses[detail.variable] = 'failed';
            }
            return;
          }

          const item = data.find(i => i.key === detail.variable);
          if (value !== undefined) {
            if (item?.options) {
              newValues[detail.variable] = getOptionLabel(item.options, value);
            } else {
              const unit = item?.unit || '';
              newValues[detail.variable] = alterInputOutPutConstraints[unit]
                ? parseFloat(value) * parseFloat(alterInputOutPutConstraints[unit])
                : value;
            }
            if (item?.c) {
              const hex = parseInt(value).toString(16).padStart(4, '0');
              newValues[detail.variable] = `${parseInt(hex.slice(0, 2), 16)}:${parseInt(hex.slice(2), 16)}`;
            }
            newStatuses[detail.variable] = 'success';
          } else {
            newValues[detail.variable] = 'No value';
            newStatuses[detail.variable] = 'failed';
          }
        });
        setValues(prev => ({ ...prev, ...newValues }));
        setBitValues(prev => ({ ...prev, ...newBits }));
        setStatuses(newStatuses);
        setReadOnlyVars(selectedVars);
      } else {
        alert('Error reading: ' + (result.error || 'Unknown error'));
      }
    } catch (e) {
      console.log(e);
      alert('Failed to connect to server');
    } finally {
      setIsLoading(false);
    }
  };

  const handleWriteAll = async () => {
    if (selectedVars.length === 0) return alert('Select at least one variable to write');

    // bit-field params must be read first so the hidden bits are not overwritten with 0
    const missing = selectedVars.filter(v =>
      BIT_FIELDS[v] ? !bitValues[v] : (values[v] === undefined || values[v] === '')
    );
    if (missing.length > 0) {
      return alert(`Enter values (or Read first for bit params) for: ${missing.join(', ')}`);
    }

    setIsLoading(true);
    setStatuses({});
    const updatedValues = Object.fromEntries(
      Object.entries(values).map(([key, value]) => {
        const item = data.find(i => i.key === key);
        if (item?.c) return [key, value.split(':').join('')];
        if (key === 'WR_DATE_TIME') return [key, formatDateTimeToYYMMDDHHMMSS(value)];
        if (item?.options) return [key, getOptionValue(item.options, value)];
        const unit = item?.unit || '';
        if (unit && alterInputOutPutConstraints[unit])
          return [key, (parseFloat(value) / parseFloat(alterInputOutPutConstraints[unit])).toString()];
        return [key, value];
      })
    );
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/process-variables`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          variables: selectedVars.map(v => ({
            variable: v,
            value: BIT_FIELDS[v] ? fromBits(bitValues[v]) : updatedValues[v],
          })),
          version, macId,
          type: type || 'default'
        }),
      });
      const result = await response.json();
      if (result.success) {
        const newStatuses = {};
        result.details.forEach(d => { newStatuses[d.variable] = d.status; });
        setStatuses(newStatuses);
        setReadOnlyVars(prev => prev.filter(v => !selectedVars.includes(v)));
      } else {
        alert('Error writing: ' + (result.error || 'Unknown error'));
      }
    } catch (e) {
      alert('Failed to connect to server');
    } finally {
      setIsLoading(false);
    }
  };

  const allSelected = selectedVars.length === data.length;

  return (
    <div className="space-y-1">
      {isLoading && <Spinner />}

      {/* ── top action bar ── */}
      <div className="flex items-center justify-between">
        <button
          onClick={toggleSelectAll}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium shadow-sm transition-all duration-200
    ${allSelected
              ? "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md"
              : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 hover:shadow-md"
            }`}
        >
          {allSelected ? (
            <CheckSquare size={18} />
          ) : (
            <Square size={18} />
          )}

          {allSelected ? "Deselect All" : "Select All"}
        </button>
        <div className="flex items-center justify-center gap-3 pt-2 pb-4">
          <button
            onClick={handleReadAll}
            disabled={isLoading}
            className="cursor-pointer flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-gray-300 text-gray-700 font-medium shadow-sm hover:bg-gray-50 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            {isLoading ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              <Download size={16} />
            )}
            {isLoading ? "Reading..." : "Read Selected"}
          </button>

          <button
            onClick={handleWriteAll}
            disabled={isLoading}
            className="cursor-pointer flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white font-medium shadow-sm hover:bg-blue-700 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            {isLoading ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              <Upload size={16} />
            )}
            {isLoading ? "Writing..." : "Write Selected"}
          </button>
        </div>
        <div className="flex gap-1">
          <button
            onClick={() => window.open(`/other-page?macId=${btoa(macId)}&type=${btoa(type)}`, "_blank")}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 text-white border border-slate-700 hover:bg-slate-800 hover:border-blue-500 transition-all duration-200 shadow-sm cursor-pointer"
          >
            <Cpu size={18} />
            <span className="font-medium">IOT Firmware</span>
          </button>

          <button
            onClick={() => window.open(`/other-inv-page?macId=${btoa(macId)}&type=${btoa(type)}`, "_blank")}
            className="flex items-center gap-2 px-2 py-1 rounded-lg bg-slate-900 text-white border border-slate-700 hover:bg-slate-800 hover:border-indigo-500 transition-all duration-200 shadow-sm cursor-pointer"
          >
            <Upload size={18} />
            <span className="font-small text-md">Inverter Firmware</span>
          </button>
        </div>
      </div>

      {/* ── parameter cards grid ── */}
      <div 
         className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2"
      >
        {data.map(item => {
          //
          // if (
          //   genMode === "Gen Mode" &&
          //   ["INTLODONSOC", "INTLODOFFSOC", "GENLODONSOC", "GENLODOFFSOC"].includes(item.key)
          // ) {
          //   return null;
          // }

          // if (
          //   genMode === "Intelligent Load Mode" &&
          //   ["RUNFUNENABLE", "GENLODONSOC1", "GENLODOFFSOC2", "INTLODONSOC", "INTLODOFFSOC"].includes(item.key)
          // ) {
          //   return null;
          // }
          //
          const isSelected = selectedVars.includes(item.key);
          const status = statuses[item.key];
          const isReadOnly = readOnlyVars.includes(item.key);
          const unitDisplay = item.unit && item.unit !== 'null'
            ? (alterInputOutPutConstraints.hasOwnProperty(item.unit)
              ? item.unit.replace(/^[\d.]+/, '')
              : item.unit)
            : null;

          /* ───── bit-field card (e.g. IslandingProtection) ───── */
          if (BIT_FIELDS[item.key]) {
            const bits = bitValues[item.key];
            return (
              <div
                key={item.key}
                onClick={() => handleCheckboxChange(item.key, !isSelected)}
                className={`group  rounded-xl border p-4 cursor-pointer
  md:col-span-2 xl:col-span-4
  transition-all duration-150
  ${isSelected ? 'border-blue-200 ring-1 ring-blue-100' : 'border-gray-100 hover:border-gray-200'}
  ${status === 'success' ? 'border-green-200 ring-1 ring-green-100' : ''}
  ${status === 'failed' ? 'border-red-200 ring-1 ring-red-100' : ''}
`}
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <span
                    className={`w-4 h-4 shrink-0 rounded border-2 flex items-center justify-center transition-all
                      ${isSelected ? 'bg-blue-500 border-blue-500' : 'border-gray-300 group-hover:border-gray-400'}`}
                    onClick={e => { e.stopPropagation(); handleCheckboxChange(item.key, !isSelected); }}
                  >
                    {isSelected && <span className="text-white text-[9px] leading-none">✓</span>}
                  </span>
                  <span className="text-xs font-semibold text-gray-600 leading-tight">
                    {item.label}
                  </span>
                </div>

                <div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-2"
                  onClick={e => e.stopPropagation()}
                >
                  {bits && (
                    <div className="sm:col-span-2 text-[11px] text-gray-400">
                      Value: {fromBits(bits)} &nbsp;|&nbsp; Hex: {bitsToHex(bits)}
                    </div>
                  )}
                  {BIT_FIELDS[item.key].map(f => {
                    const hasRead = !!bits;
                    const on = bits?.[f.bit] === '1';
                    return (
                      <div
                        key={f.bit}
                        className="flex items-center justify-between px-20 text-xs text-gray-600"
                      >
                        <span>{f.label}</span>
                        <button
                          type="button"
                          role="switch"
                          aria-checked={on}
                          disabled={!hasRead}
                          onClick={() => handleBitChange(item.key, f.bit, on ? '0' : '1')}
                          className={`flex items-center gap-2 px-2 py-1 rounded-lg border text-[11px] font-medium transition
                            ${!hasRead
                              ? 'bg-gray-50 border-gray-200 text-gray-300 cursor-not-allowed'
                              : on
                                ? 'bg-green-50 border-green-200 text-green-600 cursor-pointer'
                                : 'bg-gray-50 border-gray-200 text-gray-500 cursor-pointer'}`}
                        >
                          <span className={`w-2 h-2 rounded-full ${!hasRead ? 'bg-gray-300' : on ? 'bg-green-500' : 'bg-gray-400'}`} />
                          {!hasRead ? 'Read first' : on ? 'Enabled' : 'Disabled'}
                        </button>
                      </div>
                    );
                  })}
                </div>

                {status && (
                  <div className="mt-2.5">
                    <span className={`inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full
                      ${status === 'success' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-500'}`}
                    >
                      <span>●</span>
                      {status}
                    </span>
                  </div>
                )}
              </div>
            );
          }

          /* ───── normal card ───── */
          return (
            <div
              key={item.key}
              onClick={() => handleCheckboxChange(item.key, !isSelected)}
              className={`group relative bg-white rounded-xl border transition-all duration-150 cursor-pointer p-4
                ${isSelected
                  ? 'border-blue-200 ring-1 ring-blue-100'
                  : 'border-gray-100 hover:border-gray-200'
                }
                ${status === 'success' ? 'border-green-200 ring-1 ring-green-100' : ''}
                ${status === 'failed' ? 'border-red-200 ring-1 ring-red-100' : ''}
                ${!item.key ? 'invisible' : ''}
              `}
            >
              {/* card header row */}
              <div className={`flex items-start justify-between mb-3 ${item.bc} `}>
                <div className="flex items-center gap-2.5 flex-1 min-w-0 mt-2">
                  {/* checkbox */}
                  <span
                    className={`w-4 h-4 shrink-0 rounded border-2 flex items-center justify-center transition-all
                      ${isSelected ? 'bg-blue-500 border-blue-500' : 'border-gray-300 group-hover:border-gray-400'}`}
                    onClick={e => { e.stopPropagation(); handleCheckboxChange(item.key, !isSelected); }}
                  >
                    {isSelected && <span className="text-white text-[9px] leading-none">✓</span>}
                  </span>

                  {/* label */}
                  <span className="text-xs font-semibold text-gray-600 leading-tight line-clamp-2">
                    {item.label}
                  </span>
                </div>

                {/* unit badge */}
                {unitDisplay && (
                  <span className="ml-2 shrink-0 text-[10px] font-medium text-gray-400 bg-gray-50 border border-gray-100 px-1.5 py-0.5 rounded-md">
                    {unitDisplay}
                  </span>
                )}
              </div>

              {/* input / select */}
              <div onClick={e => e.stopPropagation()}>
                {item.options?.length > 0 ? (
                  <select
                    value={values[item.key] ?? ''}

                    onChange={e => handleValueChange(item.key, e.target.value)}
                    className={`w-full px-3 py-2 text-sm border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition
                      ${isReadOnly ? 'bg-gray-50 text-gray-500' : 'bg-white'} border-gray-200`}
                  >
                    <option value="">Select</option>
                    {item.options.map(opt => {
                      const [k, v] = Object.entries(opt)[0];
                      return <option key={k} value={v}>{v}</option>;
                    })}
                  </select>
                ) : (
                  <input
                    type="text"
                    value={values[item.key] ?? ''}

                    placeholder={item.range !== 'null' ? item.range : '—'}
                    onChange={e => handleValueChange(item.key, e.target.value)}
                    className={`w-full px-3 py-2 text-sm border rounded-lg text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition
                      ${isReadOnly ? 'bg-gray-50 text-gray-500' : 'bg-white'} border-gray-200`}
                  />
                )}
              </div>

              {/* status badge */}
              {status && (
                <div className="mt-2.5">
                  <span className={`inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full
                    ${status === 'success' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-500'}`}
                  >
                    <span>{status === 'success' ? '●' : '●'}</span>
                    {status}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ── bottom action bar ── */}

    </div>
  );
}