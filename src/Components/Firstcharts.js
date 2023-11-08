import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    LineController,
    LineElement,
    PointElement,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    LineController,
    LineElement,
    PointElement, // Register PointElement to resolve the "point is not a registered element" error
);

const options = {
    plugins: {
        title: {
            display: false,
            text: 'Bar Chart',
        },
    },
    responsive: true,
    interaction: {
        mode: 'index',
        intersect: false,
    },
    scales: {
        x: {
            stacked: true,
        },
        y: {
            stacked: true,
            ticks: {
                callback: function (value) {
                    return value + '%';
                },
            },
        },
    },
    tooltips: {
        callbacks: {
            label: function (context) {
                return context.dataset.label + ': ' + context.parsed.y + '%';
            },
        },
    },
};



function Firstcharts() {
    const labels = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];

    // Original data
    const userSubscribedData = [-50, 10, 0, -20, 0, 0, -70, 0, 0, 0, -90, 0];
    const userSignupData = [0, 0, 150, 0, 110, 90, 0, 165, 90, 60, 0, 100];

    const lineData = [-51, 11, 151, -21, 111, 91, -72, 166, 95, 65, -92, 105];

    const data = {
        labels,
        datasets: [
            {
                label: 'User Subscribed',
                data: userSubscribedData,
                backgroundColor: '#fb4540',
                borderRadius: 8,
                stack: 'Stack 0',
                hoverBackgroundColor: 'red'

            },
            {
                label: 'User Signup',
                data: userSignupData,
                backgroundColor: '#0082cc',
                borderRadius: 8,
                stack: 'Stack 0',
                hoverBackgroundColor: 'blue'
            },
            {
                label: 'Show Line',
                data: lineData,
                borderColor: '#ccc',
                borderWidth: 2,
                borderDash: [3, 3],
                type: 'line',
            },
        ],
    };
    const chartStyle = {
        height: '100%', // Set the desired height here
        width: '100%', // Set the desired width here
    };

    return (
        <div className="w-full lg:w-[900px] h-auto lg:h-[440px] border-[1px] border-slate-700 my-2 bg-[#181a3b] rounded-xl">
            <div className="flex flex-row justify-between px-10 py-2 shadow-xl border-b-[1px] border-slate-700">
                <p className='text-[20px] font-[500] text-slate-300'>User Traffic</p>
                <p className='px-3 border-[1px] border-slate-500 font-[400] text-sm py-1 text-slate-400'>2023</p>
            </div>

            <div className="w-full lg:w-[850px] h-auto lg:h-[390px] mx-auto cursor-pointer">
                <Bar options={options} data={data} style={chartStyle} />
            </div>
        </div>
    );
}

export default Firstcharts;
