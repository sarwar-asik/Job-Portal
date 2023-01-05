import React from 'react';

const Contacts = () => {
    return (
        <div className='py-[130px] bg-[#00ae87] rounded hover:shadow-2xl my-5'>
            <h1 className=' text-5xl text-center text-gray-50 font-bold font-serif'>Contact Us </h1>
          <p className='text-center text-slate-300 text-xl mt-2 mb-7'>  You can connect with us for any query . Write your message here . </p>
          <div className='text-center' >
          <input type="text" placeholder="Write here" className="h-[48px] input-[white] rounded-xl w-full rounded-r-none max-w-xs border-r-0 px-3 input input-bordered "  />
          <button className='bg-slate-700 h-[48px] text-slate-100 px-3'>Message </button>
          </div>
            
        </div>
    );
};

export default Contacts;