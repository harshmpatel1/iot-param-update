export const bg = {
    a: "border-t-3 border-red-600",
    b: "border-t-3 border-yellow-600",
    c: "border-t-3 border-green-600",
    d: "border-t-3 border-blue-600",
};


const data = {
    'thinkpower': {

        'settingsByCategory': {

            GeneralSettings: [
                { key: "WORKMD", label: "WORKING_MODE", range: "[0,3]", options: [{ '00': 'General Mode' }, { '01': "Peak Shaving and valley filling mode" }, { '02': 'charging priority mode' },], },
                { key: "ANTBCKFLOW", label: "ANTI_BACKFLOW", range: "[0,1]" },
                { key: "EXPORTPWLMT", label: "EXPORT_POWER_LIMIT", range: "[0,100]", unit: '%' },
                { key: "CHRGWTGRDINSTORMD", label: "CHARGE_WITH_GRID_IN_STORAGE_MODE", range: "[0,1]" },
                { key: "STORMDCHRGSOC", label: "STORAGE_MODE_CHARGE_SOC", range: "[20,100]", unit: '%' },
                { key: "STORMDCHRGPW", label: "STORAGE_MODE_CHARGE_POWER", range: '[500-10000]', unit: 'w' },
                { key: "BUZZSET", label: "BUZZER_SETTING", range: '[0,1]' },
                { key: "SHDOWFUNSET", label: "SHADOW_FUNCTION_SETTING", range: '[0,1]' },
                { key: "ISOLATFUN", label: "ISOLATION_FUNCTION", range: '[0,1]' },
                { key: "ENRGYMONETFUN", label: "ENERGY_MONITORING_FUNCTION", range: '[0,1]' },
                { key: "ACCUPFUNSET", label: "AC_COUPLING_FUNCTION_SETTING", range: '[0,1]' },
                { key: "GRIDCOD", label: "GRID_CODE" },
                { key: "RECNTTIM", label: "RECONNECT_TIME", range: '[0-1000]', unit: 'sec' },
                { key: "ROCOFEN", label: "ROCOF_ENABLE", range: "[0,1]" },
                { key: "ROCOFVAL", label: "ROCOF_VALUE", range: "[0-500]" },
                { key: "LVRTEN", label: "LVRT_ENABLE", range: "[0,1]" },
                { key: "LVRTVOLT", label: "LVRT_VOLT", range: '[240.0-300.0]', unit: 'V' },
                { key: "HVRTEN", label: "HVRT_ENABLE", range: '[0-1]' },
                { key: "HVRTVOLT", label: "HVRT_VOLT", range: '[50.0-220.0]', unit: 'V' },
                { key: "ACTISLNDEN", label: "ACTIVE_ISLANDING_ENABLE", range: "[0,1]" }
            ],

            EPSSettings: [
                { key: "EPSFUNEN", label: "EPS_FUNCTION_ENABLE", range: "[0,1]" },
                { key: "EPSVOLTSET", label: "EPS_VOLT_SET", range: "[208 or 220 or 230 or 240]", unit: 'V' },
                { key: "EPSFREQSET", label: "EPS_FREQUENCY_SET", range: '[50 or 60]', unit: 'Hz' },
                { key: "GRDVAHAUTOLOWPW", label: "GRID_VHA_AUTO_LOW_POWER", range: "[0,1]" }
            ],

            GridSettings: [
                // grid_under_vol
                { key: "GRDUNDVOLTVAL1", label: "GRID_UNDER_VOLT_VALUE_1", range: "[140.0-220.0]", unit: 'V' },
                { key: "GRDUNDVOLTVAL2", label: "GRID_UNDER_VOLTAGE_VALUE_2", range: "[50.0-220.0]", unit: 'V' },
                { key: "GRDUNDVOLTVAL3", label: "GRID_UNDER_VOLTAGE_VALUE_3", range: "[50.0-220.0]", unit: 'V' },

                // grid_over_vol
                { key: "GRDOVRVOLTVAL1", label: "GRID_OVER_VOLT_VALUE_1", range: "[240.0-300.0]", unit: 'V' },
                { key: "GRDOVRVOLTVAL2", label: "GRID_OVER_VOLTAGE_VALUE_2", range: "[240.0-300.0]", unit: 'V' },
                { key: "GRDOVRVOLTVAL3", label: "GRID_OVER_VOLTAGE_VALUE_3", range: "[240.0-300.0]", unit: 'V' },

                // grid_under_fr_time
                { key: "GRDUNDFREQVAL1", label: "GRID_UNDER_FREQUENCY_VALUE_1", range: "[45.00-60.00]", unit: 'Hz' },
                { key: "GRDUNDFREQVAL2", label: "GRID_UNDER_FREQUENCY_VALUE_2", range: "[45.00-60.00]", unit: 'Hz' },

                // grid_over_fr_time
                { key: "GRDOVRFREQVAL1", label: "GRID_OVER_FREQENCY_VALUE_1", range: "[50.00-65.00]", unit: 'Hz' },
                { key: "GRDOVRFREQVAL2", label: "GRID_OVER_FREQUENCY_VALUE_2", range: "[50.0-65.00]", unit: 'Hz' },

                // grid_UnderVol_time
                { key: "GRDUNDVOLTTIM1", label: "GRID_UNDER_VOLTAGE_TIME_1", range: "[0-65000]", unit: 'sec' },
                { key: "GRDUNDVOLTTIM2", label: "GRID_UNDER_VOLTAGE_TIME_2", range: "[0-65000]", unit: 'sec' },
                { key: "GRDUNDVOLTTIM3", label: "GRID_UNDER_VOLTAGE_TIME_3", range: "[0-65000]", unit: 'sec' },

                // grid_ovrVol_time
                { key: "GRDOVRVOLTTIM1", label: "GRID_OVER_VOLTAGE_TIME_1", range: "[0-65000]", unit: 'sec' },
                { key: "GRDOVRVOLTTIM2", label: "GRID_OVER_VOLTAGE_TIME_2", range: "[0-65000]", unit: 'sec' },
                { key: "GRDOVRVOLTTIM3", label: "GRID_OVER_VOLTAGE_TIME_3", range: "[0-65000]", unit: 'sec' },

                // grid_und_fr_time
                { key: "GRDUNDFREQTIM1", label: "GRID_UNDER_FREQUENCY_TIME_1", range: "[0-65000]", unit: 'sec' },
                { key: "GRDUNDFREQTIM2", label: "GRID_UNDER_FREQUENCY_TIME_2", range: "[0-65000]", unit: 'sec' },

                // grid_ov_fr_time
                { key: "GRDOVRFREQTIM1", label: "GRID_OVER_FREQUENCY_TIME_1", range: "[0-65000]", unit: 'sec' },
                { key: "GRDOVRFREQTIM2", label: "GRID_OVER_FREQUENCY_TIME_2", range: "[0-65000]", unit: 'sec' },

                // additional (not included in requested sort order, left at end)
                { key: "GRDVOLTOVRVOLT10MIN", label: "GRID_VOLT_OVER_VOLTAGE_10_MIN", range: "[240.0-300.0]", unit: 'V' },
                { key: "GRDVOLTBLANEN10MIN", label: "GRID_VOLT_BALANCE_ENABLE_10_MIN", range: "[140.0-220.0]", unit: 'V' },

            ]
            ,

            CommunicationAndReset: [
                { key: "REMOTEOFF", label: "REMOTE_OFF", range: '[00,01]' },
                { key: "CLRALRNGDATA", label: "CLEAR_ALL_RUNNING_DATA", range: 'Write1Execute Command' },
                { key: "RESTFCTRY", label: "RESTORE_FACTORY_SETTING", range: 'Write1Execute Command' },
                { key: "MSTRSLAVSET", label: "MASTER_SLAVE_SETTING", range: '[0,1]' },
                { key: "INTRCOMMADD", label: "INTERNAL_COMM_ADD", range: '[0x01 default' }
            ],

            PowerControlSettings: [
                { key: "OVRFREQPWREDU", label: "OVER_FREQUENCY_POWER_REDUCTION", range: '[0,1]' },
                { key: "STRTFREQOFOVRFREQPWREDU", label: "START_FREQ_OF_OVER_FREQ_POWER_REDUCTION", range: '[50.20-65.00]', unit: 'Hz' },
                { key: "ENDFREQOFOVRFREQPWREDU", label: "END_FREQ_OF_OVER_FREQ_POWER_REDUCTION", range: '[50.20-65.00]', unit: 'Hz' },
                { key: "OVRFREQPWREDURATIO", label: "OVER_FREQ_POWER_REDUCTION_RATIO", range: '[10-18]', unit: '%' },
                { key: "STRTPWRATE", label: "START_POWER_RATE", range: [0, 100], unit: '%' },
                { key: "RECNTPWRATE", label: "RECONNECT_POWER_RATE", range: [0, 100], unit: '%' },
                { key: "DRMFUN", label: "DRM_FUNCTION", range: '[0,1]' },
                { key: "RECTPWCNTRL", label: "REACTIVE_POWER_CONTROL", range: '[0,1]' },
                {
                    key: "RECTPWCNTRMOD", label: "REACTIVE_POWER_CONTROL_MODE", range: '[00-04]', options: [{ '00': 'Fixed PF' }, {
                        '01': 'Fixed Q VAR'
                    }, { '02': 'CosPhi-P/Pn Curve' }, { '03': 'Q(U) Curve' }, {
                        '04': 'Fixed Q VAR + CosPhi-P/Pn Curve'
                    }]
                },
                { key: "FIXEDPF", label: "FIXED_POWERFACTOR", range: '[800,1000]' },
                { key: "FIXDQVAR", label: "FIXED_Q_VAR", range: '[-500000 -500000]', unit: "%" },
                { key: "FRSTPNTPPN", label: "1st point P/Pn of CosPhi-P/Pn curve", range: '[0-100]', unit: "%" },
                { key: "FRSTPNTCOSPHI", label: "1st point CosPhi of CosPhi-P/Pn curve", range: '[800-1000]' },
                { key: "SCNDPNTPPN", label: "2nd point P/Pn of CosPhi-P/Pn curve", range: '[0-100]', unit: "%" },
                { key: "SCNDPNTCOSPHI", label: "2nd point CosPhi of CosPhi-P/Pn curve", range: '[80-1000]' },
                { key: "QUMODTRGPW", label: "Q(U) mode trigger power P/Pn", range: '[0-100]', unit: "%" },
                { key: "QUMODCUTPW", label: "P/Pn Q(U) mode cut-off power P/Pn", range: '[0-100]', unit: "%" },
                { key: "FRSTPNTUUN", label: "1st point U/Un of Q(U) curve", range: '[80-100]', unit: "%" },
                { key: "FRSTPNTQPN", label: "1st point Q/Pn of Q(U) curve", range: '[0-48.3]', unit: "%" },
                { key: "SCNDPNTUUN", label: "2nd point U/Un of Q(U) curve", range: '[80-100]', unit: "%" },
                { key: "SNDPNTQPN", label: "2nd point Q/Pn of Q(U) curve", range: '[0-48.3]', unit: "%" },
                { key: "THRDPNTUUN", label: "3rd point U/Un of Q(U) curve", range: '[100-136]', unit: "%" },
                { key: "THRDPNTQPN", label: "3rd point Q/Pn of Q(U) curve", range: '[-48.3-0]', unit: "%" },
                { key: "FRTHPNTUUN", label: "4th point U/Un of Q(U) curve", range: '[100-136]', unit: "%" },
                { key: "FRTHPNTQPN", label: "4th point Q/Pn of Q(U) curve", range: '[100-136]', unit: "%" }
            ],

        },
        tabMenus: ['GeneralSettings',
            "EPSSettings", 'ProtectionSettings', 'CommunicationAndReset', 'PowerControlSettings']
    },
    'deye': {
        "settingsByCategory": {
            "VoltageAndFrequencyLimits": [
                { "key": "DCVUPLI1", "label": "DC_VOLTAGE_UPPER_LIMIT", "range": "[200.0,1000.0]", "unit": "0.1V" },
                { "key": "GRVUPLI1", "label": "GRID_VOLTAGE_UPPER_LIMIT", "range": "[160.0,550.0]", "unit": "0.1V" },
                { "key": "GRVUPLI2", "label": "GRID_VOLTAGE_UPPER_LIMIT_L2", "range": "[160.0,550.0]", "unit": "0.1V" },
                { "key": "GRVUPLI3", "label": "GRID_VOLTAGE_UPPER_LIMIT_L3", "range": "[160.0,550.0]", "unit": "0.1V" },
                { "key": "GRVLOLI1", "label": "GRID_VOLTAGE_LOWER_LIMIT", "range": "[160.0,550.0]", "unit": "0.1V" },
                { "key": "GRVLOLI2", "label": "GRID_VOLTAGE_LOWER_LIMIT_L2", "range": "[160.0,550.0]", "unit": "0.1V" },
                { "key": "GRVLOLI3", "label": "GRID_VOLTAGE_LOWER_LIMIT_L3", "range": "[160.0,550.0]", "unit": "0.1V" },
                { "key": "GRCUPLI1", "label": "GRID_CURRENT_UPPER_LIMIT", "range": "[1.0,2000.0]", "unit": "0.1A" },
                { "key": "GRFUPLI1", "label": "GRID_FREQ_UPPER_LIMIT", "range": "[45.00,65.00]", "unit": "0.01Hz" },
                { "key": "GRFUPLI2", "label": "GRID_FREQ_UPPER_LIMIT_L2", "range": "[45.00,65.00]", "unit": "0.01Hz" },
                { "key": "GRFUPLI3", "label": "GRID_FREQ_UPPER_LIMIT_L3", "range": "[45.00,65.00]", "unit": "0.01Hz" },
                { "key": "GRFLOLI", "label": "GRID_FREQ_LOWER_LIMIT", "range": "[45.00,65.00]", "unit": "0.01Hz" },
                { "key": "GRFLOLI2", "label": "GRID_FREQ_LOWER_LIMIT_L2", "range": "[45.00,65.00]", "unit": "0.01Hz" },
                { "key": "GRFLOLI3", "label": "GRID_FREQ_LOWER_LIMIT_L3", "range": "[45.00,65.00]", "unit": "0.01Hz" },
                { "key": "STRVUPLI", "label": "STARTING_VOLTAGE_UPPER_LIMIT", "range": "[700.0,900.0]", "unit": "0.1V" },
                { "key": "STRVLOLI", "label": "STARTING_VOLTAGE_LOWET_LIMIT", "range": "[450.0,900.0]", "unit": "0.1V" }
            ],
            "ProtectionTimers": [
                { "key": "GRVUPLITT1OD", "label": "GRID_VOLTAGE_UPPER_LIMIT_TRIP_TIME_1OD", "range": "[5,65000]", "unit": "10mSec" },
                { "key": "GRVUPLITT2OD", "label": "GRID_VOLTAGE_UPPER_LIMIT_TRIP_TIME_2OD", "range": "[5,65000]", "unit": "10mSec" },
                { "key": "GRVUPLITT3OD", "label": "GRID_VOLTAGE_UPPER_LIMIT_TRIP_TIME_3OD", "range": "[5,65000]", "unit": "10mSec" },
                { "key": "GRVLOLITT1OD", "label": "GRID_VOLTAGE_LOWER_LIMIT_TRIP_TIME_1OD", "range": "[5,65000]", "unit": "10mSec" },
                { "key": "GRVLOLITT2OD", "label": "GRID_VOLTAGE_LOWER_LIMIT_TRIP_TIME_2OD", "range": "[5,65000]", "unit": "10mSec" },
                { "key": "GRVLOLITT3OD", "label": "GRID_VOLTAGE_LOWER_LIMIT_TRIP_TIME_3OD", "range": "[5,65000]", "unit": "10mSec" },
                { "key": "GRFUPLITT1OD", "label": "GRID_FREQ_UPPER_LIMIT_TRIP_TIME_1OD", "range": "[5,65000]", "unit": "10mSec" },
                { "key": "GRFUPLITT2OD", "label": "GRID_FREQ_UPPER_LIMIT_TRIP_TIME_2OD", "range": "[5,65000]", "unit": "10mSec" },
                { "key": "GRFUPLITT3OD", "label": "GRID_FREQ_UPPER_LIMIT_TRIP_TIME_3OD", "range": "[5,65000]", "unit": "10mSec" },
                { "key": "GRFLOLITT1OD", "label": "GRID_FREQ_LOWER_LIMIT_TRIP_TIME_1OD", "range": "[5,65000]", "unit": "10mSec" },
                { "key": "GRFLOLITT2OD", "label": "GRID_FREQ_LOWER_LIMIT_TRIP_TIME_2OD", "range": "[5,65000]", "unit": "10mSec" },
                { "key": "GRFLOLITT3OD", "label": "GRID_FREQ_LOWER_LIMIT_TRIP_TIME_3OD", "range": "[5,65000]", "unit": "10mSec" },
                { "key": "SLFTSTTM", "label": "SELF_TEST_TIME", "range": "0-1000 Sec", "unit": "null" },
                { "key": "SELFCKTIM", "label": "SELF_CHECKING_TIME", "range": "[0-1000]", "unit": "sec" }
            ],
            "PowerRegulation": [
                { "key": "PWRFCTREG", "label": "POWER_FACTOR_REGULATION", "range": "[0,2000]", "unit": "0.001" },
                { "key": "ACTPWRREG", "label": "ACTIVE_POWER_REGULATION", "range": "[0,1200]", "unit": "0%" },
                { "key": "RETPWRREG", "label": "REACTIVE_POWER_REGULATION", "range": "[0,1200]", "unit": "0%" },
                { "key": "APPPWRREG", "label": "APPARENT_POWER_REGULATION", "range": "[0,1200]", "unit": "0%" },
                { "key": "PWRWHFCTR", "label": "POWER_WH_FACTOR", "range": "0-120", "unit": "null" }
            ],
            "SystemConfiguration": [
                { "key": "RTDGRVST", "label": "RATED_GRID_VOLTAGE", "range": "0-1", "unit": "null", "options": [{ '0': '127/220V' }, { '1': '220/380V' }] },
                { "key": "GRDSTNDRD", "label": "GRID_STANDARD", "range": "[0-20]", "unit": "null", "options": [{ '1': 'INMETRO' }, { '2': 'EN50549' }, { '3': 'EN50438' }, { '4': 'IEC61727' }, { '5': 'CUSTOM' }, { '6': 'VDE_AR_N_4105' }, { '7': 'UTE_C15_712_1' }, { '8': 'RD_1699' }, { '9': 'CEI_0_21' }, { '10': 'G8_G99' }, { '11': 'AS4777' }] },
                { "key": "RMTLOCK", "label": "REMOTE_LOCK", "range": "0,1", "unit": "null" },
                { "key": "SWONOFFEN", "label": "SWITCH_ON_OFF_ENABLE", "range": "0,1", "unit": "null" },
                { "key": "FCTRRSTEN", "label": "FACTORY_RESET_ENABLE", "range": "0,1", "unit": "null" },
                { "key": "ILNDPRTEN", "label": "ISLAND_PROTECTION_ENABLE", "range": "0,1", "unit": "null" },
                { "key": "METEREN", "label": "METER_ENABLED", "range": "0,1", "unit": "null" },
                { "key": "RCDEN", "label": "RCD_ENABLED", "range": "0,1", "unit": "null" },
                { "key": "RISOEN", "label": "RISO_ENABLED", "range": "0,1", "unit": "null" },
                { "key": "PVCURVEN", "label": "PV_CURVE_ENABLED", "range": "0,1", "unit": "null" },
                { "key": "EEPRMINEN", "label": "EEPROME_INITAL_ENABLED", "range": "0,1", "unit": "null" },
                { "key": "LIMTRFCEN", "label": "LIMITER_FUNCTION_ENABLE", "range": "0,1", "unit": "null" },
                { "key": "EXTCTFLAG", "label": "EXTERNAL_CT_FLAG", "range": "[10.0-2000.0]", "unit": "0.1Kohm" }
            ],
            "FrequencyControl": [
                { "key": "OVRFDRTPT", "label": "OVER_FREQUENCY_DRATE_POINT", "range": "[45.00,65.00]", "unit": "0.01Hz" },
                { "key": "OVRFDRTEE", "label": "OVER_FREQUENCY_DRATE", "range": "[0,100]", "unit": "null" }
            ],
            "EnvironmentalMonitoring": [
                { "key": "INTMPUPLI", "label": "INTERNAL_TEMPERATURE_UPPER_LIMIT", "range": "[50.0,300.0]", "unit": "0.1C" }
            ]
        },
        "tabMenus": [
            "VoltageAndFrequencyLimits",
            "ProtectionTimers",
            "PowerRegulation",
            "SystemConfiguration",
            "FrequencyControl",
            "EnvironmentalMonitoring"
        ]
    },
    'afor3phase':
    {
        "settingsByCategory": {
            "BasicSettings": [
                { "key": "RTDACTPW", "label": "RATEDACTIVE_POWR", "range": "null", "unit": "null" },
                { "key": "RTDAPPPW", "label": "RATEDAPPERENT_POWER", "range": "null", "unit": "null" },
                {
                    "key": "CHOOSECUNTRY",
                    "label": "Safty Regulations",
                    "range": "null",
                    "unit": "null",
                    "options": [
                        { 0: "Com-50Hz" },
                        { 1: "Com-60Hz" },
                        { 2: "China" },
                        { 3: "Japan-50" },
                        { 4: "Japan-60" },
                        { 5: "US_240S" },
                        { 6: "US_240D" },
                        { 7: "US_208S" },
                        { 8: "US_208D" },
                        { 9: "Australia" },
                        { 10: "UK_G99" },
                        { 11: "UK_G98" },
                        { 12: "DE" },
                        { 13: "DE_BDEW" },
                        { 14: "France" },
                        { 15: "Fra-IL50Hz" },
                        { 16: "Fra-IL60Hz" },
                        { 17: "Poland" },
                        { 18: "Italy" },
                        { 19: "ThailandME" },
                        { 20: "ThailandPE" },
                        { 21: "India" },
                        { 22: "South Korea" },
                        { 23: "Philippin" },
                        { 24: "DPRK" },
                        { 25: "Malaysia" },
                        { 26: "Cyprus" },
                        { 27: "Holland" },
                        { 28: "EN50549-1" },
                        { 29: "Spain" },
                        { 30: "Greece" },
                        { 31: "Hungary" },
                        { 32: "Portugal" },
                        { 33: "Belgium" },
                        { 34: "Denmark" },
                        { 35: "Estonia" },
                        { 36: "Moldova" },
                        { 37: "Slovak" },
                        { 38: "Sweden" },
                        { 39: "Austria" },
                        { 40: "Bulgaria" },
                        { 41: "Croatia" },
                        { 42: "Ukraine" },
                        { 43: "S.Africa" },
                        { 44: "Mauritius" },
                        { 45: "Israel" },
                        { 46: "Mexico" },
                        { 47: "Brazil" },
                        { 48: "Sri Lanka" },
                        { 49: "Chile" },
                        { 50: "CONNERA" },
                        { 251: "Ireland" },
                        { 252: "Lithuania" },
                        { 253: "Slovenia" },
                        { 254: "Latvia" },
                        { 255: "IEC 61727" },
                        { 256: "Colombia" },
                        { 257: "Romania" },
                        { 258: "Norway" },
                        { 259: "Bolivia" },
                        { 260: "Dominica_120" },
                        { 261: "Dominica_240" },
                        { 262: "Vietnam" },
                        { 263: "Czech" },
                        { 264: "Australia" },
                        { 265: "Pakistan" },
                        { 266: "Nigeria" },
                        { 267: "Australia B" },
                        { 268: "Australia C" },
                        { 269: "New Zealand" },
                        { 270: "CostaRica" },
                        { 271: "Iran" },
                        { 272: "Azerbaijan" }
                    ]
                },
                { "key": "PVINPUTMODE", "label": "PV_INPUT_MODE", "range": "null", "unit": "null", "options": [{ 0: 'alone' }, { 1: 'parallel' }, { 2: 'no pv' }] },

                { "key": "PVSTRTVOLT", "label": "PV_START_VOLT", "range": "null", "unit": "0.1V" },
                { "key": "CTMETERTYPEWR", "label": "CT_METER_TYPE_WRITE", "range": "0-3", "unit": "null", 'options': [{ 0: 'No Meter' }, { 1: 'CT' }, { 2: 'Meter' }] },
                { "key": "METERBRAND", "label": "METER_BRAND", "range": "null", "unit": "null" },
                { "key": "UPDATENABLE", "label": "UPDATE_ENABLE", "range": "0-1", "unit": "null" },
                { "key": "UPDATEBAUD", "label": "UPDATE_BAUDRATE", "range": "0-1", "unit": "null", 'options': [{ 0: '9600' }, { 1: '115200' }] },
                { "key": "UPDATECPUNO", "label": "UPDATE_CPU_NO", "range": "0-3", "unit": "null", "options": [{ 1: 'HMI' }, { 2: 'Master' }, { 3: 'Slave' }] },
                { "key": "UPDATEPKGSIZE", "label": "UPDATE_PACK_SIZE", "range": "null", "unit": "null" }
            ],
            "GridProtection": [
                { "key": "GRDONJUDGTIME", "label": "GRID_ON_JUDGE_TIME", "range": "10-1200", "unit": "Sec" },
                { "key": "GRDONMAXVOLT", "label": "GRID_ON_MAX_VOLT", "range": "101.0-320.0", "unit": "0.1V" },
                { "key": "GRDONMINVOLT", "label": "GRID_ON_MIN_VOLT", "range": "50.0-230.0", "unit": "0.1V" },
                { "key": "GRDONMAXFREQ", "label": "GRID_ON_MAX_FREQ", "range": "50.00-70.00", "unit": "0.01Hz" },
                { "key": "GRDONMINFREQ", "label": "GRID_ON_MIN_FREQ", "range": "40.00-60.00", "unit": "0.01Hz" },
                { "key": "GRDONMAXRECPNT", "label": "GRID_VOLT_MAX_RECOVER_POINT", "range": "101.0-320.0", "unit": "0.1V" },
                { "key": "GRDVOLTMINRECPNT", "label": "GRID_VOLT_MIN_RECOVER_POINT", "range": "50.0-230.0", "unit": "0.1V" },
                { "key": "GRDFREQMAXRECPNT", "label": "GRID_FREQ_MAX_RECOVER_POINT", "range": "50.00-70.00", "unit": "0.01Hz" },
                { "key": "GRDFREQMINRECPNT", "label": "GRID_FREQ_MIN_RECOVER_POINT", "range": "40.00-60.00", "unit": "0.01Hz" },
                { "key": "GRDOVRVOLT1PROTVAL", "label": "GRID_OVERVOLT_1_PROT_VALUE", "range": "100.0-400.0", "unit": "0.1V" },
                { "key": "GRDOVRVOLTPROTTIM", "label": "GRID_OVERVOLT_1_PROT_TIME", "range": "0-300", "unit": "0.01sec" },
                { "key": "GRDUNDRVOLT1PROVAL", "label": "GRID_UNDERVOLT_1_PROT_VALUE", "range": "50.0-250.0", "unit": "0.1V" },
                { "key": "GRDUNDRVOLT1PROTTIM", "label": "GRID_UNDERVOLT_1_PROT_TIME", "range": "0-300", "unit": "0.01sec" },
                { "key": "GRDOVRVOLT2PROVAL", "label": "GRID_OVERVOLT_2_PROT_VALUE", "range": "100.0-400.0", "unit": "0.1V" },
                { "key": "GRDOVRVOLT2PROTIM", "label": "GRID_OVERVOLT_2_PROT_TIME", "range": "0-300", "unit": "0.01sec" },
                { "key": "GRDUNDRVOLT2PROVAL", "label": "GRID_UNDERVOLT_2_PROT_VALUE", "range": "50.0-250.0", "unit": "0.1V" },
                { "key": "GRDUNDRVOLT2PROTIM", "label": "GRID_UNDERVOLT_2_PROT_TIME", "range": "0-300", "unit": "0.01sec" },
                { "key": "GRDOVRFREQ1PROVAL", "label": "GRID_OVERFREQ_1_PROT_VALUE", "range": "50.00-70.00", "unit": "0.01Hz" },
                { "key": "GRDOVRFREQ1PROTIM", "label": "GRID_OVERFREQ_1_PROT_TIME", "range": "0-300", "unit": "0.01sec" },
                { "key": "GRDUNDRFREQ1PROVAL", "label": "GRID_UNDERFREQ_1_PROT_VALUE", "range": "40.00-60.00", "unit": "0.01Hz" },
                { "key": "GRDUNDRFREQ1PROTTIM", "label": "GRID_UNDERFREQ_1_PROT_TIME", "range": "0-300", "unit": "0.01sec" },
                { "key": "GRDOVRFREQ2PROVAL", "label": "GRID_OVERFREQ_2_PROT_VALUE", "range": "50.00-70.00", "unit": "0.01Hz" },
                { "key": "GRDOVRFREQ2PROTIM", "label": "GRID_OVERFREQ_2_PROT_TIME", "range": "0-300", "unit": "0.01sec" },
                { "key": "GRDUNDRFREQ2PROVAL", "label": "GRID_UNDERFREQ_2_PROT_VALUE", "range": "40.00-60.00", "unit": "0.01Hz" },
                { "key": "GRDUNDRFREQ2PROTIM", "label": "GRID_UNDERFREQ_2_PROT_TIME", "range": "0-300", "unit": "0.01sec" },
                { "key": "INSULRESTLWRLMT", "label": "INSULATION_RES_LOWER_LIMIT", "range": "10-800", "unit": "Kohm" },
                { "key": "DCIUPPRLMT", "label": "DCI_UPPER_LIMIT", "range": "20-2000", "unit": "mA" }
            ],
            "PowerControl": [
                { "key": "REACPWRTHRES", "label": "REACTIVE_PWR_THRESHOLD", "range": "0-200000", "unit": "vA" },
                { "key": "ACTPWROUTLIMT", "label": "ACTIVE_PWR_OUTPUT_LIMIT", "range": "0-1000", "unit": "%" },
                { "key": "MAXACTOUTPWR", "label": "MAX_ACTIVE_OUTPUT_PWR", "range": "0-200000", "unit": "W" },
                { "key": "OVRFREQDRTECURV", "label": "OVERFREQ_DRATING_CURVE", "range": "null", "unit": "null" },
                { "key": "OVRFREQDRATEF1", "label": "OVERFREQ_DRATING_F1", "range": "50.00-70.00", "unit": "0.01Hz" },
                { "key": "OVRFREQDRATEF2", "label": "OVERFREQ_DRATING_F2", "range": "50.00-70.00", "unit": "0.01Hz" },
                { "key": "OVRFREQDRATEF3", "label": "OVERFREQ_DRATING_F3", "range": "50.00-70.00", "unit": "0.01Hz" },
                { "key": "OVRFREQDRATEF4", "label": "OVERFREQ_DRATING_F4", "range": "50.00-70.00", "unit": "0.01Hz" },
                { "key": "OVRFREQDRATEP1", "label": "OVERFREQ_DRATING_P1", "range": "0-20.00", "unit": "0.01Hz" },
                { "key": "OVRFREQDRATEP2", "label": "OVERFREQ_DRATING_P2", "range": "0-20.00", "unit": "0.01Hz" },
                { "key": "OVRFREQDRATEP3", "label": "OVERFREQ_DRATING_P3", "range": "0-20.00", "unit": "0.01Hz" },
                { "key": "OVRFREQDRATEP4", "label": "OVERFREQ_DRATING_P4", "range": "0-20.00", "unit": "0.01Hz" },
                { "key": "OVRFREQDRATERECPNT", "label": "OVERFREQ_DRATING_RECOVERY_POINT", "range": "50.00-70.00", "unit": "0.01Hz" },
                { "key": "RECTIMDURROVRFREQ", "label": "ACTIVE_PWR_DRATING_DUR_OVERFREQ", "range": "0-5000", "unit": "null" },
                { "key": "RECTIMAFTROVRFREQ", "label": "WAIT_RECOVERY_TIME_AFTER_OVERFREQ", "range": "null", "unit": "null" },
                { "key": "ATPWRECRTEOVRFREQ", "label": "ACTIVE_PWR_RECOV_RATE_AFTER_OVERFREQ", "range": "null", "unit": "null" },
                { "key": "OVRFREQDRTRESTIM", "label": "OVERFREQ_DRATING_RESP_TIME", "range": "null", "unit": "null" },
                { "key": "UNDRFREQUPSCLCURV", "label": "UNDERFREQ_UPSCALING_CURVE", "range": "null", "unit": "null" },
                { "key": "UNDRFREQRISEF1", "label": "UNDERFREQ_RISE_F1", "range": "40.00-60.00", "unit": "0.01Hz" },
                { "key": "UNDRFREQRISEF2", "label": "UNDERFREQ_RISE_F2", "range": "40.00-60.00", "unit": "0.01Hz" },
                { "key": "UNDRFREQRISEF3", "label": "UNDERFREQ_RISE_F3", "range": "40.00-60.00", "unit": "0.01Hz" },
                { "key": "UNDRFREQRISEF4", "label": "UNDERFREQ_RISE_F4", "range": "40.00-60.00", "unit": "0.01Hz" },
                { "key": "UNDRFREQRISEP1", "label": "UNDERFREQ_RISE_P1", "range": "0-2000", "unit": "0.10%" },
                { "key": "UNDRFREQRISEP2", "label": "UNDERFREQ_RISE_P2", "range": "0-2000", "unit": "0.10%" },
                { "key": "UNDRFREQRISEP3", "label": "UNDERFREQ_RISE_P3", "range": "0-2000", "unit": "0.10%" },
                { "key": "UNDRFREQRISEP4", "label": "UNDERFREQ_RISE_P4", "range": "0-2000", "unit": "0.10%" },
                { "key": "UNDRFREQUPRTERECPNT", "label": "UNDERFREQ_UPRATE_RECOV_POINT", "range": "40.00-60.00", "unit": "0.01Hz" },
                { "key": "ATPWINCRTEUNDRFREQ", "label": "ACTIVE_PWR_INCREASE_RATE_UNDERFREQ", "range": "0.1/H", "unit": "null" },
                { "key": "WAITRECTIMUNDRFREQ", "label": "WAIT_RECOVERY_TIME_UNDERFREQ", "range": "null", "unit": "null" },
                { "key": "ATPWRECRTEUNDRFREQ", "label": "ACTIVE_PWR_RECOV_RATE_UNDERFREQ", "range": "null", "unit": "null" },
                { "key": "RESTIMUNDRFREQUPSCL", "label": "RESP_TIME_UNDERFREQ_UPSCALING", "range": "null", "unit": "null" },
                { "key": "GRDOVRVOLTPWREGV1", "label": "GRID_OVERVOLT_PWR_REG_VOLT_1", "range": "100.0-400.0", "unit": "0.1V" },
                { "key": "GRDOVRVOLTPWREGV2", "label": "GRID_OVERVOLT_PWR_REG_VOLT_2", "range": "100.0-400.0", "unit": "0.1V" },
                { "key": "GRDOVRVOLTPWREGV3", "label": "GRID_OVERVOLT_PWR_REG_VOLT_3", "range": "100.0-400.0", "unit": "0.1V" },
                { "key": "GRDOVRVOLTPWREGV4", "label": "GRID_OVERVOLT_PWR_REG_VOLT_4", "range": "100.0-400.0", "unit": "0.1V" },
                { "key": "GRDOVRVOLTPWREGP1", "label": "GRID_OVERVOLT_PWR_REG_PWR_1", "range": "0-2000", "unit": "0.10%" },
                { "key": "GRDOVRVOLTPWREGP2", "label": "GRID_OVERVOLT_PWR_REG_PWR_2", "range": "0-2000", "unit": "0.10%" },
                { "key": "GRDOVRVOLTPWREGP3", "label": "GRID_OVERVOLT_PWR_REG_PWR_3", "range": "0-2000", "unit": "0.10%" },
                { "key": "GRDOVRVOLTPWREGP4", "label": "GRID_OVERVOLT_PWR_REG_PWR_4", "range": "0-2000", "unit": "0.10%" },
                { "key": "GRDOVRVOLTPWREGTIM", "label": "GRID_OVERVOLT_PWR_REG_TIME", "range": "0-30000", "unit": "0.01S" },
                { "key": "GRDUNDRVOLTPWREGV1", "label": "GRID_UNDERVOLT_PWR_REG_VOLT_1", "range": "50.0-250.0", "unit": "0.1V" },
                { "key": "GRDUNDRVOLTPWREGV2", "label": "GRID_UNDERVOLT_PWR_REG_VOLT_2", "range": "50.0-250.0", "unit": "0.1V" },
                { "key": "GRDUNDRVOLTPWREGV3", "label": "GRID_UNDERVOLT_PWR_REG_VOLT_3", "range": "50.0-250.0", "unit": "0.1V" },
                { "key": "GRDUNDRVOLTPWREGV4", "label": "GRID_UNDERVOLT_PWR_REG_VOLT_4", "range": "50.0-250.0", "unit": "0.1V" },
                { "key": "GRDUNDRVOLTPWREGP1", "label": "GRID_UNDERVOLT_PWR_REG_PWR_1", "range": "0-2000", "unit": "0.10%" },
                { "key": "GRDUNDRVOLTPWREGP2", "label": "GRID_UNDERVOLT_PWR_REG_PWR_2", "range": "0-2000", "unit": "0.10%" },
                { "key": "GRDUNDRVOLTPWREGP3", "label": "GRID_UNDERVOLT_PWR_REG_PWR_3", "range": "0-2000", "unit": "0.10%" },
                { "key": "GRDUNDRVOLTPWREGP4", "label": "GRID_UNDERVOLT_PWR_REG_PWR_4", "range": "0-2000", "unit": "0.10%" },
                { "key": "GRDUNDRVOLTPWREGTIM", "label": "GRID_UNDERVOLT_PWR_REG_TIME", "range": "0-30000", "unit": "0.01S" },
                {
                    "key": "REATCPWCNTRL", "label": "REACTIVE_PWR_CONTROL", "range": "null", "unit": "null", "options": [{ '0': 'Normal' },
                    { '1': 'Q Set(P1518)' },
                    { '2': 'Pf Set(P1519)' },
                    { '3': 'Q By V(P1520~1525)' },
                    { '4': 'Pf By P(P1526~1527)' }]
                },
                { "key": "REACTPWSET100", "label": "REACTIVE_PWR_SET_100_PER", "range": "(-1000~1000)", "unit": "0.001" },
                { "key": "REACTPWSETVAL", "label": "REACTIVE_PWR_SET_VALUE", "range": "200000~200000", "unit": "VA" },
                { "key": "PFSET", "label": "PF_SET", "range": "(-1000~-800,800~1000)", "unit": "0.001" },
                { "key": "QBYVV1", "label": "Q_BY_V_V1", "range": "800-1000", "unit": "0.10%" },
                { "key": "QBYVV2", "label": "Q_BY_V_V2", "range": "800-1000", "unit": "0.10%" },
                { "key": "QBYVV3", "label": "Q_BY_V_V3", "range": "1000-1100", "unit": "0.10%" },
                { "key": "QBYVV4", "label": "Q_BY_V_V4", "range": "1000-1200", "unit": "0.10%" },
                { "key": "QBYVPCT1", "label": "Q_BY_V_PCT1", "range": "0-40", "unit": "0.10%" },
                { "key": "QBYVPCT2", "label": "Q_BY_V_PCT2", "range": "null", "unit": "null" },
                { "key": "QBYVPCT3", "label": "Q_BY_V_PCT3", "range": "-40-0", "unit": "0.10%" },
                { "key": "QBYVPCT4", "label": "Q_BY_V_PCT4", "range": "40-100", "unit": "0.10%" },
                { "key": "PFBYPPSTRT", "label": "PF_BY_P_P_START", "range": "(-1000~-800,800~1000)", "unit": "null" },
                { "key": "PFBYPPEND", "label": "PF_BY_P_P_END", "range": "0-5000", "unit": "0.1%Hz" },
                { "key": "PFBYPRATE", "label": "PF_BY_P_RATE", "range": "-1000 - +1000", "unit": "0.10%" },
                { "key": "PFBYPP1", "label": "PF_BY_P_P1", "range": "-1000 - +1001", "unit": "0.10%" },
                { "key": "PFBYPP2", "label": "PF_BY_P_P2", "range": "-1000 - +1000", "unit": "0.10%" },
                { "key": "PFBYPP3", "label": "PF_BY_P_P3", "range": "-1000 - +1000", "unit": "0.10%" },
                { "key": "PFBYPP4", "label": "PF_BY_P_P4", "range": "-100 - -1000, +100 - +1000", "unit": "0.10%" },
                { "key": "PFBYPPF1", "label": "PF_BY_P_PF1", "range": "-100 - -1000, +100 - +1000", "unit": "0.10%" },
                { "key": "PFBYPPF2", "label": "PF_BY_P_PF2", "range": "-100 -  -1000, +100 - +1000", "unit": "0.10%" },
                { "key": "PFBYPPF3", "label": "PF_BY_P_PF3", "range": "-100 - -1000, +100 - +1000", "unit": "0.10%" },
                { "key": "PFBYPPF4", "label": "PF_BY_P_PF4", "range": "null", "unit": "null" },
                { "key": "QPFUNENVOLTPP", "label": "Q_P_FUN_ENABLE_VOLT_PP", "range": "null", "unit": "null" },
                { "key": "VOLTPPQPFUNEXT", "label": "VOLT_PP_AT_Q_P_FUN_EXIT", "range": "null", "unit": "null" },
                { "key": "PWPPQPFUNEXT", "label": "PWR_PP_AT_Q_P_FUN_EXIT", "range": "null", "unit": "null" },
                { "key": "QUFUNENPWRATIOPT", "label": "Q_U_FUN_ENABLE_PWR_RATIO_PT", "range": "null", "unit": "null" },
                { "key": "QUFUNEXITENPWRATIO", "label": "Q_U_FUN_EXIT_ENABLE_PWR_RATIO_PT", "range": "null", "unit": "null" }
            ],
            "SystemTimers": [
                { "key": "INITGRDCNTTIM", "label": "INITIAL_GRID_CONN_TIME", "range": "20-600", "unit": "sec" },
                { "key": "FLTRECNTTIM", "label": "FAULT_RECONN_TIME", "range": "0-1000", "unit": "0.10%" },
                { "key": "LMTFEEDINGRDPW", "label": "LIMIT_FEED_IN_GRID_PWR", "range": "null", "unit": "null" }
            ],
              "ProtectionFunction": [
{ "key": "PROTFUNSEL", "label": "Protection settings", "range": "0-1", "unit": null },

            
            ]

        }, "tabMenus": ["BasicSettings", "GridProtection", "PowerControl", "SystemTimers", "ProtectionFunction"]
    },
    'afor1phase': {
        "settingsByCategory": {
            "BasicSettings": [
                {
                    "key": "COUNTRYCOD", "label": "COUNTRY_CODE_WR", "options": [
                        { "00": "USA" },
                        { "01": "Germany4105" },
                        { "02": "Germany0126" },
                        { "03": "Spain" },
                        { "04": "Greece - Mainland" },
                        { "05": "Portugal" },
                        { "06": "Belgium" },
                        { "07": "Italy" },
                        { "08": "U.K.G98" },
                        { "09": "U.K.G99" },
                        { "10": "Australia" },
                        { "11": "China" },
                        { "12": "GermanyBDEW" },
                        { "13": "Denmark" },
                        { "14": "Greece - Islands" },
                        { "15": "Czech Republic" },
                        { "16": "Slovakia" },
                        { "17": "Netherlands" },
                        { "18": "Sweden" },
                        { "19": "Bulgaria" },
                        { "20": "France" },
                        { "21": "Brazil" },
                        { "22": "U.K.G59" },
                        { "23": "Netherlands16A" },
                        { "24": "South Africa" },
                        { "25": "DenmarkEurope" },
                        { "26": "Israel" },
                        { "27": "Austria" },
                        { "28": "ThailandMEA" },
                        { "29": "Mauritius" },
                        { "30": "MexicoCON" },
                        { "31": "Romania" },
                        { "32": "the Philippines" },
                        { "33": "ThailandPEA" },
                        { "34": "Malaysia" },
                        { "35": "Tunisia" },
                        { "36": "Ireland" },
                        { "37": "Brunei" },
                        { "38": "Taiwan" },
                        { "39": "India" },
                        { "40": "AustraliaErgon" },
                        { "41": "AustraliaEnergex" },
                        { "42": "Sri Lanka" },
                        { "43": "Poland" },
                        { "44": "Chile" },
                        { "45": "Hungary" },
                        { "46": "VFRelaxation" },
                        { "47": "Vietnam" },
                        { "48": "New Zealand" },
                        { "49": "Switzerland" },
                        { "50": "Argentina" },
                        { "51": "Iran" },
                        { "52": "Ghana" },
                        { "53": "Japan50hz" },
                        { "54": "Japan60hz" },
                        { "55": "Russia" },
                        { "56": "Cyprus" },
                        { "57": "Mexico" },
                        { "58": "Ukraine" },
                        { "59": "AustraliaB" },
                        { "60": "AustraliaC" },
                        { "61": "Latvia" },
                        { "62": "Estonia" },
                        { "63": "UL1741208V" },
                        { "64": "UL1741240V" },
                        { "65": "ChileBT" },
                        { "66": "ChileMT-R" }
                    ]
                },
                { "key": "COUNTDWNTIM", "label": "COUNTDOWN_TIMER_WR", "unit": "null" },
                { "key": "PRTFUNSEL", "label": "PROTECTION_FUNCTION_SELECTION", "unit": "null" },
                { "key": "REACTPWRCNTTYP", "label": "REACTIVE_POWER_CONTROL_TYPE", "unit": "0-3" }
            ],
            "VoltageProtection": [
                { "key": "OVRVLTPROTTHRRMS1", "label": "OVERVOLTAGE_PROTECTION_THRESHOLD_RMS_1", "unit": "0.1V" },
                { "key": "OVRVLTPROTTHRRMS2", "label": "OVERVOLTAGE_PROTECTION_THRESHOLD_RMS_2", "unit": "0.1V" },
                { "key": "OVRVLTPRTTIM1", "label": "OVERVOLTAGE_PROTECTION_TIME_1", "unit": "20ms" },
                { "key": "OVRVLTPRTTIM2", "label": "OVERVOLTAGE_PROTECTION_TIME_2", "unit": "20ms" },
                { "key": "UDRVLTPRTTHRRMS1", "label": "UNDERVOLTAGE_PROTECTION_THRESHOLD_RMS_1", "unit": "0.1V" },
                { "key": "UDRVLTPRTTHRRMS2", "label": "UNDERVOLTAGE_PROTECTION_THRESHOLD_RMS_2", "unit": "0.1V" },
                { "key": "UNDRVOLTPRTTIM1", "label": "UNDERVOLTAGE_PROTECTION_TIME_1", "unit": "20ms" },
                { "key": "UNDRVOLTPRTTIM2", "label": "UNDERVOLTAGE_PROTECTION_TIME_2", "unit": "20ms" },
                { "key": "UPRVLTRECLMTRMS", "label": "UPPERVOLTAGE_RECOVERY_LIMIT_RMS", "unit": "0.1V" },
                { "key": "LWRVLTRECLMTRMS", "label": "LOWERVOLTAGE_RECOVERY_LIMIT_RMS", "unit": "0.1V" },
                { "key": "VLTRECTIM", "label": "VOLTAGE_RECOVERY_TIME", "unit": "20ms" },
                { "key": "TENMINOVRVLTTHRRMS", "label": "TEN_MINUTE_OVERVOLTAGE_THRESHOLD_RMS", "unit": "0.1V" }
            ],
            "FrequencyProtection": [
                { "key": "OVRFREQPRTTHR1", "label": "OVER_FREQUENCY_PROTECTION_THRESHOLDS_1", "unit": "0.01Hz" },
                { "key": "OVRFREQPRTTHR2", "label": "OVER_FREQUENCY_PROTECTION_THRESHOLDS_2", "unit": "0.01Hz" },
                { "key": "OVRFREQPRTTIM1", "label": "OVER_FREQUENCY_PROTECTION_TIME_1", "unit": "20ms" },
                { "key": "OVRFREQPRTTIM2", "label": "OVER_FREQUENCY_PROTECTION_TIME_2", "unit": "20ms" },
                { "key": "UNDRFREQPRTTHR1", "label": "UNDERFREQUENCY_PROTECTION_THRESHOLDS_1", "unit": "0.01Hz" },
                { "key": "UNDRFREQPRTTHR2", "label": "UNDERFREQUENCY_PROTECTION_THRESHOLDS_2", "unit": "0.01Hz" },
                { "key": "UNDRFREQPRTTIM1", "label": "UNDERFREQUENCY_PROTECTION_TIME_1", "unit": "20ms" },
                { "key": "UNDRFREQPRTTIM2", "label": "UNDERFREQUENCY_PROTECTION_TIME_2", "unit": "20ms" },
                { "key": "UPRFREQRECLMT", "label": "UPPER_FREQUENCY_RECOVERY_LIMIT", "unit": "0.01Hz" },
                { "key": "LWRFREQRECLMT", "label": "LOWER_FREQUENCY_RECOVERY_LIMIT", "unit": "0.01Hz" },
                { "key": "FREQPRTTIM", "label": "FREQUENCY_PROTECTION_TIME", "unit": "20ms" }
            ],
            "ComponentProtection": [
                { "key": "DCCOMPRTTHR1", "label": "DC_COMPONENT_PROTECTION_THRESHOLD_1", "unit": "1mA" },
                { "key": "DCCOMPRTTHR2", "label": "DC_COMPONENT_PROTECTION_THRESHOLD_2", "unit": "1mA" },
                { "key": "DCCOMPRTTIM1", "label": "DC_COMPONENT_PROTECTION_TIME_1", "unit": "20mS" },
                { "key": "DCCOMPRTTIM2", "label": "DC_COMPONENT_PROTECTION_TIME_2", "unit": "20mS" },
                { "key": "DCCOMRECVAL", "label": "DC_COMPONENT_RECOVERY_VALUE", "unit": "1mA" },
                { "key": "DCCOMRECTIM", "label": "DC_COMPONENT_RECOVERY_TIME", "unit": "20mS" }
            ],
            "PowerControl": [
                { "key": "ACTPWRPER", "label": "ACTIVE_POWER_PERCENTAGE", "unit": "0-100%" },
                { "key": "HRZAXISPER", "label": "HORIZONTAL_AXIS_PERCENTAGE", "unit": "1%" },
                { "key": "VERAXISPER", "label": "VERTICAL_AXIS_PERCENTAGE", "unit": "1%" }
            ],
          
        },
        "tabMenus": ["BasicSettings", "VoltageProtection", "FrequencyProtection", "ComponentProtection", "PowerControl"]
    },
    'afor3phasehybrid': {
        'settingsByCategory': {
            'System Parameters': [
                {
                    "key": "CHOOSECUNTRY",
                    "label": "Safty Regulations",
                    "range": "null",
                    "unit": "null",
                    "options": [
                        { 0: "Com-50Hz" },
                        { 1: "Com-60Hz" },
                        { 2: "China" },
                        { 3: "Japan-50" },
                        { 4: "Japan-60" },
                        { 5: "US_240S" },
                        { 6: "US_240D" },
                        { 7: "US_208S" },
                        { 8: "US_208D" },
                        { 9: "Australia" },
                        { 10: "UK_G99" },
                        { 11: "UK_G98" },
                        { 12: "DE" },
                        { 13: "DE_BDEW" },
                        { 14: "France" },
                        { 15: "Fra-IL50Hz" },
                        { 16: "Fra-IL60Hz" },
                        { 17: "Poland" },
                        { 18: "Italy" },
                        { 19: "ThailandME" },
                        { 20: "ThailandPE" },
                        { 21: "India" },
                        { 22: "South Korea" },
                        { 23: "Philippin" },
                        { 24: "DPRK" },
                        { 25: "Malaysia" },
                        { 26: "Cyprus" },
                        { 27: "Holland" },
                        { 28: "EN50549-1" },
                        { 29: "Spain" },
                        { 30: "Greece" },
                        { 31: "Hungary" },
                        { 32: "Portugal" },
                        { 33: "Belgium" },
                        { 34: "Denmark" },
                        { 35: "Estonia" },
                        { 36: "Moldova" },
                        { 37: "Slovak" },
                        { 38: "Sweden" },
                        { 39: "Austria" },
                        { 40: "Bulgaria" },
                        { 41: "Croatia" },
                        { 42: "Ukraine" },
                        { 43: "S.Africa" },
                        { 44: "Mauritius" },
                        { 45: "Israel" },
                        { 46: "Mexico" },
                        { 47: "Brazil" },
                        { 48: "Sri Lanka" },
                        { 49: "Chile" },
                        { 50: "CONNERA" },
                        { 251: "Ireland" },
                        { 252: "Lithuania" },
                        { 253: "Slovenia" },
                        { 254: "Latvia" },
                        { 255: "IEC 61727" },
                        { 256: "Colombia" },
                        { 257: "Romania" },
                        { 258: "Norway" },
                        { 259: "Bolivia" },
                        { 260: "Dominica_120" },
                        { 261: "Dominica_240" },
                        { 262: "Vietnam" },
                        { 263: "Czech" },
                        { 264: "Australia" },
                        { 265: "Pakistan" },
                        { 266: "Nigeria" },
                        { 267: "Australia B" },
                        { 268: "Australia C" },
                        { 269: "New Zealand" },
                        { 270: "CostaRica" },
                        { 271: "Iran" },
                        { 272: "Azerbaijan" }
                    ]
                },
                { "key": "PVINPUTMODE", "label": "PV Input Mode", "range": "null", "unit": "null", "options": [{ 0: 'alone' }, { 1: 'parallel' }, { 2: 'no pv' }] },
                { "key": "CTMETERTYPEWR", "label": "CT Meter Type", "range": "0-3", "unit": "null", 'options': [{ 0: 'No Meter' }, { 1: 'CT' }, { 2: 'Meter' }] },
                { "key": "CTRATIO", "label": "CT Ratio", "range": "0-200", "unit": "null" },

            ],

            'Battery Parameters': [
                { key: "BTTTYP", label: "Battery Type", "options": [{ 0: 'No battery' }, { 1: 'Lith' }, { 2: 'Lead' }, { 3: 'Simulated' }] },
                {
                    key: "BTTBRND", label: "Lithium Battery Manufacturer", "options": [{ "0": "Afore" },
                    { "1": "PYLON" },
                    { "2": "IVY" },
                    { "3": "JBS" },
                    { "4": "Taoke" },
                    { "5": "HSD" },
                    { "6": "Taisu" },
                    { "7": "Rita" },
                    { "8": "Soluna" },
                    { "9": "HYS" },
                    { "10": "Wanke" },
                    { "11": "SunWoda" },
                    { "12": "Sunplus" },
                    { "13": "Dyness" },
                    { "14": "UZ" },
                    { "15": "Pytes" },
                    { "16": "Vision" },
                    { "17": "Aoboet" },
                    { "18": "Taico" },
                    { "19": "CALB" },
                    { "20": "Oliter" },
                    { "21": "Apollo" },
                    { "22": "SolarWatt" },
                    { "23": "Flash" },
                    { "24": "Tectronic" },
                    { "25": "FEB" },
                    { "26": "CFE" },
                    { "27": "ATVT" },
                    { "28": "Homenergon" },
                    { "29": "Ampace" },
                    { "30": "Voltsmile" },
                    { "31": "Livoltek" },
                    { "32": "Vestwood" },
                    { "33": "Johnray" },
                    { "34": "HuaXing" },
                    { "35": "Austa" },
                    { "36": "ZGar" },
                    { "37": "Dowell" },
                    { "38": "R" },
                    { "39": "Hanersun" },
                    { "40": "AlpSolarr" },
                    { "41": "DMEGC" },
                    { "42": "Genixgreen" },
                    { "43": "NAHUI" },
                    { "44": "San Rase" },
                    { "45": "FZSoNick" },
                    { "46": "KNYEE" },
                    { "47": "Hailei" },
                    { "48": "Svolt" },
                    { "49": "Afore_H" },
                    { "50": "OtPL" },
                    { "51": "Kowint" },
                    { "52": "BlueSun" },
                    { "53": "LithValley" },
                    { "54": "Solareast" },
                    { "55": "STELTEC" },
                    { "56": "Goldenmate" },
                    { "57": "Huafeng" },
                    { "58": "BYD" },
                    { "59": "Raystech" },
                    { "60": "YelonESS" },
                    { "61": "Vilion" }]
                },
                { key: "BTTCPCTY", label: "Battery Capacity", "range": "[10-1000]", "unit": "Ahr" },

                { key: "SOCUPRLMT", label: "Charge SOC Upper Limit", "range": "[0-100]", "unit": "%." },
                { key: "SOCLWRLMT", label: "Discharge SOC Lower Limit", "range": "[0-100]", "unit": "%." },
                { key: "BTTOVRVLTTH", label: "Battery Over Voltage Cutoff", "range": "[35-850]", "unit": "V" },
                { key: "BTTUNDVLTTH", label: "Battery Under Voltage Cutoff", "range": "[35-850]", "unit": "V" },

                { key: "MXCGCURR", label: "Max Charging Current", "range": "[5-500]", "unit": "A." },
                { key: "MXDSCGCURR", label: "Max Discharging Current", "range": "[5-500]", "unit": "A." },

                { key: "BTTOVRTEMPTH", label: "Battery Over Temp Cutoff", "range": "[25-90]", "unit": "C" },
                { key: "BTTUDRTEMPTH", label: "Battery Under Temp Cutoff", "range": "[-35-25]", "unit": "C" },

                { key: "PROTFUNSEL", label: "NTC ENABLE", "options": [{ "376": 'Enable' }, { "262520": 'Disable' }] },




            ],
            'Battery Parameters 2': [
                { key: "BTTRTDVLT", label: "Battery Rated Voltage", "range": "[40-800]", "unit": "V" },
                { key: "CGDSCGCNTMX", label: "Charge/Discharge Count Max", },
                { key: "CNSTVLTCGVLT", label: "Constant Voltage Charging Voltage", "range": "[35-850]", "unit": "V" },
                { key: "CNSTVLTCGCURRTRM", label: "Constant Voltage Charging Current Termination", "range": "[1-1000]", "unit": "A." },
                { key: "CNSTVLTCGTIM", label: "Constant Voltage Charging Time", "range": "[1,15000]", "unit": "sec" },
                { key: "DSCGENDVLT", label: "Discharge End Voltage", "range": "[350,8000]", "unit": "sec" },
                { key: "EMRGCGSTRTVLT", label: "Emergency Charging Start Voltage", "range": "[10,800]", "unit": "V" },
                { key: "EMRGCGSTPVLT", label: "Emergency Charging Stop Voltage", "range": "[35,800]", "unit": "V" },
                { key: "EMRGCGCURR", label: "Emergency Charging Current", "range": "[10,50000]", "unit": "A." },
                { key: "RSTNCMPNS", label: "Resistance Compensation", "unit": "mOhm", "range": "[0,50000]" },
                { key: "TEMPCMPNS", label: "Temperature Compensation", "unit": "mOhm" },
                { key: "MXCGPW", label: "Maximum Charging Power", "range": "[100,500000]", "unit": "W" },
                { key: "MXCGCNGRT", label: "Maximum Charging Change Rate", "range": "[0,60]", "unit": "0.1%/s" },
                { key: "MXRLSPNTCNGRT", label: "Maximum Release Point Change Rate", "range": "[0,60]", "unit": "0.1%/s" },
                { key: "LEDACDBTTMNFTR", label: "Lead Acid Battery Manufacturer", unit: "V", "options": [{ 0: 'Common' }, { 1: 'Sacred' }, { 2: 'Holi sun' }] },
                { key: "NOSRSND", label: "Number of Series Nodes", unit: "V", range: "[1-25]" },
                { key: "SCTNVLTRT", label: "Section Voltage Rating", unit: "V", range: "[6-85]" },
                { key: "SCTNVLTOVRVLT", label: "Section Voltage Overvoltage", unit: "V", range: "[6-85]" },
                { key: "SCTNVLTUNDVLT", label: "Section Voltage Undervoltage", unit: "V", range: "[6-85]" },
                { key: "VLTCGUPPLMTVLT", label: "Voltage Charging Upper Limit Voltage", unit: "V", range: "[6-85]" },
                { key: "VLTDSCGLOWLMTVLT", label: "Voltage Discharge Lower Limit Voltage", unit: "V", range: "[6-85]" },
                { key: "VLTSAVEMRGCGSTRT", label: "Voltage Saving Emergency Charging Start", unit: "V", range: "[6-85]" },
                { key: "VLTSAVEMRGCGSTOP", label: "Voltage Saving Emergency Charging Stop", unit: "V", range: "[6-85]" },
                { key: "LEDACDBTTSOC", label: "Lead Acid Battery State of Charge", unit: "%", range: "[0-100]" },
                { key: "MINSOCGRDCONDSCG", label: "Minimum SOC for Grid Connection Discharge", unit: "%.", range: "[0-100]" }
            ],


            'Energy Storage Operations': [
                { key: "EMSMDL", label: "EMS Mode", options: [{ '0': 'Self-use/SelfUse' }, { '1': 'Charging priority/CharFst' }, { '2': 'Electricity sales priority/SellFst' }, { '3': 'Battery Maintenance/Maintain' }, { '4': 'Command Mode/CmdChar' }, { '5': 'externalEMS/ExtEms' }, { '6': 'Peak shaving mode/PeakShave' }, { '7': 'Unbalance compensation/UbSelfUse' }, { '8': 'QCompensation Mode/QSelfUse' }] },
                { key: "DRMMDL", label: "DRM Mode Enable", options: [{ '0': 'Disable' }, { '1': 'Enable' }] },
                { key: "LMTFEEDINGRDPW", label: "Grid Feed-in Power Limit", unit: 'W' },
                { key: "GRDPWBCKLMTVL", label: "Grid Power Back Limit Value", unit: 'W' },
                { key: "FDRPWLMTPRC", label: "Grid Feed-in Power Limit Percent", unit: "%." },
                { key: "GRDPWBCKLMTPRC", label: "Grid Power Back Limit Percent", unit: "%." },
                // { key: "CGDSCGINSTR", label: "CHARGE_DISCHARG_INSTR", options: [{ '0': 'Disable' }, { '1': 'Enable' }] },
                // { key: "ACCGPWPER", label: "AC_CHARG_POWER_PERCENT", unit: "%.", range: "[0-100]" },
                // { key: "ACCGMXSOC", label: "AC_CHARG_MAX_SOC", unit: "%.", range: "[0-100]" },
                // { key: "TMONACCG1", label: "TimeOnAcChg1", c: 1, unit: "HH:MM" },
                // { key: "TMOFACCG1", label: "TimeOffAcChg1", c: 1, unit: "HH:MM" },
                // { key: "TMONACCG2", label: "TimeOnAcChg2", c: 1, unit: "HH:MM" },
                // { key: "TMOFACCG2", label: "TimeOffAcChg2", c: 1, unit: "HH:MM" },
                // { key: "TMONACCG3", label: "TimeOnAcChg3", c: 1, unit: "HH:MM" },
                // { key: "TMOFACCG3", label: "TimeOffAcChg3", c: 1, unit: "HH:MM" },
                // { key: "TMONACCG4", label: "TimeOnAcChg4", c: 1, unit: "HH:MM" },
                // { key: "TMOFACCG4", label: "TimeOffAcChg4", c: 1, unit: "HH:MM" },


            ],
            'Diesel Generator Function': [
                { key: "GENCNTRLMOD", label: "GEN Control Mode", options: [{ '0': 'Gen Mode' }, { '1': 'Intelligent Load Mode' }, { '2': 'Micro Inverter Mode' }] },


                // { key: "GENCNTRLMOD", label: "GEN Control Mode", options: [{ '0': 'Enable' }, { '1': 'Diasable' }],"bc": bg.a },
                { key: "RUNFUNENABLE", label: "Diesel Port Fun Selection", options: [{ '0': 'Enable' }, { '1': 'Diasable' }], },
                { key: "GENLODONSOC", label: "Diesel Load On SOC", unit: "%.", },
                { key: "GENLODOFFSOC", label: "Diesel Load Off SOC", unit: "%.", },

                //  { key: "GENCNTRLMOD", label: "Intelligent Load Enable", options: [{ '0': 'Enable' }, { '1': 'Diasable' }, { '2': 'Electricity sales priority/SellFst' }],"bc": bg.b },
                { key: "INTLODONSOC", label: "Load On SOC", unit: "%.", },
                { key: "INTLODOFFSOC", label: "Load Off SOC", unit: "%.", },


                //   { key: "GENCNTRLMOD", label: "MICRO Inverter Enable", options: [{ '0': 'Enable' }, { '1': 'Diasable' }, { '2': 'Electricity sales priority/SellFst' }],"bc": bg.c },
                { key: "GENLODONSOC", label: "OFF grid Load On SOC", unit: "%.", },
                { key: "GENLODOFFSOC", label: "OFF grid Load Off SOC", unit: "%.", },

            ],


            'Grid Settings': [
                { "key": "GRDONJUDGTIME", "label": "Grid On Judge Time", "range": "10-1200", "unit": "Sec" },

                { "key": "GRDONMAXVOLT", "label": "Grid Max Voltage", "range": "101.0-320.0", "unit": "0.1V", "bc": bg.a },
                { "key": "GRDONMAXRECPNT", "label": "Grid Voltage Max Recovery Point", "range": "101.0-320.0", "unit": "0.1V", "bc": bg.a },
                { "key": "GRDOVRVOLT1PROTVAL", "label": "Grid Over Volt Level 1 Protection Value", "range": "100.0-400.0", "unit": "0.1V", "bc": bg.a },
                { "key": "GRDOVRVOLTPROTTIM", "label": "Grid Over Volt Level 1 Protection Time", "range": "0-300", "unit": "0.01sec", "bc": bg.a },
                { "key": "GRDOVRVOLT2PROVAL", "label": "Grid Over Volt Level 2 Protection Value", "range": "100.0-400.0", "unit": "0.1V", "bc": bg.a },
                { "key": "GRDOVRVOLT2PROTIM", "label": "Grid Over Volt Level 2 Protection Time", "range": "0-300", "unit": "0.01sec", "bc": bg.a },

                { "key": "GRDONMINVOLT", "label": "Grid Min Voltage", "range": "50.0-230.0", "unit": "0.1V", "bc": bg.b },
                { "key": "GRDVOLTMINRECPNT", "label": "Grid Voltage Min Recovery Point", "range": "50.0-230.0", "unit": "0.1V", "bc": bg.b },
                { "key": "GRDUNDRVOLT1PROVAL", "label": "Grid Under Volt Level 1 Protection Value", "range": "50.0-250.0", "unit": "0.1V", "bc": bg.b },
                { "key": "GRDUNDRVOLT1PROTTIM", "label": "Grid Under Volt Level 1 Protection Time", "range": "0-300", "unit": "0.01sec", "bc": bg.b },
                { "key": "GRDUNDRVOLT2PROVAL", "label": "Grid Under Volt Level 2 Protection Value", "range": "50.0-250.0", "unit": "0.1V", "bc": bg.b },
                { "key": "GRDUNDRVOLT2PROTIM", "label": "Grid Under Volt Level 2 Protection Time", "range": "0-300", "unit": "0.01sec", "bc": bg.b },

                { "key": "GRDONMAXFREQ", "label": "Grid Max Frequency", "range": "50.00-70.00", "unit": "0.01Hz", "bc": bg.c },
                { "key": "GRDFREQMAXRECPNT", "label": "Grid Frequency Max Recovery Point", "range": "50.00-70.00", "unit": "0.01Hz", "bc": bg.c },
                { "key": "GRDOVRFREQ1PROVAL", "label": "Grid Over Freq Level 1 Protection Value", "range": "50.00-70.00", "unit": "0.01Hz", "bc": bg.c },
                { "key": "GRDOVRFREQ1PROTIM", "label": "Grid Over Freq Level 1 Protection Time", "range": "0-300", "unit": "0.01sec", "bc": bg.c },
                { "key": "GRDOVRFREQ2PROVAL", "label": "Grid Over Freq Level 2 Protection Value", "range": "50.00-70.00", "unit": "0.01Hz", "bc": bg.c },
                { "key": "GRDOVRFREQ2PROTIM", "label": "Grid Over Freq Level 2 Protection Time", "range": "0-300", "unit": "0.01sec", "bc": bg.c },

                { "key": "GRDONMINFREQ", "label": "Grid Min Frequency", "range": "40.00-60.00", "unit": "0.01Hz", "bc": bg.d },
                { "key": "GRDFREQMINRECPNT", "label": "Grid Frequency Min Recovery Point", "range": "40.00-60.00", "unit": "0.01Hz", "bc": bg.d },
                { "key": "GRDUNDRFREQ1PROVAL", "label": "Grid Under Freq Level 1 Protection Value", "range": "40.00-60.00", "unit": "0.01Hz", "bc": bg.d },
                { "key": "GRDUNDRFREQ1PROTTIM", "label": "Grid Under Freq Level 1 Protection Time", "range": "0-300", "unit": "0.01sec", "bc": bg.d },
                { "key": "GRDUNDRFREQ2PROVAL", "label": "Grid Under Freq Level 2 Protection Value", "range": "40.00-60.00", "unit": "0.01Hz", "bc": bg.d },
                { "key": "GRDUNDRFREQ2PROTIM", "label": "Grid Under Freq Level 2 Protection Time", "range": "0-300", "unit": "0.01sec", "bc": bg.d },


                { "key": "INSULRESTLWRLMT", "label": "Insulation Resistance Lower Limit", "range": "10-800", "unit": "Kohm" },
                { "key": "DCIUPPRLMT", "label": "DC Injection Upper Limit", "range": "20-2000", "unit": "mA" },

                { "key": "OVRVOLTPROT10", "label": "Over Voltage Protection", "range": "0-300", "unit": "0.1V", "bc": bg.a },
                { "key": "OVRVOLTREC10", "label": "Over Voltage Recovery Value", "range": "0-300", "unit": "0.1V", "bc": bg.a },
                { "key": "OVRVOLTRECTIM10", "label": "Over Voltage Recovery Time", "range": "0-300", "unit": "0.01sec", "bc": bg.a },



            ],

            'Equipment Operations and Maintenance': [
                {
                    "key": "RUNFUNENABLE",
                    "label": "Command to turn on/off the inverter",
                    "options": [{ "0": "Disable" }, { "1": "Enable" }]
                },
                { key: "WR_DATE_TIME", label: "Inverter date time" },
                { key: "FUNCTCMD", label: "Function Command", options: [{ '8': 'Reboot' }, { '16': 'Clear Fault Record' }, { '32': 'Factory Reset' }] },


            ]
            ,

            'Special Settings': [
                { "key": "ARCFLTCLR", "label": "Arc Fault Clear Command", "unit": "-" },

                { key: "DRMMDL", label: "DRM Mode", options: [{ '0': 'Disable' }, { '1': 'Enable' }] },


            ],


        },

        "tabMenus": ["System Parameters", "Battery Parameters", "Battery Parameters 2",
            "Energy Storage Operations", "Diesel Generator Function", "Grid Settings", "Equipment Operations and Maintenance",
            "Special Settings"]
    },
    "wtgti": {
        "settingsByCategory": {
             "System Settings": [
            { "key": "SYSRUNFLG", "label": "System Run Flag", "range": "0-1", "unit": null, options: [{ '0': 'Disable' }, { '1': 'Enable' }] },
            { "key": "SYSRSTFCTRY", "label": "System Reset Factory", "range": "0-1", "unit": null, options: [{ '0': 'Disable' }, { '1': 'Enable' }] },
            { "key": "ISODETECTION", "label": "System ISO Detection", "range": "0-1", "unit": null, options: [{ '0': 'Disable' }, { '1': 'Enable' }] },
            { "key": "RCDETECTION", "label": "System RC Detection", "range": "0-1", "unit": null, options: [{ '0': 'Disable' }, { '1': 'Enable' }] },
            { "key": "ISLANDETECTION", "label": "System Islanding Detection", "range": "0-1", "unit": null, options: [{ '0': 'Disable' }, { '1': 'Enable' }] },
            { "key": "METERENABLE", "label": "System Meter Enable", "range": "0-1", "unit": null, options: [{ '0': 'Disable' }, { '1': 'Enable' }] },
            { "key": "WINDENABLE", "label": "System Wind Enable", "range": "0-1", "unit": null, options: [{ '0': 'Disable' }, { '1': 'Enable' }] },
            { "key": "SYSTMDLYRUNTIME", "label": "System Running Delay Time", "range": "0-300000", "unit": "ms" },
            // { "key": "SYSTEMLANGUAGE", "label": "System Language", "range": "0", "unit": null},
            { "key": "SYSTEMLCDBRIGHT", "label": "System LCD Bright Time", "range": "0-100", "unit": null },
            { "key": "BEEPONERRORENABLE", "label": "Beep On Error Enable", "range": "0-1", "unit": null, options: [{ '0': 'Disable' }, { '1': 'Enable' }] }
        ],

        "Grid Settings": [
            { "key": "GRIDSTANDARD", "label": "System Grid Standard", "range": "0-23", "unit": null },

            { "key": "OVPOINTLV1", "label": "Over Voltage Point Level 1", "range": "240-285", "unit": "0.01V" },
            { "key": "OVTIMELV1", "label": "Over Voltage Time Level 1", "range": "0-60000", "unit": "ms" },
            { "key": "UVPOINTLV1", "label": "Under Voltage Point Level 1", "range": "160-220", "unit": "0.01V" },
            { "key": "UVTIMELV1", "label": "Under Voltage Time Level 1", "range": "0-60000", "unit": "ms" },
            { "key": "OFPOINTLV1", "label": "Over Frequency Point Level 1", "range": "52-65", "unit": "0.01Hz" },
            { "key": "OFTIMELV1", "label": "Over Frequency Time Level 1", "range": "0-60000", "unit": "ms" },
            { "key": "UFPOINTLV1", "label": "Under Frequency Point Level 1", "range": "45-58", "unit": "0.01Hz" },
            { "key": "UFTIMELV1", "label": "Under Frequency Time Level 1", "range": "0-60000", "unit": "ms" },

            { "key": "OVPOINTLV2", "label": "Over Voltage Point Level 2", "range": "240-285", "unit": "0.01V" },
            { "key": "OVTIMELV2", "label": "Over Voltage Time Level 2", "range": "0-60000", "unit": "ms" },
            { "key": "UVPOINTLV2", "label": "Under Voltage Point Level 2", "range": "160-220", "unit": "0.01V" },
            { "key": "UVTIMELV2", "label": "Under Voltage Time Level 2", "range": "0-60000", "unit": "ms" },
            { "key": "OFPOINTLV2", "label": "Over Frequency Point Level 2", "range": "52-65", "unit": "0.01Hz" },
            { "key": "OFTIMELV2", "label": "Over Frequency Time Level 2", "range": "0-60000", "unit": "ms" },
            { "key": "UFPOINTLV2", "label": "Under Frequency Point Level 2", "range": "45-58", "unit": "0.01Hz" },
            { "key": "UFTIMELV2", "label": "Under Frequency Time Level 2", "range": "0-60000", "unit": "ms" },

            { "key": "OVPOINTLV3", "label": "Over Voltage Point Level 3", "range": "240-285", "unit": "0.01V" },
            { "key": "OVTIMELV3", "label": "Over Voltage Time Level 3", "range": "0-60000", "unit": "ms" },
            { "key": "UVPOINTLV3", "label": "Under Voltage Point Level 3", "range": "160-220", "unit": "0.01V" },
            { "key": "UVTIMELV3", "label": "Under Voltage Time Level 3", "range": "0-60000", "unit": "ms" },
            { "key": "OFPOINTLV3", "label": "Over Frequency Point Level 3", "range": "52-65", "unit": "0.01Hz" },
            { "key": "OFTIMELV3", "label": "Over Frequency Time Level 3", "range": "0-60000", "unit": "ms" },
            { "key": "UFPOINTLV3", "label": "Under Frequency Point Level 3", "range": "45-58", "unit": "0.01Hz" },
            { "key": "UFTIMELV3", "label": "Under Frequency Time Level 3", "range": "0-60000", "unit": "ms" }
        ],

        "Other": [
            { "key": "ZEROXPORTMOD", "label": "System Zero Export Mode", "range": "0-1", "unit": null, options: [{ '0': 'Disable' }, { '1': 'Enable' }] },
            { "key": "PAUSETIME", "label": "System Pause Time Set", "range": "20-500", "unit": "0.001s" },
            { "key": "ACTIVEPOWERCTRL", "label": "System Active Power Control", "range": "0-110", "unit": "%" },
            { "key": "REACTIVEPOWERCTRL", "label": "System Reactive Power Control", "range": "0-2000", "unit": null },
            { "key": "ZEROREFPOWER", "label": "Zero Reference Power", "range": "0-40", "unit": "0.001W" }
        ]
        },
        "tabMenus": ["System Settings","Grid Settings","Other"]


    },
    "srne_hybrid":{
    "settingsByCategory":{
  "BatterySettings": [
    { "key": "BATIMPROVCHGVOLT", "label": "BATTERY_BOOST_CHARGE_VOLTAGE", "unit": "0.1V" },
    { "key": "BATIMPROVCHGBACKVOLT", "label": "BATTERY_BOOST_RECHARGE_RETURN_VOLTAGE", "unit": "0.1V" },
    { "key": "BATOVERDISCHGBACKVOLT", "label": "BATTERY_OVER_DISCHARGE_RECOVERY_VOLTAGE", "unit": "0.1V" },
    { "key": "BATUNDERVOLT", "label": "BATTERY_UNDER_VOLTAGE", "unit": "0.1V" },
    { "key": "BATOVERDISCHGDELAYTIME", "label": "BATTERY_OVER_DISCHARGE_DELAY_TIME", "unit": "s" },
    { "key": "BATCONSTCHGTIME", "label": "BATTERY_CONSTANT_CHARGE_TIME", "unit": "min" },
    { "key": "BATIMPROVCHGTIME", "label": "BATTERY_BOOST_CHARGE_TIME", "unit": "min" },
    { "key": "BATCONSTCHGGAPTIME", "label": "BATTERY_CONSTANT_CHARGE_GAP_TIME", "unit": "day" },
    { "key": "BATSWITCHDCVOLT", "label": "BATTERY_LOAD_SWITCH_TO_AC_VOLTAGE", "unit": "0.1V" },
    { "key": "STOPCHGCURRSET", "label": "STOP_CHARGE_CURRENT_SET", "unit": "0.1A" },
    { "key": "STOPCHGSOCSET", "label": "STOP_CHARGE_SOC_SET", "unit": "0.01%" },
    { "key": "BATSOCLOWALARM", "label": "BATTERY_SOC_LOW_ALARM", "unit": "0.01%" },
    { "key": "BATSOCSWTOLINE", "label": "BATTERY_SOC_SWITCH_TO_LINE", "unit": "0.01%" },
    { "key": "BATSOCSWTOBATT", "label": "BATTERY_SOC_SWITCH_TO_BATTERY", "unit": "0.01%" },
    { "key": "BATTEQUALCHGTIMEOUT", "label": "BATTERY_EQUALIZE_CHARGE_TIMEOUT", "unit": "min" },
    { "key": "LIBATTACTIVECURRSET", "label": "LITHIUM_BATTERY_ACTIVATION_CURRENT", "unit": "0.1A" },
    { "key": "BMSCHGLCMODE", "label": "BMS_CHARGE_LOGIC_CONTROL_MODE", "unit": "-" },
    { "key": "BATPARMRESERVED2", "label": "BATTERY_PARAMETER_RESERVED_2", "unit": "-" }
  ],

  "ChargeDischargeSettings": [
    { "key": "CHARGESTARTTIME3", "label": "CHARGE_START_TIME_3", "unit": "HH:MM" },
    { "key": "CHARGEENDTIME3", "label": "CHARGE_END_TIME_3", "unit": "HH:MM" },
    { "key": "DISCHGSTARTTIME2", "label": "DISCHARGE_START_TIME_2", "unit": "HH:MM" },
    { "key": "DISCHGENDTIME2", "label": "DISCHARGE_END_TIME_2", "unit": "HH:MM" },
    { "key": "DISCHGSTARTTIME3", "label": "DISCHARGE_START_TIME_3", "unit": "HH:MM" },
    { "key": "DISCHGENDTIME3", "label": "DISCHARGE_END_TIME_3", "unit": "HH:MM" },
    { "key": "TIMEDCHG2STOPSOC", "label": "TIMED_CHARGE_2_STOP_SOC", "unit": "0.01%" },
    { "key": "TIMEDCHG3STOPSOC", "label": "TIMED_CHARGE_3_STOP_SOC", "unit": "0.01%" },
    { "key": "TIMEDDCHG2STOPSOC", "label": "TIMED_DISCHARGE_2_STOP_SOC", "unit": "0.01%" },
    { "key": "TIMEDDCHG3STOPSOC", "label": "TIMED_DISCHARGE_3_STOP_SOC", "unit": "0.01%" },
    { "key": "TIMEDCHG1STOPVOLT", "label": "TIMED_CHARGE_1_STOP_VOLTAGE", "unit": "0.1V" },
    { "key": "TIMEDCHG2STOPVOLT", "label": "TIMED_CHARGE_2_STOP_VOLTAGE", "unit": "0.1V" },
    { "key": "TIMEDCHG3STOPVOLT", "label": "TIMED_CHARGE_3_STOP_VOLTAGE", "unit": "0.1V" },
    { "key": "TIMEDDCHG1STOPVOLT", "label": "TIMED_DISCHARGE_1_STOP_VOLTAGE", "unit": "0.1V" },
    { "key": "TIMEDDCHG2STOPVOLT", "label": "TIMED_DISCHARGE_2_STOP_VOLTAGE", "unit": "0.1V" },
    { "key": "TIMEDDCHG3STOPVOLT", "label": "TIMED_DISCHARGE_3_STOP_VOLTAGE", "unit": "0.1V" },
    { "key": "TIMEDCHG2MAXPOWER", "label": "TIMED_CHARGE_2_MAX_POWER", "unit": "W" },
    { "key": "TIMEDCHG3MAXPOWER", "label": "TIMED_CHARGE_3_MAX_POWER", "unit": "W" },
    { "key": "TIMEDDCHG2MAXPOWER", "label": "TIMED_DISCHARGE_2_MAX_POWER", "unit": "W" },
    { "key": "TIMEDDCHG3MAXPOWER", "label": "TIMED_DISCHARGE_3_MAX_POWER", "unit": "W" },
    { "key": "TIMEDCHGSOURCE", "label": "TIMED_CHARGE_SOURCE", "unit": "-" },
    // { "key": "ONGRIDDCHGSOCBALANCEEN", "label": "ON_GRID_DISCHARGE_SOC_BALANCE_ENABLE", "unit": "0/1" },
    // { "key": "ONGRIDCHGSOCBALANCEEN", "label": "ON_GRID_CHARGE_SOC_BALANCE_ENABLE", "unit": "0/1" },
    { "key": "SOCBALANCERATIO", "label": "SOC_BALANCE_RATIO", "unit": "-" },
    // { "key": "WEEKSET", "label": "WEEK_SETTING", "unit": "-" },
    // { "key": "WEEKTOONTIMEEN", "label": "WEEK_TIMED_ON_ENABLE", "unit": "-" }
  ],

  "InverterSettings": [
    { "key": "AUTORESTARTOVLOAD", "label": "AUTO_RESTART_ON_OVERLOAD", "unit": "0/1" },
    { "key": "AUTORESTARTOVTEMPER", "label": "AUTO_RESTART_ON_OVER_TEMPERATURE", "unit": "0/1" },
    { "key": "IBATTLINECHGLIMIT", "label": "AC_CHARGING_MAX_CURRENT_LIMIT", "unit": "0.1A" },
    { "key": "BATTEQUALCHGENABLE", "label": "BATTERY_EQUALIZE_CHARGE_ENABLE", "unit": "0/1" },
    { "key": "N_G_FUNCEN", "label": "N_PE_GROUND_SHORT_ENABLE", "unit": "0/1" },
    { "key": "BMSERRSTOPENABLE", "label": "BMS_ERROR_STOP_ENABLE", "unit": "0/1" },
    { "key": "DCLOADSWITCH", "label": "DC_LOAD_SWITCH", "unit": "0/1" },
    { "key": "DERATEPOWER", "label": "DERATE_POWER_RATING", "unit": "W" },
    { "key": "GENERATORCHGDISABLE", "label": "GENERATOR_CHARGE_DISABLE", "unit": "0/1" },
    { "key": "RS485BMSPROTOCOL", "label": "RS485_BMS_PROTOCOL", "unit": "-" },
    { "key": "MAXLINECURRENT", "label": "MAXIMUM_LINE_CURRENT", "unit": "0.1A" },
    { "key": "MAXLINEPOWER", "label": "MAXIMUM_LINE_POWER", "unit": "W" },
    { "key": "OUTPUTPHASESET", "label": "OUTPUT_PHASE_SETTING", "unit": "-" },
    { "key": "PARALLMODE", "label": "PARALLEL_MODE", "unit": "-" },
    { "key": "GENWORKMODE", "label": "GENERATOR_WORK_MODE", "unit": "-" },
    { "key": "GENCHGMAXCURR", "label": "GENERATOR_CHARGE_MAX_CURRENT", "unit": "0.1A" },
    { "key": "GENRATEPOWER", "label": "GENERATOR_RATED_POWER", "unit": "W" },
    { "key": "GRIDTOSMARTLOADEN", "label": "GRID_TO_SMART_LOAD_ENABLE", "unit": "0/1" }
  ],

//   "GridProtectionSettings": [
//     { "key": "GRIDSTANDARD", "label": "GRID_CONNECTION_STANDARD", "unit": "-" },
//     { "key": "GRIDUVLEVEL2", "label": "GRID_UNDER_VOLTAGE_LEVEL_2", "unit": "0.1V" },
//     { "key": "GRIDUVTIME2", "label": "GRID_UNDER_VOLTAGE_TIME_2", "unit": "0.01s" },
//     { "key": "GRIDUVRESUMLEVEL1", "label": "GRID_UNDER_VOLTAGE_RESUME_LEVEL_1", "unit": "0.1V" },
//     { "key": "GRIDUVRESUMTIME1", "label": "GRID_UNDER_VOLTAGE_RESUME_TIME_1", "unit": "0.01s" },
//     { "key": "GRIDUVRESUMLEVEL2", "label": "GRID_UNDER_VOLTAGE_RESUME_LEVEL_2", "unit": "0.1V" },
//     { "key": "GRIDUVRESUMTIME2", "label": "GRID_UNDER_VOLTAGE_RESUME_TIME_2", "unit": "0.01s" },
//     { "key": "GRIDOVLEVEL2", "label": "GRID_OVER_VOLTAGE_LEVEL_2", "unit": "0.1V" },
//     { "key": "GRIDOVTIME2", "label": "GRID_OVER_VOLTAGE_TIME_2", "unit": "0.01s" },
//     { "key": "GRIDOVRESUMLEVEL1", "label": "GRID_OVER_VOLTAGE_RESUME_LEVEL_1", "unit": "0.1V" },
//     { "key": "GRIDOVRESUMTIME1", "label": "GRID_OVER_VOLTAGE_RESUME_TIME_1", "unit": "0.01s" },
//     { "key": "GRIDOVRESUMLEVEL2", "label": "GRID_OVER_VOLTAGE_RESUME_LEVEL_2", "unit": "0.1V" },
//     { "key": "GRIDOVRESUMTIME2", "label": "GRID_OVER_VOLTAGE_RESUME_TIME_2", "unit": "0.01s" },
//     { "key": "GRIDUFLEVEL2", "label": "GRID_UNDER_FREQUENCY_LEVEL_2", "unit": "0.01Hz" },
//     { "key": "GRIDUFTIME2", "label": "GRID_UNDER_FREQUENCY_TIME_2", "unit": "0.01s" },
//     { "key": "GRIDUFRESUMLEVEL1", "label": "GRID_UNDER_FREQUENCY_RESUME_LEVEL_1", "unit": "0.01Hz" },
//     { "key": "GRIDUFRESUMTIME1", "label": "GRID_UNDER_FREQUENCY_RESUME_TIME_1", "unit": "0.01s" },
//     { "key": "GRIDUFRESUMLEVEL2", "label": "GRID_UNDER_FREQUENCY_RESUME_LEVEL_2", "unit": "0.01Hz" },
//     { "key": "GRIDUFRESUMTIME2", "label": "GRID_UNDER_FREQUENCY_RESUME_TIME_2", "unit": "0.01s" },
//     { "key": "GRIDOFLEVEL2", "label": "GRID_OVER_FREQUENCY_LEVEL_2", "unit": "0.01Hz" },
//     { "key": "GRIDOFTIME2", "label": "GRID_OVER_FREQUENCY_TIME_2", "unit": "0.01s" },
//     { "key": "GRIDOFRESUMLEVEL1", "label": "GRID_OVER_FREQUENCY_RESUME_LEVEL_1", "unit": "0.01Hz" },
//     { "key": "GRIDOFRESUMTIME1", "label": "GRID_OVER_FREQUENCY_RESUME_TIME_1", "unit": "0.01s" },
//     { "key": "GRIDOFRESUMLEVEL2", "label": "GRID_OVER_FREQUENCY_RESUME_LEVEL_2", "unit": "0.01Hz" },
//     { "key": "GRIDOFRESUMTIME2", "label": "GRID_OVER_FREQUENCY_RESUME_TIME_2", "unit": "0.01s" },
//     { "key": "GRIDPFSET", "label": "GRID_POWER_FACTOR_SETTING", "unit": "-" },
//     { "key": "GRIDQSET", "label": "GRID_REACTIVE_POWER_SETTING", "unit": "%" },
//     { "key": "GRIDACTIVEPOWERSET", "label": "GRID_ACTIVE_POWER_SETTING", "unit": "W" },
//     { "key": "GRIDSTANDUSERMODE", "label": "GRID_STANDARD_USER_MODE", "unit": "-" },
//     { "key": "ISOPROTECTPOINT", "label": "INSULATION_PROTECTION_POINT", "unit": "-" },
//     { "key": "ZEROEXPORTPOWER", "label": "ZERO_EXPORT_TARGET_POWER", "unit": "W" },
//     { "key": "EXCTRATIO", "label": "EXTERNAL_CT_RATIO", "unit": "-" },
//     { "key": "RECONNPOWERRAMP", "label": "RECONNECTION_POWER_RAMP", "unit": "s" },
//     { "key": "WATTPFCURVEENABLE", "label": "WATT_PF_CURVE_ENABLE", "unit": "0/1" },
//     { "key": "HLVRTENABLE", "label": "HIGH_LOW_VOLTAGE_RIDE_THROUGH_ENABLE", "unit": "0/1" },
//     { "key": "NORMALCONNDLYTSEC", "label": "NORMAL_CONNECTION_DELAY_TIME", "unit": "s" },
//     { "key": "NORMALCONNPWRRAMPTSEC", "label": "NORMAL_CONNECTION_POWER_RAMP_TIME", "unit": "s" },
//     { "key": "CONNVOLTLOW", "label": "CONNECTION_VOLTAGE_LOW", "unit": "0.1V" },
//     { "key": "CONNVOLTHIGH", "label": "CONNECTION_VOLTAGE_HIGH", "unit": "0.1V" },
//     { "key": "CONNFREQLOW", "label": "CONNECTION_FREQUENCY_LOW", "unit": "0.01Hz" },
//     { "key": "CONNFREQHIGH", "label": "CONNECTION_FREQUENCY_HIGH", "unit": "0.01Hz" },
//     { "key": "CTMANUALSETTING", "label": "CT_MANUAL_SETTING", "unit": "-" },
//     { "key": "GRIDFUNCENABLE1", "label": "GRID_FUNCTION_ENABLE_1", "unit": "-" },
//     { "key": "CEI021AUTOTESTSTEP", "label": "CEI021_AUTO_TEST_STEP", "unit": "-" },
//     { "key": "CEI021AUTOTESTSTART", "label": "CEI021_AUTO_TEST_START", "unit": "0/1" },
//     { "key": "BATTFORGRIDPOWEREN", "label": "BATTERY_FOR_GRID_POWER_ENABLE", "unit": "-" }
//   ],

  "SystemControlSettings": [
    { "key": "ALARMENWHENSOURCELOSS", "label": "ALARM_ON_SOURCE_LOSS_ENABLE", "unit": "0/1" },
    { "key": "BYPENABLEWHENOVLOAD", "label": "BYPASS_ENABLE_ON_OVERLOAD", "unit": "0/1" },
    { "key": "GRIDFUNCENABLE", "label": "GRID_FUNCTION_ENABLE", "unit": "-" }
  ]},
  "tabMenus": ["BatterySettings","ChargeDischargeSettings","InverterSettings","SystemControlSettings"]

}

}



