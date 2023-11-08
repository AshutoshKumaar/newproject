import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: ['Total User Visit', 'User Signup', 'User Subscribe'],
    datasets: [
        {
            label: 'No of Votes',
            data: [12, 19, 3],
            backgroundColor: [
                '#3f46f7',
                '#3d3090',
                '#2a165d',

            ],
            borderColor: [
                '#3f46f7',
                '#3d3090',
                '#2a165d',

            ],
            borderWidth: 1,
            weight: 1,

        },
    ],
};

// Horizontal doughnut chart configuration
const options = {
    plugins: {
        title: {
            display: false,
            text: 'Horizontal Doughnut Chart',
        },
        legend: {
            display: true,
            position: 'right', // Place the legend at the bottom
            labels: {
                boxWidth: 30, // Set the legend box width
                boxHeight: 1,
                padding: 30,

            },
        },
    },
    responsive: true,
    aspectRatio: 2, // Ensure the chart maintains a square aspect ratio
    cutout: '80%', // Adjust the cutout percentage for the doughnut hole
};

function ConverSationChart() {
    const doughnutStyle = {
        width: '100%',
        height: '200px',


    }
    return (
        <div className='w-full lg:w-[450px] h-auto lg:h-[300px]'>
            <h2 className='text-[22px] font-[600] px-3 pt-3 text-slate-400'>Coversation Rate</h2>
            <div className='w-full lg:w-[430px] h-auto lg:h-[200px] my-6 mx-auto relative'>
                <Doughnut style={doughnutStyle} data={data} options={options} />
                <p className='hidden lg:block absolute top-[70px] left-24 text-[36px] font-[600] text-slate-400'>583</p>
                <p className='hidden lg:block  absolute top-[66px] right-12 text-slate-300 font-[600]'>3,124,213 users</p>
                <p className='hidden lg:block absolute top-[108px] right-12 text-slate-300 font-[600]'>1,523,151 users</p>
                <p className='hidden lg:block absolute top-[148px] right-12 text-slate-300 font-[600]'>948,213 users</p>
            </div>

        </div >
    )
}

export default ConverSationChart
