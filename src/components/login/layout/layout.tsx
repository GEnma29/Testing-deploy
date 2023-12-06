import React from 'react'
import { Logo } from '../../../icons'
import name from '../../../assets/name.svg'


const Layout: React.FC<{
    form: React.ReactNode
    element: React.ReactNode
}> = ({ form, element }) => {
    return (
        <div className='flex flex-col w-full h-full'>
            <div className='flex relative w-full items-center justify-start'>
                <Logo className='flex mr-3' />
                <img className='flex' src={name} />
            </div>
            <div className='flex flex-row h-full'>
                <div className='flex w-full h-full items-center justify-center'>{form}</div>
                <div className='flex w-full h-full'>{element}</div>
            </div>
        </div>
    )
}

export default Layout