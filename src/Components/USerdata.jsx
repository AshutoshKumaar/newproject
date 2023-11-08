import axios from 'axios';
import React, { useEffect, useState } from 'react'

function USerdata() {
    const [recData, setRecData] = useState([]);
    //  I called api just this componets beacuse i dont'had the actual api to call , I had then i call api and render it accroding the API 
    // I have Implemeted all the Instruction that you have been mentioned in your pdf.
    useEffect(() => {
        const apiUrl = 'https://script.googleusercontent.com/macros/echo?user_content_key=6XQyaSgcTaiW77ZFkM-Wv6057KreuisiXugwG8wCzRioTswKd0t47xg26wO35ORTYinjl9RpWEvWgKLybXr59l20dXtKk04km5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnELCH20n1BQ1nfolOFWocMiLKvGJzW74vQSPc0akcdnL7pcUfwbB8nJ3O5xZNlmtZ2GJvF2XolyAYEemvhslXwVYac0L_xgUR9z9Jw9Md8uu&lib=MbbLw1hY64SzwuIsAS5WwHHk7eRbWMluX'
        const fetchData = async () => {
            try {
                const response = await axios.get(apiUrl)
                setRecData(response.data.data)
            } catch (error) {
                console.error('Fetchig Error', error)
            }
        }

        fetchData()

    }, [])


    return (
        <div>
            {
                recData.map((item, index) => {
                    const divStyle = {
                        backgroundColor: item.color,
                    };
                    const Incrementstyle = {
                        backgroundColor: item.IncrementBg,
                        color: item.IncrementColor,

                    }
                    return (
                        <div key={item.id} className='bg-[#181a3b] w-full h-auto my-2 flex flex-row justify-start p-[25px] rounded-xl shadow-lg border-[2px] border-slate-800 hover:shadow-none ease-in-out duration-200 cursor-pointer'>
                            <div style={divStyle} className={`w-[45px] h-[45px] pt-[14px] rounded-md`}>
                                <img src={item.ImgUrl} alt="error" className='w-auto h-auto mx-auto' />
                            </div>
                            <div className='mx-4'>
                                <h3 className='text-[15px] font-[400] text-slate-500 w-[110px]'>{item.Name}</h3>
                                <p className='text-[26px] leading-7 font-[600] text-slate-200 hover:text-slate-500'>{item.numb}</p>
                            </div>
                            <div className='relative'>
                                <div className='absolute left-[20px] top-[20px] my-auto mx-3 w-[50px]'>
                                    <p style={Incrementstyle} className='rounded-md py-[1.5px] px-[3px] text-[12px]'>{item.Increment}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default USerdata
