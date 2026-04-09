import React, { useContext } from 'react'
import EmptyCart from './EmptyCart'
import LoadedCart from './LoadedCart'
import { GlobalContext } from '../contexts/GlobalContext'

const Cart = ({ setOpenModal }) => {

    const { list } = useContext(GlobalContext);



    return (
        <section className='bg-white p-6 flex flex-col gap-6 col-start-1 col-end-3 w-81.7 lg:col-start-3 lg:w-[384px] rounded-xl'>
            {list.length === 0 ? <EmptyCart /> : <LoadedCart setOpenModal={setOpenModal} />}
        </section>
    )
}

export default Cart;