//  "srne_hybrid": {
//         "settingsByCategory": {
//             "BatterySettings": [
//                 { "key": "PVCHGCURRSET", "label": "PV_CHARGE_CURRENT_SET", "unit": "0.1A" },
//                 { "key": "BATRATEVOLT", "label": "BATTERY_RATED_VOLTAGE", "unit": "0.1V" },
//                 { "key": "BATTYPESET", "label": "BATTERY_TYPE_SETTING", "unit": "-" },
//                 { "key": "BATOVERVOLT", "label": "BATTERY_OVER_VOLTAGE", "unit": "0.1V" },
//                 { "key": "BATCHGLIMITVOLT", "label": "BATTERY_CHARGE_LIMIT_VOLTAGE", "unit": "0.1V" },
//                 { "key": "BATCONSTCHGVOLT", "label": "BATTERY_CONSTANT_CHARGE_VOLTAGE", "unit": "0.1V" },
//                 { "key": "BATFLOATCHGVOLT", "label": "BATTERY_FLOAT_CHARGE_VOLTAGE", "unit": "0.1V" },
//                 { "key": "BATOVERDISCHGVOLT", "label": "BATTERY_OVER_DISCHARGE_VOLTAGE", "unit": "0.1V" },
//                 { "key": "BATDISCHGLIMITVOLT", "label": "BATTERY_DISCHARGE_LIMIT_VOLTAGE", "unit": "0.1V" },
//                 { "key": "BATSTOPSOC", "label": "BATTERY_STOP_SOC", "unit": "0.01%" },
//                 { "key": "BATDISCHGMAXCURRSET", "label": "BATTERY_DISCHARGE_MAX_CURRENT", "unit": "0.1A" },
//                 { "key": "BATTVOLTSWTOINV", "label": "BATTERY_VOLTAGE_SWITCH_TO_INVERTER", "unit": "0.1V" }
//             ],

