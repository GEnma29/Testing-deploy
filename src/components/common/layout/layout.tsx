import React from 'react'
import { Logo } from '../../../icons'
import name from '../../../assets/name.svg'


const Layout: React.FC<{
    form: React.ReactNode
    element: React.ReactNode
}> = ({ form, element }) => {
    return (
        <div className='flex p-2 flex-col w-full h-full'>
            <div className='flex relative items-center justify-center w-full lg:items-center lg:justify-start'>
                <Logo className='flex mr-3' />
                <img className='flex' src={name} />
            </div>
            <div className='flex w-full flex-col sm:justify-center sm:items-center lg:flex-row h-full'>
                <div className='flex w-full h-full items-center justify-center'>{form}</div>
                {element}
            </div>
        </div>
    )
}

export default Layout