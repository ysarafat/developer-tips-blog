import React from 'react';

const Sidecart = ({sidecart}) => {
    let reading = 0;
    let title = [];
    for (const cartinfo of sidecart){
        reading = reading + cartinfo.reading
        title = [...title, cartinfo.title]

    }
    // console.log(sidecart);
    return (
        <div className=' md:sticky top-[66px] px-5'>
            <div className='border border-[#6047EC] bg-[#6047EC1A] px-12 py-5 rounded-lg mb-7'>
                <h2 className='text-2xl text-[#6047EC] font-bold'>Spent time on read : {reading} </h2>
            </div>
            <div className='bg-[#1111110d] p-7 rounded-lg  md:mb-0 mb-5'>
                <h1 className='text-2xl font-bold mb-4'>Bookmarked Blogs : {sidecart.length}</h1>
                <div>
               {title.map(title => <p className='bg-white rounded-lg p-5 my-3 text-lg font-semibold'>{title}</p> )}
                </div>
            </div>
        </div>
    );
};

export default Sidecart;