//             "ChargeDischargeSettings": [
//                 { "key": "CHARGESTARTTIME1", "label": "CHARGE_START_TIME_1", "unit": "HH:MM" },
//                 { "key": "CHARGEENDTIME1", "label": "CHARGE_END_TIME_1", "unit": "HH:MM" },
//                 { "key": "CHARGESTARTTIME2", "label": "CHARGE_START_TIME_2", "unit": "HH:MM" },
//                 { "key": "CHARGEENDTIME2", "label": "CHARGE_END_TIME_2", "unit": "HH:MM" },
//                 { "key": "DISCHGSTARTTIME1", "label": "DISCHARGE_START_TIME_1", "unit": "HH:MM" },
//                 { "key": "DISCHGENDTIME1", "label": "DISCHARGE_END_TIME_1", "unit": "HH:MM" },
//                 { "key": "ONTIMECHARGEEN", "label": "ON_TIME_CHARGE_ENABLE", "unit": "0/1" },
//                 { "key": "ONTIMEDISCHGEN", "label": "ON_TIME_DISCHARGE_ENABLE", "unit": "0/1" },
//                 { "key": "TIMEDCHG1STOPSOC", "label": "TIMED_CHARGE_1_STOP_SOC", "unit": "0.01%" },
//                 { "key": "TIMEDDCHG1STOPSOC", "label": "TIMED_DISCHARGE_1_STOP_SOC", "unit": "0.01%" },
//                 { "key": "TIMEDCHG1MAXPOWER", "label": "TIMED_CHARGE_1_MAX_POWER", "unit": "W" },
//                 { "key": "TIMEDDCHG1MAXPOWER", "label": "TIMED_DISCHARGE_1_MAX_POWER", "unit": "W" }
//             ],

