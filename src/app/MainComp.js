'use client'
import { useState, useEffect, Suspense } from 'react';
import VoltageParam from '@/components/VolatageParam';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import data from './data';
import merchant from './merchant';

export default function MainComp() {
  const [deviceInfo, setInfo] = useState([]);
  const searchParams = useSearchParams();

  useEffect(() => {
    const infoArray = [
      { label: 'Mac ID', value: searchParams.get('macId')?.toLowerCase() },
      { label: 'Inverter Serial No', value: searchParams.get('inverterSerialNo') },
      { label: 'Version', value: searchParams.get('Version') },
      { label: 'Role', value: searchParams.get('Role') },
    ].filter(item => item.value);
    setInfo(infoArray);
  }, [searchParams]);

  const [version] = useState(searchParams.get('Version') || '0001');
  const findType = searchParams.get('Type')?.toLowerCase() || "";
  const findRole = searchParams.get('Role')?.toLowerCase() || "";
  console.log('findType:',findType);

  const activeDataSource = (findRole === 'admin' || findRole === 'engineer') ? data : merchant;
  const settingsByCategory = activeDataSource[findType]?.settingsByCategory || {};
  const tabMenus = Object.keys(settingsByCategory);

  const [selectedMenu, setSelectedMenu] = useState(tabMenus[0]);
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuContents = {};
  Object.keys(settingsByCategory).forEach((category) => {
    menuContents[category] = (
      <VoltageParam
        data={settingsByCategory[category]}
        macId={searchParams.get('macId')}
        version={version}
        type={findType}
      />
    );
  });

  return (
<Suspense
  fallback={
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="flex flex-col items-center gap-3">
        <div className="h-10 w-10 rounded-full border-4 border-slate-200 border-t-blue-500 animate-spin" />
        <p className="text-sm text-slate-500 font-medium">
          Loading settings...
        </p>
      </div>
    </div>
  }
>
  <div className=" min-h-screen bg-slate-50 flex font-[family-name:var(--font-geist-sans)]">

    {/* Mobile Overlay */}
    {mobileOpen && (
      <div
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
        onClick={() => setMobileOpen(false)}
      />
    )}

    {/* SIDEBAR */}
    <aside
      className={`
        fixed md:relative z-50 md:z-auto
        h-screen
        bg-white/95 backdrop-blur-xl
        border-r border-slate-200/80
        shadow-xl shadow-slate-200/40
        flex flex-col
        transition-all duration-300 ease-out
        ${collapsed ? "w-20" : "w-72"}
        ${
          mobileOpen
            ? "translate-x-0"
            : "-translate-x-full md:translate-x-0"
        }
      `}
    >
      {/* Header */}
      <div
        className={`h-16 px-4 border-b border-slate-100 flex items-center ${
          collapsed ? "justify-center" : "justify-between"
        }`}
      >
        {!collapsed && (
          <div>
            <h2 className="font-semibold text-slate-800">Settings</h2>
            <p className="text-xs text-slate-400">
              Manage your device
            </p>
          </div>
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="
            h-9 w-9 flex items-center justify-center
            rounded-xl
            text-slate-500
            hover:bg-slate-100
            hover:text-slate-700
            transition-all
          "
        >
          {collapsed ? "→" : "←"}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <div className="space-y-1">
          {tabMenus.map((menu) => (
            <button
              key={menu}
              title={collapsed ? menu : ""}
              onClick={() => {
                setSelectedMenu(menu);
                setMobileOpen(false);
              }}
              className={`
                group relative w-full
                flex items-center gap-3
                px-3 py-3
                rounded-2xl
                text-sm font-medium
                transition-all duration-200

                ${
                  selectedMenu === menu
                    ? `
                      bg-gradient-to-r
                      from-blue-500
                      to-indigo-500
                      text-white
                      shadow-lg shadow-blue-500/20
                    `
                    : `
                      text-slate-600
                      hover:bg-slate-100
                      hover:text-slate-900
                    `
                }
              `}
            >
              <span
                className={`
                  h-2.5 w-2.5 rounded-full shrink-0
                  transition-all
                  ${
                    selectedMenu === menu
                      ? "bg-white"
                      : "bg-slate-300 group-hover:bg-slate-500"
                  }
                `}
              />

              {!collapsed && (
                <span className="truncate">{menu}</span>
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* Footer */}
      {!collapsed && (
        <div className="p-4 border-t border-slate-100">
          <div className="rounded-xl bg-slate-50 p-3 text-center">
            <p className="text-xs text-slate-400">
              Version
            </p>
            <p className="text-sm font-semibold text-slate-700">
              v{version}
            </p>
          </div>
        </div>
      )}
    </aside>

    {/* MAIN */}
    <div className="flex-1 min-w-0 flex flex-col">

      {/* TOPBAR */}
      <header
        className="
          sticky top-0 z-30
          bg-white/80 backdrop-blur-xl
          border-b border-slate-200/70
        "
      >
        <div className="h-16 px-4 md:px-8 flex items-center gap-4">
          {/* Mobile Menu */}
          <button
            className="
              md:hidden
              h-10 w-10
              flex items-center justify-center
              rounded-xl
              text-slate-600
              hover:bg-slate-100
            "
            onClick={() => setMobileOpen(true)}
          >
            ☰
          </button>

          {/* Page Title */}
          <div>
            <h1 className="text-lg font-semibold text-slate-800">
              {selectedMenu}
            </h1>
          </div>

          {/* Device Info */}
          <div className="ml-auto flex flex-wrap justify-end gap-2">
            {deviceInfo.map((item, index) => (
              <div
                key={index}
                className="
                  flex items-center gap-2
                  px-3 py-2
                  rounded-xl
                  bg-white
                  border border-slate-200
                  shadow-sm
                "
              >
                <span className="text-xs text-slate-400">
                  {item.label}
                </span>

                <span className="text-xs font-semibold text-slate-700">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-6xl mx-auto px-1 md:px-1 py-1">
          <div
            className="
              bg-white
              border border-slate-200
              rounded-3xl
              shadow-sm
              p-1 md:p-1
            "
          >
            {menuContents[selectedMenu] &&
              React.cloneElement(
                menuContents[selectedMenu],
                { key: selectedMenu }
              )}
          </div>
        </div>
      </main>
    </div>
  </div>
</Suspense>
  );
}