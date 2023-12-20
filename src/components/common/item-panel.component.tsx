import React from 'react'

const ItemPanel: React.FC<{
    icon: React.ReactNode;
    status: boolean
    title: string;
    description: string;
    onClick?: () => void;
}> = ({ icon, title, description, status, onClick }) => {
    return (
        <div onClick={onClick} className='flex cursor-pointer flex-col justify-center items-center'>
            <div className='flex relative justify-center items-center flex-col bg-primary-300 rounded-full w-[5rem] h-[5rem]  lg:w-[8.75rem] lg:h-[8.75rem]'>
                {icon}
                <span className={`absolute right-0 top-6 block h-4 w-4 rounded-full ring-2 ring-white ${status ? 'bg-green' : 'bg-red-500'}`} />
            </div>
            <h2 className='flex '>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default ItemPanel