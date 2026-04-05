import React, { useEffect, useState } from 'react'
import ActiveButton from './ActiveButton'
import AddItemButton from './AddItemButton';

const DessertItem = ({ dessert }) => {

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    const { image, name, category, price } = dessert;

    const isMobile = width < 640;
    const isTablet = width < 1024;

    console.log(image);

    return (

        <li className='w-full flex flex-col gap-4 group'>
            <div className='relative mb-5.5'>
                <img src={isMobile ? image.mobile : isTablet ? image.tablet : image.desktop} className='h-53 lg:h-60 rounded-lg group-[.isActive]:border-2 border-[#C73B0F]' alt="waffle" />
                <AddItemButton />
                {/* <ActiveButton /> */}
            </div>
            <div className='flex flex-col'>
                <p className='text-[14px] leading-[auto] tracking-[0px] font-normal text-[#87635A]'>
                    {category}
                </p>
                <p className='text-[16px] text-[#260F08] leading-[auto] tracking-[0%] font-semibold'>
                    {name}
                </p>
                <p className='text-[16px] text-[#C73B0F] leading-[auto] tracking-[0%] font-semibold'>
                    ${price.toFixed(2)}
                </p>
            </div>
        </li>

    )
}

export default DessertItem