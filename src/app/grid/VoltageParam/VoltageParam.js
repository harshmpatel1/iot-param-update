'use client';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import data from '../../user_data'; // Assuming user_data.js exports the required data

const Spinner = () => (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
        <div className="w-48 h-48 border-[6px] border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
);

// This object defines the scaling factors for certain units.
let alterInputOutPutConstraints = {
    'V': '0.1',
    '0.1V': '0.1',
    '0.01V': '0.01',
    '0.001V': '0.001',
    '20ms': '20',
    '0.01Hz': '0.01',
    'Hz': '0.01',
    '0.01S': '0.01',
    '0.1%Hz': '0.1',
    '0.1A': '0.1',
    '10mSec': '10',
    '0.01C': '0.01',
    '0.1Kohm': '0.1',
    '0.01sec': '0.01',
     'A.': '0.01',
    'Ahr': '0.1',
    '0.1%/s': '0.001',
    'C': '0.1',
    '%.': '0.1',
    '0.5S': '0.5'
};

export default function VoltageParam() {
    const searchParams = useSearchParams();
    const [values, setValues] = useState({});
    const [statuses, setStatuses] = useState({});
    const [selectedVars, setSelectedVars] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [readOnlyVars, setReadOnlyVars] = useState([]);
    const [currentData, setCurrentData] = useState([]);

    // Get parameters from URL
    const macId = searchParams.get('macId')?.toLowerCase() || '';
    const version = searchParams.get('Version') || '';
    const type = searchParams.get('Type')?.toLowerCase() || '';
    

    // Set the current data based on the 'type' from the URL
    useEffect(() => {
        if (type && data[type]) {
            setCurrentData(data[type]);
        }
    }, [type]);

    // Toggles between selecting all and deselecting all variables
    const toggleSelectAll = () => {
        if (selectedVars.length === currentData.length) {
            setSelectedVars([]); // Deselect all
        } else {
            setSelectedVars(currentData.map(item => item.key)); // Select all
        }
    };

    const handleValueChange = (varName, value) => {
        setValues(prev => ({ ...prev, [varName]: parseInt(value) }));
        setReadOnlyVars(prev => prev.filter(v => v !== varName)); // Allow editing again
    };

    const handleCheckboxChange = (varName, isChecked) => {
        setSelectedVars(prev =>
            isChecked ? [...prev, varName] : prev.filter(v => v !== varName)
        );
    };

    const handleReadAll = async () => {
        if (selectedVars.length === 0) {
            alert('Please select at least one variable to read');
            return;
        }

        setIsLoading(true);
        setStatuses({});

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    variables: selectedVars.map(v => ({ variable: v })),
                    macId: macId,
                    version: version
                }),
            });

            const result = await response.json();

            if (result.success) {
                const newValues = {};
                const newStatuses = {};

                result.details.forEach(detail => {
                    const value = detail.response?.[detail.variable];
                    if (value !== undefined) {
                        const itemConfig = currentData.find(item => item.key === detail.variable);
                        const unit = itemConfig?.unit || '';

                        // Apply scaling factor if the unit is in our constraints map
                        if (alterInputOutPutConstraints[unit]) {
                            newValues[detail.variable] = parseFloat(value) * parseFloat(alterInputOutPutConstraints[unit]);
                        } else {
                            newValues[detail.variable] = value;
                        }
                        newStatuses[detail.variable] = 'success';
                    } else {
                        newValues[detail.variable] = 'No value';
                        newStatuses[detail.variable] = 'failed';
                    }
                });

                setValues(prev => ({ ...prev, ...newValues }));
                setStatuses(newStatuses);
                setReadOnlyVars(selectedVars);
            } else {
                alert('Error reading variables: ' + (result.error || 'Unknown error'));
            }
        } catch (error) {
            console.error(error);
            alert('Failed to connect to the server');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="space-y-4 overflow-y-auto min-h-screen p-2 sm:p-8 sm:px-12 text-sm bg-white">
            <div className="space-y-4">
                <div className='flex flex-col sm:flex-row justify-start items-stretch sm:items-center gap-2 sm:gap-4 mb-4'>
                    <button
                        onClick={toggleSelectAll}
                        className="w-full sm:w-auto px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 disabled:bg-gray-300"
                        disabled={!currentData.length}
                    >
                        {selectedVars.length === currentData.length ? 'Deselect All' : 'Select Alls'}
                    </button>
                    <button
                        onClick={handleReadAll}
                        disabled={isLoading || selectedVars.length === 0}
                        className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-blue-300"
                    >
                        {isLoading ? 'Reading...' : 'Read Selected'}
                    </button>
                </div>

                {isLoading && <Spinner />}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
                    {currentData.map(item => {
                        // Logic to get the display unit (e.g., '0.1V' -> 'V')
                        const displayUnit = alterInputOutPutConstraints.hasOwnProperty(item.unit)
                            ? item.unit.replace(/^[\d.]+/, '')
                            : item.unit;

                        return (
                            <div key={item.key} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4 p-3 bg-white rounded-lg shadow border border-gray-200">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={selectedVars.includes(item.key)}
                                        onChange={e => handleCheckboxChange(item.key, e.target.checked)}
                                        className="h-5 w-5 rounded text-blue-600 focus:ring-blue-500"
                                    />
                                </div>
                                <div className='flex-grow flex flex-col gap-2'>
                                    <label className="font-medium text-gray-700">{item.label}</label>
                                    <div className="flex items-center">
                                        <input
                                            type="text"
                                            value={values[item.key] ?? ''}
                                            placeholder={item.range !== 'null' ? item.range : 'Enter value'}
                                            onChange={e => handleValueChange(item.key, e.target.value)}
                                            className={`flex-1 px-3 py-2 border rounded-md text-gray-700 border-gray-300 transition-colors ${
                                                readOnlyVars.includes(item.key) ? 'bg-gray-100' : 'bg-white'
                                            }`}
                                        />
                                        {item.unit && item.unit !== 'null' && (
                                            <span className="ml-2 text-gray-500">{displayUnit}</span>
                                        )}
                                    </div>
                                    {statuses[item.key] && (
                                        <span
                                            className={`w-max mt-1 px-2 py-0.5 rounded-full text-xs font-semibold ${
                                                statuses[item.key] === 'success'
                                                    ? 'bg-green-100 text-green-800'
                                                    : 'bg-red-100 text-red-800'
                                            }`}
                                        >
                                            {statuses[item.key]}
                                        </span>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}