import React from 'react'

const CartListItems = () => {
    return (
        <>
            <li className='flex items-center justify-between pb-4 border-b border-rose-100'>
                <div className='flex flex-col gap-1'>
                    <p className='text-[#260F08] text-[14px] leading-[auto] tracking-[0px] font-bold'>
                        Classic Tiramisu
                    </p>
                    <div className='flex items-center gap-2'>
                        <p className='text-[14px] leading-[auto] tracking-[0px] font-bold text-[#C73B0F]'>1x</p>
                        <p className='text-[14px] leading-[auto] tracking-[0px] font-regular text-[#87635A]'>@ $5.50</p>
                        <p className='text-[14px] leading-[auto] tracking-[0px] font-regular text-[#87635A]'>$5.50</p>
                    </div>
                </div>
                <div className='w-5 h-5 rounded-full border border-[#AD8A85] flex items-center justify-center'>
                    <img src="../../assets/images/icon-remove-item.svg" alt="remove" />
                </div>
            </li>
            <li className='flex items-center justify-between pb-4 border-b border-rose-100'>
                <div className='flex flex-col gap-1'>
                    <p className='text-[#260F08] text-[14px] leading-[auto] tracking-[0px] font-bold'>
                        Classic Tiramisu
                    </p>
                    <div className='flex items-center gap-2'>
                        <p className='text-[14px] leading-[auto] tracking-[0px] font-bold text-[#C73B0F]'>1x</p>
                        <p className='text-[14px] leading-[auto] tracking-[0px] font-regular text-[#87635A]'>@ $5.50</p>
                        <p className='text-[14px] leading-[auto] tracking-[0px] font-regular text-[#87635A]'>$5.50</p>
                    </div>
                </div>
                <div className='w-5 h-5 rounded-full border border-[#AD8A85] flex items-center justify-center'>
                    <img src="../../assets/images/icon-remove-item.svg" alt="remove" />
                </div>
            </li>
            <li className='flex items-center justify-between pb-4 border-b border-rose-100'>
                <div className='flex flex-col gap-1'>
                    <p className='text-[#260F08] text-[14px] leading-[auto] tracking-[0px] font-bold'>
                        Classic Tiramisu
                    </p>
                    <div className='flex items-center gap-2'>
                        <p className='text-[14px] leading-[auto] tracking-[0px] font-bold text-[#C73B0F]'>1x</p>
                        <p className='text-[14px] leading-[auto] tracking-[0px] font-regular text-[#87635A]'>@ $5.50</p>
                        <p className='text-[14px] leading-[auto] tracking-[0px] font-regular text-[#87635A]'>$5.50</p>
                    </div>
                </div>
                <div className='w-5 h-5 rounded-full border border-[#AD8A85] flex items-center justify-center'>
                    <img src="../../assets/images/icon-remove-item.svg" alt="remove" />
                </div>
            </li>
        </>
    )
}

export default CartListItems