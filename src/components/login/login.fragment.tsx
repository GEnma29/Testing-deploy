import React from 'react'
import sally from '../../assets/Saly-10.svg'

const LoginFragment: React.FC = () => {
    return (
        <div className='flex flex-col items-center fixed top-[3.5rem] rounded-2xl w-[37rem] h-[37rem] p-4  bg-primary-300'>
            <img src={sally} alt="sally" className='flex w-[26rem] h-[26rem] object-cover' />
            <div className='flex mt-14 flex-col justify-start w-full'>
                <h2 className='flex text-white text-3xl'>Dashboard</h2>
                <h2 className='flex text-white font-bold text-3xl'>ShowMaster</h2>
            </div>
        </div>
    )
}

export default LoginFragment