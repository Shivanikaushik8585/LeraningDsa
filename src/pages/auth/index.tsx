import { authModelsState } from '@/atoms/AuthMoels'
import AuthModul from '@/components/Module/AuthModul'
import Navbar from '@/components/Navbar'
import React, { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { useRouter } from 'next/router'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/firebase/firebase'
type AuthProps ={
    
}

const Index = (props: AuthProps) => {
    const authModal = useRecoilValue(authModelsState);
	const [user, loading, error] = useAuthState(auth);
	const [pageLoading, setPageLoading] = useState(true);
	const router = useRouter();

	useEffect(() => {
		if (user) router.push("/");
		if (!loading && !user) setPageLoading(false);
	}, [user, router, loading]);

	if (pageLoading) return null;

    return (
        <div className='bg-gradient-to-b from-gray-300 to-black  h-screen relative'>
            <div className='max-w-7xl mx-auto'>

            <Navbar/>
            
            <div className='flex items-center justify-center h-[calc(100vh-5rem pointer-event-none select-none'>
        <img src="l.jpg" alt="home img"/>
      </div>
     {authModal.isOpen && <AuthModul/>}
        </div>
        </div>
    )
}

export default Index
