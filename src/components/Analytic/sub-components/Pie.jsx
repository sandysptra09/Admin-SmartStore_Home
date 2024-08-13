import React, { useState, useEffect } from 'react';

// import from primechart
import { Chart } from 'primereact/chart';

export default function Pie() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const data = {
            labels: ['Vacuum', 'TV', 'Smart Door', 'CCTV', 'Smart Lamp'],
            datasets: [
                {
                    data: [540, 325, 702, 421, 300],
                    backgroundColor: [
                        '#10b981',
                        '#3b82f6',
                        '#f97316',
                        '#87c7e6',
                        '#06855a'
                    ],
                    hoverBackgroundColor: [
                        '#10b981',
                        '#3b82f6',
                        '#f97316',
                        '#87c7e6',
                        '#06855a'
                    ]
                }
            ]
        };
        const options = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="flex justify-center items-center">
            <Chart type="pie" data={chartData} options={chartOptions} className="w-full md:w-30rem" style={{ width: '380px', height: '380px' }} />
        </div>
    );
}
