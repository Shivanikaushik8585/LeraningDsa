import React from 'react'
import Link from 'next/link'
import { useSetRecoilState } from 'recoil';
import { authModelsState } from '@/atoms/AuthMoels';

interface NavProps {
  
}

const Nav = (props: NavProps) => {
  const setAuthModels = useSetRecoilState(authModelsState);
  const handleClick =()=>{
    setAuthModels((prev)=>({...prev ,isOpen:true}))
  }
  return(
    
    <div className='flex items-center justify-between sm:px-12 px-2 md:px-24'>
    <Link href='/' className='flex items-center justify-center h-20'>
      <h1 className='text-2xl text-blue-500  hover:text-black' >LearningCode</h1>
       </Link>
    <div className='flex items-center'>
      <button className='bg-blue-500 text-white px-2 py-2   sm:px-4 rounded-md text-sm font-medium hover:blue hover:bg-white hover:border-3 hover:border-blue:500 hover:text-blue-300 transparent transition duration-300 ease-in-out' onClick={handleClick}>Sign In</button>
      </div> 
      
      </div>
);
}

export default Nav;