//             "InverterSettings": [
//                 { "key": "OUTPUTPRIORITY", "label": "OUTPUT_PRIORITY_SETTING", "unit": "-" },
//                 { "key": "OUTPUTVOLTSET", "label": "OUTPUT_VOLTAGE_SETPOINT", "unit": "0.1V" },
//                 { "key": "OUTPUTFREQSET", "label": "OUTPUT_FREQUENCY_SETPOINT", "unit": "0.01Hz" },
//                 { "key": "MAXCHGCURR", "label": "MAXIMUM_CHARGE_CURRENT", "unit": "0.1A" },
//                 { "key": "ACVOLTRANGE", "label": "AC_VOLTAGE_RANGE", "unit": "0.1V" },
//                 {
//                     "key": "POWERSAVINGMODE",
//                     "label": "POWER_SAVING_MODE",
//                     "options": [{ "0": "Disable" }, { "1": "Enable" }]
//                 },
//                 { "key": "CHGSOURCEPRIORITY", "label": "CHARGE_SOURCE_PRIORITY", "unit": "-" },
//                 {
//                     "key": "ALARMENABLE",
//                     "label": "ALARM_ENABLE",
//                     "options": [{ "0": "Disable" }, { "1": "Enable" }]
//                 },
//                 {
//                     "key": "BMSCOMMENABLE",
//                     "label": "BMS_COMMUNICATION_ENABLE",
//                     "options": [{ "0": "Disable" }, { "1": "Enable" }]
//                 },
//                 {
//                     "key": "GENERATORCHGDISABLE",
//                     "label": "GENERATOR_CHARGE_DISABLE",
//                     "options": [{ "0": "Disable" }, { "1": "Enable" }]
//                 }
//             ],

