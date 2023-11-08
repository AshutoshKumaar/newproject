import React from 'react'
import { Bar } from 'react-chartjs-2';



const options = {
    plugins: {
        title: {
            display: false,
            text: 'Chart for location',
        },
        legend: {
            display: false,
            position: 'top', // Place the legend at the bottom

        },
    },
    responsive: true,
    scales: {
        x: {
            stacked: true,
        },
        y: {
            stacked: true,
        },
    },
};

const labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const data = {
    labels,
    datasets: [
        {
            label: 'Country',
            data: [10, 20, 30, 40, 50, 60, 100],
            backgroundColor: 'rgb(255, 99, 132)',
            hoverBackgroundColor: '#fb4540',
            barThickness: 20,

        },
        {
            label: 'City',
            data: [80, 90, 100, 110, 120, 130, 240],
            backgroundColor: 'rgb(75, 192, 192)',
            hoverBackgroundColor: '#00f2de',
            borderRadius: 10,
            barThickness: 20,

        },
    ],
};


function LocationChart() {
    const barStyle = {
        width: '100%',
        height: '100%',
        // backgroundColor: 'red'

    }
    return (
        <div >
            <div className='flex flex-row justify-between items-center py-5 px-6'>
                <div className='text-[25px] font-[700] text-slate-400'>
                    Location
                </div>
                {/* Making own button using simple html and css */}
                <div className='flex flex-row items-center'>
                    <div className='flex items-center'>
                        <p className='w-[15px] h-[15px] bg-[#fb4540] mx-1 rounded-full'></p>
                        <p className='text-slate-300'>Country</p>
                    </div>
                    <div className='flex items-center mx-2'>
                        <p className='w-[15px] h-[15px] bg-[#00f2de] mx-1 rounded-full'></p>
                        <p className='text-slate-300'>City</p>
                    </div>

                </div>
            </div>
            <div className='mt-[5px] w-full h-auto'>
                <Bar style={barStyle} data={data} options={options} />
            </div>
        </div>
    )
}

export default LocationChart 
