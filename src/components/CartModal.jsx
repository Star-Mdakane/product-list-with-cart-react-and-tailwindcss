import React from 'react'
import CartListItems from './CartListItems'
import OrderTotal from './OrderTotal'

const CartModal = () => {
    return (
        <div className='z-10 absolute w-screen min-h-screen bg-black/50 left-0 top-0 md:flex items-center justify-center'>
            <div className='bg-white w-93.75 md:w-172 lg:w-148 mx-auto mt-23.75 md:mt-0 flex flex-col rounded-t-xl md:rounded-xl pt-10 px-6 pb-6 gap-8'>
                <div className='flex flex-col gap-6 items-start'>
                    <img src="../../assets/images/icon-order-confirmed.svg" alt="confirmed" />
                    <div className="flex-flex-col">
                        <h1 className='text-[#260F08] text-[40px] leading-[120%] tracking-[0%] font-bold'>
                            Order Confirmed
                        </h1>
                        <p className='text-[#260F08] text-[14px] leading-[auto] tracking-[0px] font-normal'>
                            We hope you enjoy your food!
                        </p>
                    </div>
                </div>
                <ul className='flex flex-col gap-4'>
                    <CartListItems />
                </ul>
                <OrderTotal />
                <button id='active' type="button" className='w-full h-11 p-3 rounded-full  flex items-center justify-center bg-[#C73B0F] text-[16px] text-white leading-[auto] tracking-[0%] font-semibold'>
                    Start New Order
                </button>

            </div>

        </div>
    )
}

export default CartModal