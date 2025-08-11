import React from 'react'
import 'remixicon/fonts/remixicon.css'
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { PiThreadsLogoThin } from "react-icons/pi";
import { LuUserPlus } from "react-icons/lu";
import { AiOutlinePlus } from "react-icons/ai";
import { BiSolidGrid } from "react-icons/bi";
import { LuSquareUser } from "react-icons/lu";
const Main = () => {

    const photos = [
        {img:'https://images.unsplash.com/photo-1649848726244-2743c909d2ab?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
        {img:'https://images.unsplash.com/photo-1675262205411-07c9473ab538?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
        {img:'https://images.unsplash.com/photo-1701303832184-9307995fd772?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
        {img:'https://images.unsplash.com/photo-1614483573119-1e3b2be05565?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
        {img:'https://images.unsplash.com/photo-1581290647908-45af335c316d?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
        {img:'https://images.unsplash.com/photo-1581290647908-45af335c316d?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
        {img:'https://images.unsplash.com/photo-1581290647908-45af335c316d?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
        {img:'https://images.unsplash.com/photo-1701303832184-9307995fd772?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
        {img:'https://images.unsplash.com/photo-1701303832184-9307995fd772?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    ]
  return (
    <div className='h-screen w-full text-white bg-black'>
     <div className="nav flex justify-between text-2xl items-center list-none px-4 h-12 border-b-2 border-[#222]">
        <li><i class="ri-settings-2-line  text-white"></i></li>
        <li className='text-lg'>tanishqsonwane17</li>
        <li><i class="ri-threads-fill  text-white"></i></li>
     </div>

     <div className=' w-full flex items-center '>
        <div className='px-6'>
       <div className='h-24 w-24 overflow-hidden rounded-full mt-10'>
        <img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className='text-xl font-semibold mx- mt-2 flex items-center'><PiThreadsLogoThin/>Tanishq </div>
        </div>
        <div className='flex flex-col gap-3  w-[65%] px-2 '>
            <h1 className='text-xl font-semibold'>Tanishq Sonwane <RiVerifiedBadgeFill className='text-blue-500 inline-block' /></h1>
            <div className='flex justify-between'>
            <div>
                <h5 className='text-xl font-semibold' >5</h5>
                <p className='text-lg'>Posts</p>
            </div>
            <div>
                <h5 className='text-xl font-semibold' >879</h5>
                <p className='text-lg'>Followers</p>
            </div>
            <div>
                <h5 className='text-xl font-semibold' >231</h5>
                <p className='text-lg'>Following</p>
            </div>
            </div>
        </div>
     </div>
     <div className=' mt-8 w-full  flex items-center px-4 justify-between'>
        <div className='w-[45%] h-8 rounded-xl bg-[#3838389c] px-4 flex justify-center items-center'>Edit Profile</div>
        <div className='w-[45%] h-8 rounded-xl bg-[#3838389c] px-4 flex justify-center items-center'>Share Profile</div>
        <div ><LuUserPlus className='inline-block text-xl ' /></div>
     </div>
     <div className=' w-full mt-8 flex  items-center gap-5 px-2'>
       <div className='h-20 bg-black w-20 flex justify-center items-center rounded-full border'>
        <AiOutlinePlus className='text-3xl' />
       </div>
              <div className='h-20 bg-black p-1 w-20 overflow-hidden flex justify-center items-center rounded-full border'>
                <img className='h-full w-full rounded-full object-cover' src="https://images.unsplash.com/photo-1509909756405-be0199881695?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>
              <div className='h-20 bg-black p-1 w-20 overflow-hidden flex justify-center items-center rounded-full border'>
                <img className='h-full w-full rounded-full object-cover' src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>
              <div className='h-20 bg-black p-1 w-20 overflow-hidden flex justify-center items-center rounded-full border'>
                <img className='h-full w-full rounded-full object-cover' src="https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>
     </div>

     <div className=' w-full  mt-8'>
        <div className=' w-full flex justify-between  px-4'>
            <div className='h-24 w-24 flex justify-center items-center list-none rounded-full'>
              <li className='text-4xl   text-gray-400'><BiSolidGrid/></li>
            </div>
            <div className='h-24 w-24 flex justify-center items-center list-none rounded-full'>
            <li><img className='h-full w-full rounded-full object-cover' src="https://i.pinimg.com/1200x/fe/23/cf/fe23cfb9482a5f56dfe5e1766179f24d.jpg" alt="" /></li>
            </div>
            <div className='h-24 w-24 flex justify-center items-center list-none rounded-full'>
            <li className='text-4xl text-gray-300'><LuSquareUser/></li>
            </div>
        </div>
      <div className="grid grid-cols-3 gap-1 ">
             {photos.map((item,index)=>{
                return(
                    <div key={index} className="aspect-square bg-blue-300">
                       <img className='h-full w-full  object-cover' src={item.img} alt="" />
                    </div>
                )
             })}
      </div>
     </div>
    </div>
  )
}

export default Main