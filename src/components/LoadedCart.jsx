import React from 'react'
import CartListItems from './CartListItems'

const LoadedCart = () => {
    return (
        <>
            <h2 className='text-[24px] text-[#C73B0F] font-bold leading-[auto] tracking-[0%]'>
                Your Cart (7)
            </h2>
            <ul className='flex flex-col gap-4'>
                <CartListItems />
            </ul>
            <div className="flex justify-between items-center">
                <p className='text-[#260F08] text-[14px] leading-[auto] tracking-[0px] font-normal'>
                    Order Total
                </p>
                <p className='text-[24px] text-[#260F08] font-bold leading-[auto] tracking-[0%]'>
                    $46.50
                </p>
            </div>
            <div className="flex gap-2 py-4 px-4 bg-[#FCF8F6] rounded-lg justify-center">
                <img src="../../assets/images/icon-carbon-neutral.svg" className='w-5 h-5' alt="c neutral" />
                <p className='text-[#260F08] text-[14px] leading-[auto] tracking-[0px] font-normal'>
                    This is a <span className='font-bold'>carbon-neutral</span> delivery
                </p>
            </div>
            <button id='active' type="button" className='w-full h-11 p-3 rounded-full  flex items-center justify-center bg-[#C73B0F] text-[16px] text-white leading-[auto] tracking-[0%] font-semibold'>
                Cornfirm Order
            </button>
        </>
    )
}

export default LoadedCart