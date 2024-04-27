import { auth } from '@/firebase/firebase';
import React from 'react'
import { useSignOut } from 'react-firebase-hooks/auth';
import { FiLogOut } from 'react-icons/fi'

type Props = {}

function LogOut({}: Props) {
  const [signOut, loading, error] = useSignOut(auth);
  const handleClick =()=>{
 signOut();
  }
  return (
    <button className=' bg-slate py=1.5 px-3 cursor-pointer text-blue-500' onClick={handleClick}>
        <FiLogOut/>
    </button>
  )
}

export default LogOut