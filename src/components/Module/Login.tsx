import { authModelsState } from '@/atoms/AuthMoels'
import React, { useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

type Props = {}

function Login({}: Props) {
  const setAuthModels = useSetRecoilState(authModelsState);
  const handleClick =(type:'Login'|'register'|'forgetPassword') =>{
    setAuthModels((prev)=>({...prev ,type}))
  }
  const router = useRouter();
  const[inputs,setInput] = useState({email:" " ,password:" "})
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput((prev) => ({...prev , [e.target.name]: e.target.value }));
	};
  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
    if(!inputs.email || !inputs.password){
      return alert("please fill all field");
    }
    try{
     const newUser = await signInWithEmailAndPassword(inputs.email,inputs.password);
     if(!newUser) return;
     router.push("/");
     console.log("sign up")
     
    }catch(error:any){
      toast.error(error.message, { position: "top-center", autoClose: 3000, theme: "dark" });
    }
  }
  useEffect(() =>{
    if (error) toast.error(error.message, { position: "top-center", autoClose: 3000, theme: "dark" });
  },[error]);
  return (
    <form className='space-y-6 px-6 py-4' onSubmit={handleRegister}>
    <h3 className='text-xl font-medium text-white'> Sign in LearningCode</h3>
    <div>
      <label htmlFor='email' className='text-sm font-medium block mb-2 text-gray-300'>
        Email
      </label>
      <input
        onChange={handleChangeInput}
        type='email'
        name='email'
        id='email'
        className='
      border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
      bg-gray-600 border-gray-500 placeholder-gray-400 text-white
  '
        placeholder='name@company.com'
      />
    </div>
    <div>
    <label htmlFor='password'  className='text-sm font-medium block mb-2 text-gray-300'>
        Password
      </label>
      <input
        onChange={handleChangeInput}
        type='password'
        name='password'
        id='password'
        className='
      border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
      bg-gray-600 border-gray-500 placeholder-gray-400 text-white
  '
        placeholder='*******'
      />
    </div>
    
    <button type='submit' className='bg-blue-500 text-white px-2 py-2   sm:px-4 rounded-md text-sm font-medium hover:blue hover:bg-white hover:border-3 hover:border-blue:500 hover:text-blue-300 transparent transition duration-300 ease-in-out' >{loading ? "Loading..." : "Login"}</button>
   <button className='flex w-full justify-end'>
    <a href="#" className='text-sm block text-blue-300 hover:underline w-full text-right ' onClick={()=> handleClick('forgetPassword')}> Forget Password</a>
   </button>
   <div className='text-sm font-medium text-gray-500'>
    Not Register?
    <a href="#" className='text-gray-300 hover:underline' onClick={()=> handleClick('register')}>Creat account</a>
   </div>
  </form>
   
  )
}

export default Login