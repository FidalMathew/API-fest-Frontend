import React from "react";
import './App.css';
import 'chart.js/auto';
import { Doughnut } from "react-chartjs-2";

function setData(arrData, labels) {
    let data = {
        maintainAspectRatio: false,
        responsive: false,
        labels: labels,
        datasets: [
            {
                data: arrData,
                backgroundColor: ["blue", "red", "green", "orange", "yellow"],
                // hoverBackgroundColor: ["#FF6384", "#36A2EB"],
            }
        ]
    };
    return data;
}
  
  // template of options
  
function setTitle(string) {
    let options = {
        plugins: {
            legend: {
                display: true,
                position: "right"
            },
            title: {
            display: true,
            text: string,
            }
        },
        elements: {
            arc: {
                borderWidth: 3,
            }
        }
    };
    return options;
}

export default function App() {
    return (
        <div className="App">
            <div className="chart-1">
                <Doughnut data={setData([36000, 45000], ["Income", "Savings"])} options={setTitle("Income vs Savings")} />
                {/* <Doughnut data={setData([19000, 27000, 45000], ["Current Income", "Expense", "Savings"])} options={setTitle("Current Income, Expense and Savings")} /> */}
            </div>
        </div>
    );
}

// otherwise this template can be used elsewhere by importing this file