import React from 'react'
import EmptyCart from './EmptyCart'

const Cart = () => {
    return (
        <section className='bg-white p-6 flex flex-col gap-6 col-start-1 col-end-3 w-81.7 lg:col-start-3 lg:w-[384px] rounded-xl'>
            {/* <EmptyCart /> */}
            <h2 className='text-[24px] text-[#C73B0F] font-bold leading-[auto] tracking-[0%]'>
                Your Cart (7)
            </h2>
            <ul className='flex flex-col gap-4'>
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
            </ul>
            <div className="flex justify-between items-center">
                <p className='text-[#260F08] text-[14px] leading-[auto] tracking-[0px] font-normal'>
                    Order Total
                </p>
                <p className='text-[24px] text-[#260F08] font-bold leading-[auto] tracking-[0%]'>
                    $46.50
                </p>
            </div>
            <div className="flex gap-2 py-4 px-4">
                <img src="../../assets/images/icon-carbon-neutral.svg" className='w-5 h-5' alt="c neutral" />
                <p className='text-[#260F08] text-[14px] leading-[auto] tracking-[0px] font-normal'>
                    This is a <span className='font-bold'>carbon-neutral</span> delivery
                </p>
            </div>
            <button id='active' type="button" className='w-full h-11 p-3 rounded-full  flex items-center justify-center bg-[#C73B0F] text-[16px] text-white leading-[auto] tracking-[0%] font-semibold'>
                Cornfirm Order
            </button>
        </section>
    )
}

export default Cart