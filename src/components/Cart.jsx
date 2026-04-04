import React from 'react'
import EmptyCart from './EmptyCart'
import LoadedCart from './LoadedCart'

const Cart = () => {
    return (
        <section className='bg-white p-6 flex flex-col gap-6 col-start-1 col-end-3 w-81.7 lg:col-start-3 lg:w-[384px] rounded-xl'>
            {/* <EmptyCart /> */}
            <LoadedCart />
        </section>
    )
}

export default Cart