//             "GridProtectionSettings": [
//                 { "key": "GRIDUVLEVEL1", "label": "GRID_UNDER_VOLTAGE_LEVEL_1", "unit": "0.1V" },
//                 { "key": "GRIDUVTIME1", "label": "GRID_UNDER_VOLTAGE_TIME_1", "unit": "0.01s" },
//                 { "key": "GRIDOVLEVEL1", "label": "GRID_OVER_VOLTAGE_LEVEL_1", "unit": "0.1V" },
//                 { "key": "GRIDOVTIME1", "label": "GRID_OVER_VOLTAGE_TIME_1", "unit": "0.01s" },
//                 { "key": "GRIDUFLEVEL1", "label": "GRID_UNDER_FREQUENCY_LEVEL_1", "unit": "0.01Hz" },
//                 { "key": "GRIDUFTIME1", "label": "GRID_UNDER_FREQUENCY_TIME_1", "unit": "0.01s" },
//                 { "key": "GRIDOFLEVEL1", "label": "GRID_OVER_FREQUENCY_LEVEL_1", "unit": "0.01Hz" },
//                 { "key": "GRIDOFTIME1", "label": "GRID_OVER_FREQUENCY_TIME_1", "unit": "0.01s" },
//                 { "key": "RECONNECTGRIDTIME", "label": "RECONNECT_GRID_TIME", "unit": "0.01s" },
//                 {
//                     "key": "ISOCHECKEN",
//                     "label": "INSULATION_CHECK_ENABLE",
//                     "options": [{ "0": "Disable" }, { "1": "Enable" }]
//                 },
//                 {
//                     "key": "AFCIENABLE",
//                     "label": "AFCI_ENABLE",
//                     "options": [{ "0": "Disable" }, { "1": "Enable" }]
//                 }
//             ],

