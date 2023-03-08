import React, { useState } from 'react'
import RightSideChat from './RightSideChat'
import { AiOutlineSearch, AiOutlinePlusCircle, AiOutlineUsergroupAdd } from "react-icons/ai";
import { BiArrowBack, BiCommentDetail } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosArrowRoundBack } from "react-icons/io";

import Data from '../../Data';
import ChatHead from './ChatingScreen';


function HomeScreen() {

    const [nameChat, setnameChat] = useState([])
    const [buttonSearch, setbuttonSearch] = useState(false)
    const [ChatMobile, setChatMobile] = useState(false)
    const [ImageMobile, setImageMobile] = useState("");
    const [NameMobile, setNameMobile] = useState("")

    return (
        <>
            <div className='h-screen w-full mc flex justify-center items-center shadow-4xl '>
                <div className='h-[95%] xl:w-[80%] w-full flex '>


                    {/* Left Side Bar */}


                    <div className='md:w-[30%] w-full h-full bg-slate-600 '>
                        <div className='w-full h-full'>
                            <div className='w-full h-full overflow-hidden'>
                                <div className='w-full h-[110px] bg-red-900'>
                                    <div className='w-full h-[55%] lc flex'>
                                        <div className='w-1/3 h-full '>
                                            <div className='w-full h-full flex items-center ml-5'>
                                                <img src="/pp/1.gif" className='w-12 h-12 rounded-full' alt="" />
                                            </div>
                                        </div>
                                        <div className='w-2/3 h-full flex justify-end'>
                                            <div className='flex items-center text-slate-400'>
                                                <div className='relative group cursor-pointer'><AiOutlineUsergroupAdd className='mr-5 text-2xl' /><div className='absolute w-28 justify-center border border-slate-400 left-0 top-7 z-50 mc hidden group-hover:flex'>Comunication</div></div>
                                                <div className='relative group cursor-pointer'><AiOutlinePlusCircle className='mr-5 text-2xl' /><div className='absolute w-20 justify-center border border-slate-400 left-0 top-7 z-50 mc hidden group-hover:flex'>Status</div></div>
                                                <div className='relative group cursor-pointer'><BiCommentDetail className='mr-5 text-2xl' /><div className='absolute w-20 justify-center border border-slate-400 left-0 top-7 z-50 mc hidden group-hover:flex'>New Chat</div></div>
                                                <div className='relative group cursor-pointer'><BsThreeDotsVertical className='mr-5 text-2xl' /><div className='absolute w-12 justify-center border border-slate-400 left-[-10px] top-7 z-50 mc hidden group-hover:flex'>Menu</div></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-full h-[45%] flex justify-center items-center px-5 bg-black relative'>
                                        <input type="text" className='lc w-full h-[70%] rounded pl-10 outline-none text-white' placeholder='Search or start new chat' onFocus={() => { setbuttonSearch(true) }} onBlur={() => { setbuttonSearch(false) }} />
                                        {buttonSearch === true ? <BiArrowBack className='text-green-500 text-2xl absolute left-8 ease-in duration-1000' /> : <AiOutlineSearch className='text-slate-500 text-xl absolute left-8 ease-in duration-1000' />}
                                    </div>
                                </div>
                                <div className='w-full h-full mc overflow-scroll pb-24 LeftSideScroll'>
                                    {
                                        Data.map((data, ind) => {
                                            return (<> <div key={ind} className='w-full h-[70px] border-b border-slate-600 hover:bg-gray-600 cursor-pointer' onClick={()=>{setnameChat(data.chat) ; setImageMobile(data.image) ; setNameMobile(data.name)}}>
                                                <div className='w-full h-full flex' onClick={()=>{setChatMobile(true)}}>
                                                    <div className='w-2/3 h-full flex items-center px-5'>
                                                        <div className='w-12 h-12 '>
                                                            <img src={data.image} alt="" className='w-full h-full rounded-full' />
                                                        </div>
                                                        <div className='text-white ml-5'>
                                                            <h1 className='text-slate-200 text-lg'>{data.name}</h1>
                                                            <p className='text-slate-400 text-sm'>hell</p>
                                                        </div>
                                                    </div>
                                                    <div className='w-1/3 h-full '>

                                                    </div>
                                                </div>
                                            </div>
                                            </>)
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right Side Bar  */}
                    <div className='w-[70%] h-full hidden md:block'>
                        <RightSideChat nameChat={nameChat} />
                    </div>
                    <div className={ChatMobile ? "w-full h-full absolute top-0 duration-200 left-0 mc md:hidden" : "w-full h-full absolute top-0 left-[1000px] duration-300 mc md:hidden"}>
                        <div className='h-16 w-full lc flex'>
                            <div className='w-full h-full flex items-center pl-2'>
                                <IoIosArrowRoundBack className='text-4xl text-white' onClick={()=>{setChatMobile(false)}} />
                                <img src={ImageMobile} className='w-10 h-10 rounded-full ml-3' />
                                <div className='ml-5 font-semibold text-white'>
                                    {NameMobile}
                                </div>
                            </div>
                            <div className='h-full w-auto flex items-center pr-4'>
                                <BsThreeDotsVertical  className='text-2xl  text-white' />
                            </div>
                        </div>
                        <div className='w-full h-full'>
                            <RightSideChat nameChat={nameChat} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeScreen