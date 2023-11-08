import React from 'react';
import axios from 'axios';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// Register Of Charts.js
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);
const options = {
    responsive: true,
    plugins: {
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                boxWidth: 15, // Set the legend box width
                boxHeight: 15,
            }

        },
        title: {
            display: false,
            text: 'Chart.js Line Chart',
        },
    },
};
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const data = {
    labels,
    datasets: [
        {
            fill: true,
            label: 'visit',
            data: [10, 30, 20, 50, 30, 60, 90],
            borderColor: '#262197',
            backgroundColor: 'rgba(38,33,151,0.2)',
        },
        {
            fill: true,
            label: 'Session',
            data: [10, 50, 30, 60, 50, 80, 110],
            borderColor: '#70b78f',
            backgroundColor: 'rgba(112,183,143,0.2)',
        },
    ],
};


function WebsiteAnalytics() {



    return (
        <div>
            <div>
                <h2 className='text-2xl font-[600] text-slate-400 px-4 pt-1'>Website Analytics</h2>
                <p className='text-sm font-[400] text-slate-500 px-5 py-1'>Based on your Performance</p>
                <div className='flex flex-row bg-transparent mx-4 w-[200px] border-[1px] border-slate-800 shadow-sm cursor-pointer'>
                    <p className='mr-2 px-1 text-slate-500 hover:text-slate-400 hover:bg-slate-900'>Weekly</p>
                    <p className='mr-2 px-1 text-slate-500 hover:text-slate-400 hover:bg-slate-900'>Monthly</p>
                    <p className='mr-2 px-2 text-slate-500 hover:text-slate-400 hover:bg-slate-900'>Yearly</p>
                </div>
            </div>
            <div>
                <Line options={options} data={data} />;
            </div>
        </div>
    );
}

export default WebsiteAnalytics;