//             "SystemControlSettings": [
//                 {
//                     "key": "INVTONOFF",
//                     "label": "COMMAND_POWER_ON_OFF",
//                     "options": [{ "0": "Disable" }, { "1": "Enable" }]
//                 },
//                 { "key": "ARCFLTCLR", "label": "ARC_FAULT_CLEAR_COMMAND", "unit": "-" },
//                 {
//                     "key": "INVTOGRIDEN",
//                     "label": "INVERTER_TO_GRID_ENABLE",
//                     "options": [{ "0": "Disable" }, { "1": "Enable" }]
//                 },
//                 {
//                     "key": "LEAKAGECURRDTCEN",
//                     "label": "LEAKAGE_CURRENT_DETECTION_ENABLE",
//                     "options": [{ "0": "Disable" }, { "1": "Enable" }]
//                 },
//                 { "key": "PVPOWERPRIORITYSET", "label": "PV_POWER_PRIORITY_SETTING", "unit": "-" },
//                 {
//                     "key": "BATTTEMPERCOMPEN",
//                     "label": "BATTERY_TEMPERATURE_COMPENSATION_ENABLE",
//                     "options": [{ "0": "Disable" }, { "1": "Enable" }]
//                 },
//                 {
//                     "key": "GRIDFUNCENABLE",
//                     "label": "GRID_FUNCTION_ENABLE",
//                     "options": [{ "0": "Disable" }, { "1": "Enable" }]
//                 },
//                 {
//                     "key": "SMARTMETEREN",
//                     "label": "SMART_METER_ENABLE",
//                     "options": [{ "0": "Disable" }, { "1": "Enable" }]
//                 },
//                 {
//                     "key": "CTAUTODETECTEN",
//                     "label": "CT_AUTO_DETECT_ENABLE",
//                     "options": [{ "0": "Disable" }, { "1": "Enable" }]
//                 },
//                 {
//                     "key": "DRMS_ENABLE",
//                     "label": "DRMS_ENABLE",
//                     "options": [{ "0": "Disable" }, { "1": "Enable" }]
//                 }
//             ]
//         },

//         "tabMenus": [
//             "BatterySettings",
//             "ChargeDischargeSettings",
//             "InverterSettings",
//             "GridProtectionSettings",
//             "SystemControlSettings"
//         ]
//     }



for (let key in data) {
    // data[key][]
    data[key]['tabMenus'].push('LoggerConfig')
    for (let subkey in data[key]) {
        if (subkey != 'tabMenus') {

            data[key][subkey]['LoggerConfig'] = [
                { key: "RESTART", label: "Restart the module" },
                { key: "SOFT_VER", label: "software version" },
                { key: "INTERVAL", label: "Interval for data transmission", unit: "S" },
                // { key: "FILE_NAME", label: "Fota file name" },
                // { key: "HTTP_URL", label: "Fota server url" },
                // { key: "START_FOTA", label: "Start Fota" },
                { key: "WR_DATE_TIME", label: "Inverter date time" },
                { key: "STINTERVAL", label: "Storage Interval" , unit: "0.5S"},
                
            ]
            if(data[key] == 'watech'){
                delete data[key][subkey]['LoggerConfig'][0]
                delete data[key][subkey]['LoggerConfig'][1]
            }
        }
    }
}



export default data;