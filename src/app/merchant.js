

    const merchant = {
        'thinkpower': {

            'settingsByCategory': {

                GeneralSettings: [
                    { key: "WORKMD", label: "WORKING_MODE", range: "[0,3]", options:[{'00':'General Mode'},{'01':"Peak Shaving and valley filling mode"},{'02':'charging priority mode'},], },
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
                    { key: "GRDVAHAUTOLOWPW", label: "GRID_VHA_AUTO_LOW_POWER", randge: "[0,1]" }
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
        }
        ,
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
                    { "key": "RTDGRVST", "label": "RATED_GRID_VOLTAGE", "range": "0-1", "unit": "null","options": [{ '0': '127/220V' }, { '1': '220/380V' }] },
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
                    { "key": "CHOOSECUNTRY", "label": "CHOOSE_COUNTRY", "range": "null", "unit": "null" },
                    { "key": "PVINPUTMODE", "label": "PV_INPUT_MODE", "range": "null", "unit": "null", "options":[{0:'alone'},{1:'parallel'},{2:'no pv'}]},
                    {"key": "RUNFUNENABLE", "label": "RUN_FUNCTION_ENABLE", "range": "null", "unit": "null", 'options': [{ 0: 'turn off inverter'},  {1: 'turn on inverter' }]},
                    
                    { "key": "PVSTRTVOLT", "label": "PV_START_VOLT", "range": "null", "unit": "0.1V" },
                    { "key": "CTMETERTYPEWR", "label": "CT_METER_TYPE_WRITE", "range": "0-3", "unit": "null", 'options':[{0:'No Meter'},{1:'CT'},{2:'Meter'}] },
                    { "key": "METERBRAND", "label": "METER_BRAND", "range": "null", "unit": "null" },
                    { "key": "UPDATENABLE", "label": "UPDATE_ENABLE", "range": "0-1", "unit": "null" },
                    { "key": "UPDATEBAUD", "label": "UPDATE_BAUDRATE", "range": "0-1", "unit": "null", 'options':[{0:'9600'},{1:'115200'}] },
                    { "key": "UPDATECPUNO", "label": "UPDATE_CPU_NO", "range": "0-3", "unit": "null","options":[{1:'HMI'},{2:'Master'},{3:'Slave'}] },
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
                // "PowerControl": [
                //     { "key": "REACPWRTHRES", "label": "REACTIVE_PWR_THRESHOLD", "range": "0-200000", "unit": "vA" },
                //     { "key": "ACTPWROUTLIMT", "label": "ACTIVE_PWR_OUTPUT_LIMIT", "range": "0-1000", "unit": "%" },
                //     { "key": "MAXACTOUTPWR", "label": "MAX_ACTIVE_OUTPUT_PWR", "range": "0-200000", "unit": "W" },
                //     { "key": "OVRFREQDRTECURV", "label": "OVERFREQ_DRATING_CURVE", "range": "null", "unit": "null" },
                //     { "key": "OVRFREQDRATEF1", "label": "OVERFREQ_DRATING_F1", "range": "50.00-70.00", "unit": "0.01Hz" },
                //     { "key": "OVRFREQDRATEF2", "label": "OVERFREQ_DRATING_F2", "range": "50.00-70.00", "unit": "0.01Hz" },
                //     { "key": "OVRFREQDRATEF3", "label": "OVERFREQ_DRATING_F3", "range": "50.00-70.00", "unit": "0.01Hz" },
                //     { "key": "OVRFREQDRATEF4", "label": "OVERFREQ_DRATING_F4", "range": "50.00-70.00", "unit": "0.01Hz" },
                //     { "key": "OVRFREQDRATEP1", "label": "OVERFREQ_DRATING_P1", "range": "0-20.00", "unit": "0.01Hz" },
                //     { "key": "OVRFREQDRATEP2", "label": "OVERFREQ_DRATING_P2", "range": "0-20.00", "unit": "0.01Hz" },
                //     { "key": "OVRFREQDRATEP3", "label": "OVERFREQ_DRATING_P3", "range": "0-20.00", "unit": "0.01Hz" },
                //     { "key": "OVRFREQDRATEP4", "label": "OVERFREQ_DRATING_P4", "range": "0-20.00", "unit": "0.01Hz" },
                //     { "key": "OVRFREQDRATERECPNT", "label": "OVERFREQ_DRATING_RECOVERY_POINT", "range": "50.00-70.00", "unit": "0.01Hz" },
                //     { "key": "RECTIMDURROVRFREQ", "label": "ACTIVE_PWR_DRATING_DUR_OVERFREQ", "range": "0-5000", "unit": "null" },
                //     { "key": "RECTIMAFTROVRFREQ", "label": "WAIT_RECOVERY_TIME_AFTER_OVERFREQ", "range": "null", "unit": "null" },
                //     { "key": "ATPWRECRTEOVRFREQ", "label": "ACTIVE_PWR_RECOV_RATE_AFTER_OVERFREQ", "range": "null", "unit": "null" },
                //     { "key": "OVRFREQDRTRESTIM", "label": "OVERFREQ_DRATING_RESP_TIME", "range": "null", "unit": "null" },
                //     { "key": "UNDRFREQUPSCLCURV", "label": "UNDERFREQ_UPSCALING_CURVE", "range": "null", "unit": "null" },
                //     { "key": "UNDRFREQRISEF1", "label": "UNDERFREQ_RISE_F1", "range": "40.00-60.00", "unit": "0.01Hz" },
                //     { "key": "UNDRFREQRISEF2", "label": "UNDERFREQ_RISE_F2", "range": "40.00-60.00", "unit": "0.01Hz" },
                //     { "key": "UNDRFREQRISEF3", "label": "UNDERFREQ_RISE_F3", "range": "40.00-60.00", "unit": "0.01Hz" },
                //     { "key": "UNDRFREQRISEF4", "label": "UNDERFREQ_RISE_F4", "range": "40.00-60.00", "unit": "0.01Hz" },
                //     { "key": "UNDRFREQRISEP1", "label": "UNDERFREQ_RISE_P1", "range": "0-2000", "unit": "0.10%" },
                //     { "key": "UNDRFREQRISEP2", "label": "UNDERFREQ_RISE_P2", "range": "0-2000", "unit": "0.10%" },
                //     { "key": "UNDRFREQRISEP3", "label": "UNDERFREQ_RISE_P3", "range": "0-2000", "unit": "0.10%" },
                //     { "key": "UNDRFREQRISEP4", "label": "UNDERFREQ_RISE_P4", "range": "0-2000", "unit": "0.10%" },
                //     { "key": "UNDRFREQUPRTERECPNT", "label": "UNDERFREQ_UPRATE_RECOV_POINT", "range": "40.00-60.00", "unit": "0.01Hz" },
                //     { "key": "ATPWINCRTEUNDRFREQ", "label": "ACTIVE_PWR_INCREASE_RATE_UNDERFREQ", "range": "0.1/H", "unit": "null" },
                //     { "key": "WAITRECTIMUNDRFREQ", "label": "WAIT_RECOVERY_TIME_UNDERFREQ", "range": "null", "unit": "null" },
                //     { "key": "ATPWRECRTEUNDRFREQ", "label": "ACTIVE_PWR_RECOV_RATE_UNDERFREQ", "range": "null", "unit": "null" },
                //     { "key": "RESTIMUNDRFREQUPSCL", "label": "RESP_TIME_UNDERFREQ_UPSCALING", "range": "null", "unit": "null" },
                //     { "key": "GRDOVRVOLTPWREGV1", "label": "GRID_OVERVOLT_PWR_REG_VOLT_1", "range": "100.0-400.0", "unit": "0.1V" },
                //     { "key": "GRDOVRVOLTPWREGV2", "label": "GRID_OVERVOLT_PWR_REG_VOLT_2", "range": "100.0-400.0", "unit": "0.1V" },
                //     { "key": "GRDOVRVOLTPWREGV3", "label": "GRID_OVERVOLT_PWR_REG_VOLT_3", "range": "100.0-400.0", "unit": "0.1V" },
                //     { "key": "GRDOVRVOLTPWREGV4", "label": "GRID_OVERVOLT_PWR_REG_VOLT_4", "range": "100.0-400.0", "unit": "0.1V" },
                //     { "key": "GRDOVRVOLTPWREGP1", "label": "GRID_OVERVOLT_PWR_REG_PWR_1", "range": "0-2000", "unit": "0.10%" },
                //     { "key": "GRDOVRVOLTPWREGP2", "label": "GRID_OVERVOLT_PWR_REG_PWR_2", "range": "0-2000", "unit": "0.10%" },
                //     { "key": "GRDOVRVOLTPWREGP3", "label": "GRID_OVERVOLT_PWR_REG_PWR_3", "range": "0-2000", "unit": "0.10%" },
                //     { "key": "GRDOVRVOLTPWREGP4", "label": "GRID_OVERVOLT_PWR_REG_PWR_4", "range": "0-2000", "unit": "0.10%" },
                //     { "key": "GRDOVRVOLTPWREGTIM", "label": "GRID_OVERVOLT_PWR_REG_TIME", "range": "0-30000", "unit": "0.01S" },
                //     { "key": "GRDUNDRVOLTPWREGV1", "label": "GRID_UNDERVOLT_PWR_REG_VOLT_1", "range": "50.0-250.0", "unit": "0.1V" },
                //     { "key": "GRDUNDRVOLTPWREGV2", "label": "GRID_UNDERVOLT_PWR_REG_VOLT_2", "range": "50.0-250.0", "unit": "0.1V" },
                //     { "key": "GRDUNDRVOLTPWREGV3", "label": "GRID_UNDERVOLT_PWR_REG_VOLT_3", "range": "50.0-250.0", "unit": "0.1V" },
                //     { "key": "GRDUNDRVOLTPWREGV4", "label": "GRID_UNDERVOLT_PWR_REG_VOLT_4", "range": "50.0-250.0", "unit": "0.1V" },
                //     { "key": "GRDUNDRVOLTPWREGP1", "label": "GRID_UNDERVOLT_PWR_REG_PWR_1", "range": "0-2000", "unit": "0.10%" },
                //     { "key": "GRDUNDRVOLTPWREGP2", "label": "GRID_UNDERVOLT_PWR_REG_PWR_2", "range": "0-2000", "unit": "0.10%" },
                //     { "key": "GRDUNDRVOLTPWREGP3", "label": "GRID_UNDERVOLT_PWR_REG_PWR_3", "range": "0-2000", "unit": "0.10%" },
                //     { "key": "GRDUNDRVOLTPWREGP4", "label": "GRID_UNDERVOLT_PWR_REG_PWR_4", "range": "0-2000", "unit": "0.10%" },
                //     { "key": "GRDUNDRVOLTPWREGTIM", "label": "GRID_UNDERVOLT_PWR_REG_TIME", "range": "0-30000", "unit": "0.01S" },
                //     {
                //         "key": "REATCPWCNTRL", "label": "REACTIVE_PWR_CONTROL", "range": "null", "unit": "null", "options": [{ '0': 'Normal' },
                //         { '1': 'Q Set(P1518)' },
                //         { '2': 'Pf Set(P1519)' },
                //         { '3': 'Q By V(P1520~1525)' },
                //         { '4': 'Pf By P(P1526~1527)' }]
                //     },
                //     { "key": "REACTPWSET100", "label": "REACTIVE_PWR_SET_100_PER", "range": "(-1000~1000)", "unit": "0.001" },
                //     { "key": "REACTPWSETVAL", "label": "REACTIVE_PWR_SET_VALUE", "range": "200000~200000", "unit": "VA" },
                //     { "key": "PFSET", "label": "PF_SET", "range": "(-1000~-800,800~1000)", "unit": "0.001" },
                //     { "key": "QBYVV1", "label": "Q_BY_V_V1", "range": "800-1000", "unit": "0.10%" },
                //     { "key": "QBYVV2", "label": "Q_BY_V_V2", "range": "800-1000", "unit": "0.10%" },
                //     { "key": "QBYVV3", "label": "Q_BY_V_V3", "range": "1000-1100", "unit": "0.10%" },
                //     { "key": "QBYVV4", "label": "Q_BY_V_V4", "range": "1000-1200", "unit": "0.10%" },
                //     { "key": "QBYVPCT1", "label": "Q_BY_V_PCT1", "range": "0-40", "unit": "0.10%" },
                //     { "key": "QBYVPCT2", "label": "Q_BY_V_PCT2", "range": "null", "unit": "null" },
                //     { "key": "QBYVPCT3", "label": "Q_BY_V_PCT3", "range": "-40-0", "unit": "0.10%" },
                //     { "key": "QBYVPCT4", "label": "Q_BY_V_PCT4", "range": "40-100", "unit": "0.10%" },
                //     { "key": "PFBYPPSTRT", "label": "PF_BY_P_P_START", "range": "(-1000~-800,800~1000)", "unit": "null" },
                //     { "key": "PFBYPPEND", "label": "PF_BY_P_P_END", "range": "0-5000", "unit": "0.1%Hz" },
                //     { "key": "PFBYPRATE", "label": "PF_BY_P_RATE", "range": "-1000 - +1000", "unit": "0.10%" },
                //     { "key": "PFBYPP1", "label": "PF_BY_P_P1", "range": "-1000 - +1001", "unit": "0.10%" },
                //     { "key": "PFBYPP2", "label": "PF_BY_P_P2", "range": "-1000 - +1000", "unit": "0.10%" },
                //     { "key": "PFBYPP3", "label": "PF_BY_P_P3", "range": "-1000 - +1000", "unit": "0.10%" },
                //     { "key": "PFBYPP4", "label": "PF_BY_P_P4", "range": "-100 - -1000, +100 - +1000", "unit": "0.10%" },
                //     { "key": "PFBYPPF1", "label": "PF_BY_P_PF1", "range": "-100 - -1000, +100 - +1000", "unit": "0.10%" },
                //     { "key": "PFBYPPF2", "label": "PF_BY_P_PF2", "range": "-100 -  -1000, +100 - +1000", "unit": "0.10%" },
                //     { "key": "PFBYPPF3", "label": "PF_BY_P_PF3", "range": "-100 - -1000, +100 - +1000", "unit": "0.10%" },
                //     { "key": "PFBYPPF4", "label": "PF_BY_P_PF4", "range": "null", "unit": "null" },
                //     { "key": "QPFUNENVOLTPP", "label": "Q_P_FUN_ENABLE_VOLT_PP", "range": "null", "unit": "null" },
                //     { "key": "VOLTPPQPFUNEXT", "label": "VOLT_PP_AT_Q_P_FUN_EXIT", "range": "null", "unit": "null" },
                //     { "key": "PWPPQPFUNEXT", "label": "PWR_PP_AT_Q_P_FUN_EXIT", "range": "null", "unit": "null" },
                //     { "key": "QUFUNENPWRATIOPT", "label": "Q_U_FUN_ENABLE_PWR_RATIO_PT", "range": "null", "unit": "null" },
                //     { "key": "QUFUNEXITENPWRATIO", "label": "Q_U_FUN_EXIT_ENABLE_PWR_RATIO_PT", "range": "null", "unit": "null" }
                // ],
                "SystemTimers": [
                    { "key": "INITGRDCNTTIM", "label": "INITIAL_GRID_CONN_TIME", "range": "20-600", "unit": "sec" },
                    { "key": "FLTRECNTTIM", "label": "FAULT_RECONN_TIME", "range": "0-1000", "unit": "0.10%" },
                    { "key": "LMTFEEDINGRDPW", "label": "LIMIT_FEED_IN_GRID_PWR", "range": "null", "unit": "null" }
                ],

            }, "tabMenus": ["BasicSettings", "GridProtection", "PowerControl", "SystemTimers"]
        },
        'afor1phase': {
            "settingsByCategory": {
                "BasicSettings": [
                    { "key": "COUNTRYCOD", "label": "COUNTRY_CODE_WR", "unit": "null" },
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
                // "ComponentProtection": [
                //     { "key": "DCCOMPRTTHR1", "label": "DC_COMPONENT_PROTECTION_THRESHOLD_1", "unit": "1mA" },
                //     { "key": "DCCOMPRTTHR2", "label": "DC_COMPONENT_PROTECTION_THRESHOLD_2", "unit": "1mA" },
                //     { "key": "DCCOMPRTTIM1", "label": "DC_COMPONENT_PROTECTION_TIME_1", "unit": "20mS" },
                //     { "key": "DCCOMPRTTIM2", "label": "DC_COMPONENT_PROTECTION_TIME_2", "unit": "20mS" },
                //     { "key": "DCCOMRECVAL", "label": "DC_COMPONENT_RECOVERY_VALUE", "unit": "1mA" },
                //     { "key": "DCCOMRECTIM", "label": "DC_COMPONENT_RECOVERY_TIME", "unit": "20mS" }
                // ],
                // "PowerControl": [
                //     { "key": "ACTPWRPER", "label": "ACTIVE_POWER_PERCENTAGE", "unit": "0-100%" },
                //     { "key": "HRZAXISPER", "label": "HORIZONTAL_AXIS_PERCENTAGE", "unit": "1%" },
                //     { "key": "VERAXISPER", "label": "VERTICAL_AXIS_PERCENTAGE", "unit": "1%" }
                // ]
            },
            "tabMenus": ["BasicSettings", "VoltageProtection", "FrequencyProtection", "ComponentProtection", "PowerControl"]
        }

    }

    // for (let key in data) {
    //     // data[key][]
    //     data[key]['tabMenus'].push('LoggerConfig')
    //     for (let subkey in data[key]) {
    //         if (subkey != 'tabMenus') {

    //             data[key][subkey]['LoggerConfig'] = [
    //                 { key: "RESTART", label: "Restart the module" },
    //                 { key: "INTERVAL", label: "Interval for data transmission" },
    //                 { key: "FILE_NAME", label: "Fota file name" },
    //                 { key: "HTTP_URL", label: "Fota server url" },
    //                 { key: "START_FOTA", label: "Start Fota" },
    //                 { key: "SOFT_VER", label: "software version" },
    //                 { key: "WR_DATE_TIME", label: "Inverter date time" }
    //             ]
    //         }
    //     }
    // }
    export default merchant;
