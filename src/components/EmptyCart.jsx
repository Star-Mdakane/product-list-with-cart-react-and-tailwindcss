import React from 'react'

const EmptyCart = () => {
    return (
        <div>
            <h2 className='text-[24px] text-[#C73B0F] font-bold leading-[auto] tracking-[0%]'>
                Your Cart (0)
            </h2>
            <div className='flex flex-col gap-4 py-4 items-center'>
                <img src="../../assets/images/illustration-empty-cart.svg" className='w-32 h-32' alt="empty cart" />
                <p className='text-[14px] leading-[auto] tracking-[0px] font-bold text-[#87635A]'>
                    Your added items will appear here
                </p>
            </div>
        </div>
    )
}

export default EmptyCart