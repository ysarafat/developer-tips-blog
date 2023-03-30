import React from 'react';

const Sidecart = () => {
    return (
        <div className=' md:sticky top-[66px] px-5'>
            <div className='border border-[#6047EC] bg-[#6047EC1A] px-12 py-5 rounded-lg mb-7'>
                <h2 className='text-2xl text-[#6047EC] font-bold'>Spent time on read : </h2>
            </div>
            <div className='bg-[#1111110d] p-7 rounded-lg md:h-[730px] md:mb-0 mb-5'>
                <h1 className='text-2xl font-bold mb-4'>Bookmarked Blogs :</h1>
                <div className='bg-white rounded-lg p-5'>
                <p className='text-lg font-semibold '>Master Microsoft Power Platform and Become an In-Demand!</p>
                </div>
            </div>
        </div>
    );
};

export default Sidecart;