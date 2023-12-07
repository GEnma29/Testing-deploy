import React from 'react'
import sally from '../../assets/Saly-10.svg'

const LoginFragment: React.FC = () => {
    return (
        <div className='flex w-full h-full'>
            <div className='hidden lg:flex flex-col items-center fixed top-[3.5rem] rounded-2xl w-[37rem] h-[37rem] p-4  bg-primary-300'>
                <img src={sally} alt="sally" className='flex w-[26rem] h-[26rem] object-cover' />
                <div className='flex mt-14 flex-col justify-start w-full'>
                    <h2 className='flex text-white text-3xl'>Dashboard</h2>
                    <h2 className='flex text-white font-bold text-3xl'>ShowMaster</h2>
                </div>
            </div>
            <div className='flex w-full flex-col items-center justify-center lg:hidden'>
                <img src={sally} alt="sally" className='flex  w-[13rem] h-[13rem]  object-cover' />
                <div className='flex justify-center items-center w-full'>
                    <h2 className='flex text-primary-300 text-3xl'>Dashboard</h2>
                    <h2 className='flex text-primary-300 font-bold text-3xl'>ShowMaster</h2>
                </div>
            </div>
        </div>
    )
}

export default LoginFragment