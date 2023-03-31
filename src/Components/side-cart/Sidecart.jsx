import React, { useEffect, useState } from 'react';

const Sidecart = ({read, cart}) => {
    const [time, setTime] = useState(read)
    const [cartinfo, setCartinfo] = useState(cart)

    useEffect(()=> {
        const getItemFromLocal = JSON.parse(localStorage.getItem("bookmark"))
        setCartinfo(getItemFromLocal)
    },[cart])
    useEffect(()=> {
        const getReading = JSON.parse(localStorage.getItem("reading-time"))
        setTime(getReading)
    },[read])
    let totalRead = 0;
    if (time){
        for (const readingTime of time){
            totalRead = totalRead + readingTime.reading;
        }
    }
    return (
        <div className=' md:sticky top-[66px] px-5'>
            <div className='border border-[#6047EC] bg-[#6047EC1A] px-12 py-5 rounded-lg mb-7'>
                
                <h2 className='text-2xl text-[#6047EC] font-bold'>Spent time on read : {totalRead? totalRead : 0} </h2>
            </div>
            <div className='bg-[#1111110d] p-7 rounded-lg  md:mb-0 mb-5'>
                <h1 className='text-2xl font-bold mb-4'>Bookmarked Blogs : {cartinfo?.length ? cartinfo.length : 0 }</h1>
                <div>
               {cartinfo?.map(data =>  <p className='bg-white rounded-lg p-5 my-3 text-lg font-semibold'>{data.title}</p>)}
               
                </div>
            </div>
        </div>
    );
};

export default Sidecart;