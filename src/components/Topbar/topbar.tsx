import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaChevronLeft } from 'react-icons/fa'
import { BsList } from 'react-icons/bs'
import { FaChevronRight } from 'react-icons/fa'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/firebase/firebase'
import LogOut from '../Buttons/LogOut'
import { useSetRecoilState } from 'recoil'
import { authModelsState } from '@/atoms/AuthMoels'
import Timer from '../Timer/Timer'
type Props = {
	problemPage ?:  boolean;
}

function Topbar({problemPage}: Props) {
const [user] = useAuthState(auth);	
const setAuthMoedel = useSetRecoilState(authModelsState);
  return (
    <nav className='relative flex h-[50px] w-full shrink-0 items-center px-5 bg-gray-100 text-dark-gray-7'>
			<div className={`flex w-full items-center justify-between ${!problemPage ?"max-w-[1200px] mx-auto":""}`}>
				<Link href='/' className='h-[22px] flex-1'>
				<h1 className='text-2xl text-blue-500  hover:text-black' >LearningCode</h1>	
				</Link>

	    {problemPage &&(
			<div className='flex items-center gap-4 flex-1 justify-center'>
			<div
				className='flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer'
				
			>
				<FaChevronLeft />
			</div>
			<Link
				href='/'
				className='flex items-center gap-2 font-medium max-w-[170px] text-dark-gray-8 cursor-pointer'
			>
				<div>
					<BsList />
				</div>
				<p>Problem List</p>
			</Link>
			<div
				className='flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer'
				
			>
				<FaChevronRight />
			</div>
		</div>
		)}
					

				<div className='flex items-center space-x-4 flex-1 justify-end'>
					<div>
						<a
							href='https://www.buymeacoffee.com/burakorkmezz'
							target='_blank'
							rel='noreferrer'
							className='bg-gray py-1.5 px-3 cursor-pointer rounded text-blue-800 hover:text-black'
						>
							Premium
						</a>
					</div>
					{!user &&(
						<Link
							href='/auth'
							
						>
							<button className='bg-dark-fill-3 py-1 px-2 cursor-pointer rounded ' onClick={()=>{
								setAuthMoedel((prev) => ({...prev, isOpen:true, type:'Login'}));
							}}>Sign In</button>
						</Link>
					
					)}
					{problemPage && <Timer/>}
						{user &&(
						<div className='cursor-pointer group relative'>
							<Image src='/avatar.png' alt='Avatar' width={30} height={30} className='rounded-full' />
							<div
								className='absolute top-10 left-2/4 -translate-x-2/4  mx-auto bg-dark-layer-1 text-brand-orange p-2 rounded shadow-lg 
								z-40 group-hover:scale-100 scale-0 
								transition-all duration-300 ease-in-out'
							>
								<p className='text-sm'>{user.email}</p>
							</div>
						</div>
						)}
					{user && <LogOut/>}
				
				</div>
			</div>
		</nav>
  )
}

export default Topbar