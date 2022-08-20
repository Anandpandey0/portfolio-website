
import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const FrontPage = () => {
  return (
    <div id='home' className='w-full h-screen text-center resposive-text '>
      <div className='max-w-[1240px] w-full  h-full mx-auto p-2 flex flex-row  items-center justify-evenly border-solid border-2 border-black overflow-hidden '>
       <div className="left mx-2 w-2/3 h-auto border-solid border-2 border-red-500 flex flex-col overflow-hidden ">
        <h2 className='text-blue-500 border-solid border-2 border-blue-500  h-auto overflow-hidden'>Hi, I'm Anand Pandey </h2>
        <div className=' mt-10 mx-5'>Hi! I am Anand Pandey from Greater Noida, Uttar Pradesh. I am a Final year Computer Science Engineering Student . I am passionate about writing clean, efficient and optimized code.</div>
       </div>
       <div className="right w-1/3 border-solid border-2 border-green-500 overflow-hidden mx-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur voluptate quas et.</div>
        </div>
      </div>
  );
};

export default FrontPage;
