import React from 'react'
import Firstcharts from './Firstcharts';
import LocationChart from './LocationChart ';
import ConverSationChart from './ConverSationChart';
import WebsiteAnylitcs from './WebsiteAnylitcs';
import USerdata from './USerdata';

function Userinfo() {

    return (
        <div>
            {/* This is the header of Dashboard */}
            <header className='flex flex-row justify-between items-center px-3 lg:px-20 py-5'>
                {/* For the headline */}
                <div className='w-[300px]'>
                    <h3 className='text-[#9d9eaa] font-[700] text-[25px]'>User anlaytics</h3>
                    <p className='text-[#9d9eaa]'>Lorem ipsum dolor sit amet.</p>
                </div>
                {/* For the user and admin drop-down menu */}
                <div className='w-[130px] h-[40px] bg-transparent'>
                    <select id="panel" className='w-[100%] h-[100%] border-[1px] border-slate-500 bg-transparent text-[#9d9eaa] px-2 outline-none'>
                        <option value="user" className='bg-[#211745]'>User</option>
                        <option value="admin" className='bg-[#211745]'>Admin</option>
                    </select>
                </div>
            </header >
            {/* This is Section part-1 of dashboard */}
            < section className='flex flex-col lg:flex-row justify-around lg:justify-between items-center px-2 lg:px-[110px] py-2'>
                {/* for the showing the total veiwers */}
                <div className='w-[320px] h-auto cursor-pointer '>
                    <USerdata />
                </div>
                {/* For the showing the data as a charts */}
                <div className='w-full lg:w-[900px] h-auto lg:h-[440px]'>
                    <Firstcharts />
                </div>
            </section >
            {/* This is Section Part-2 of dashboard */}
            <section className='flex flex-col lg:flex-row justify-between items-center px-2 lg:px-[105px] py-5'>
                <div className='w-full lg:w-[400px] h-auto lg:h-[300px] bg-[#181a3b] shadow-lg border-[1px] my-2 lg:my-0 border-slate-600 rounded-lg cursor-pointer'>
                    <LocationChart />
                </div>
                <div className='w-full lg:w-[450px] h-auto lg:h-[300px] bg-[#181a3b] shadow-lg border-[1px] border-slate-600 rounded-lg  my-2 lg:my-0  cursor-pointer'>
                    <ConverSationChart />
                </div>
                <div className='w-full lg:w-[430px] h-auto lg:h-[300px] bg-[#181a3b] shadow-lg border-[1px] border-slate-600 rounded-lg  my-2 lg:my-0  cursor-pointer'>
                    <WebsiteAnylitcs />
                </div>
            </section>
        </div >
    )
}

export default Userinfo
