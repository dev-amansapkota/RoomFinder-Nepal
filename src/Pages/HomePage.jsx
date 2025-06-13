import React from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi2";
import { FaRegHospital } from "react-icons/fa";
import { IoKeyOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";




function HomePage() {
  const navigate = useNavigate();

  return (
    <div className='mx-2'>
      <div className='max-w-full'>
        <div className=' py-0.9 mx-auto bg-[#FFFFFF] drop-shadow-gray-950 shadow-2xl rounded border-2 flex justify-between items-center '>
          <div className='flex '>
            <HiOutlineHome className='text-blue-600 my-1 text-2xl'/>
            <h3 className='mx-2 my-1 text-black font-bold'>GharDera</h3>
          </div>

        <div className="justify-end flex px-auto py-2 bg-white rounded-2xl ">
           <FaSearch className="text-black my-2 abso"/>
           <input  className="rounded-full border-2 border-gray-200 text-gray-700"
         type="text" placeholder="Search by area, collges or landmark">
          
         </input>
        </div>
       
          <div className=' items-end flex mx-1 my-0.5'>
            <button className='py-2 px-1 text-center rounded'>Login</button>
          </div>
        </div>
      </div>

      <div className='bg-gradient-to-r from-blue-600 to-blue-950 rounded-xl text-center mt-6 py-8 '>
        <div className=' mt-6 '>
          <h2 className='font-extrabold text-3xl my-5'>Find Your Perfect Home</h2>
          <h4>Discover Houses and rooms for rent or sale in your desired locations</h4>
        </div>
        <div className='mt-5 flex justify-center'>
          <button onClick={() => navigate('/RentHouse')} className='!bg-white text-black mx-2'>
            Rent a house
          </button>
          <button className=' text-white mx-2'>
            Buy a House
          </button>
          <button className=' text-white mx-2'>
            Rent a Room
          </button>
        </div>
      </div>

      <div className='my-4 flex'>
        <div className='h-40 w-96 bg-[#FFFFFF] rounded-2xl mx-4 my-10 py-4 shadow-xl hover:scale-105 duration-300 hover:border-2 border-amber-700'>
          <HiOutlineHome className='text-blue-600 text-3xl mx-3 flex mb-2'/>
          <h3 className='text-black mx-3 font-bold mb-1 '>Rent a House</h3>
          <p className='!text-gray-700 mx-3 font-sans'>Find your dream rental home with our extensive listings and detailed property information</p>
        </div>
        <div className='h-40 w-96 bg-[#FFFFFF] rounded-2xl mx-4 my-10 py-4 shadow-xl hover:scale-105 duration-300 hover:border-2 border-purple-500'>
          <FaRegHospital className='text-blue-600 text-3xl mx-3 flex mb-2'/>
          <h3 className='text-black mx-3 font-bold mb-1'>Buy a House</h3>
          <p className='!text-gray-700 mx-3 font-sans'>Browse through our selection of houses for sale and find your perfect investment</p>
        </div>
        <div className='h-40 w-96 bg-[#FFFFFF] rounded-2xl mx-4 my-10 py-4 shadow-xl hover:scale-105 duration-300 hover:border-2 border-pink-800'>
          <IoKeyOutline className='text-blue-600 text-3xl mx-3 flex mb-2'/>
          <h3 className='text-black mx-3 font-bold mb-1'>Rent a Room</h3>
          <p className='!text-gray-700 mx-3 font-sans'>Looking for a single room? Find comfortable rooms in your preferred location.</p>
        </div>
      </div>
    </div>
  );
}
export default HomePage