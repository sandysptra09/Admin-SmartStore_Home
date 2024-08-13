import React, { useState, useEffect } from 'react'

// import from primereact
import { Chart } from 'primereact/chart'

export default function VerticalBar() {

    // vertical bar
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue("--text-color");
        const textColorSecondary = documentStyle.getPropertyValue(
            "--text-color-secondary"
        );
        const surfaceBorder = documentStyle.getPropertyValue("--surface-border");
        const data = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "Sales",
                    backgroundColor: '#10b981',
                    borderColor: '#10b981',
                    data: [7500000, 4780000, 2820000, 1950000, 3100000, 9700000, 12750000],
                },
            ],
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    labels: {
                        fontColor: textColor,
                    },
                },
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            weight: 500,
                        },
                    },
                    grid: {
                        display: false,
                        drawBorder: false,
                    },
                },
                y: {
                    ticks: {
                        color: textColorSecondary,
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false,
                    },
                },
            },
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div>
            <Chart type="bar" data={chartData} options={chartOptions} />
        </div>
    )
}
