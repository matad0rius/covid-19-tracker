import React from 'react';
import Chart from 'chart.js';

export default function AnalyticChart() {

    React.useEffect(() => {
        const canvas = document.getElementById("chart").
            getContext('2d');
            // make api req
            window.myLine = new Chart(canvas, {
                type: 'bar',
                data: {
                    labels: ["Mar 22", "Mar 23", "Mar 24", "Mar 25", "Mar 26"],
                    datasets: [
                        {
                            label: "Deaths",
                            data: [0,5,2,0,3],
                            backgroundColor: "#F87171",
                            borderColor: "#F87171"
                        },
                        {
                            label: "Active",
                            data: [4,4,1,1,3],
                            backgroundColor: "#6EE7B7",
                            borderColor: "#6EE7B7"
                        },
                        {
                            label: "Recovered",
                            data: [4,2,1,5,3],
                            backgroundColor: "#93C5FD",
                            borderColor: "#93C5FD"
                        }
                    ],
                },
                options: {
                    maintainAspectRatio: false,
                    responsive: true,
                    title: {
                        text: "Covid Chart",
                        display: true,
                        fontSize: "20",
                        fontColor: "white",
                    },
                    legend: {
                        align: 'end',
                        position: 'top',
                        labels: {
                            fontColor: 'white'  
                        },
                    },
                    scales: {
                        xAxes: [
                            {
                                ticks: {
                                    fontColor: 'white',
                                },
                            },
                        ],
                        yAxes: [
                            {
                                ticks: {
                                    fontColor: 'white',
                                    callback: function(tick, index, array) {
                                        return index % 2 === 0 ? tick : "";
                                    },
                                },
                                gridLines: {
                                    borderDash: [3],
                                    borderDashOffset: [10],
                                    colors: "rgba(255,255,255,0.3",
                                    zeroLineColor: "rgba(255,255,255,0.3",
                                }
                            }
                        ]
                    }
                }
            })
    }, [])

    return (
        <div className="w11/12 xl:w-8/12 mx-auto mt-10">
            <canvas id="chart" className="h-96"/>
        </div>
    )
}
