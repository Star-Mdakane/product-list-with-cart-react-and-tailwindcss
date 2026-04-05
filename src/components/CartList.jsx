import React from 'react'
import CartListItems from './CartListItems'

const CartList = () => {
    return (
        <ul className='flex flex-col gap-4'>
            <CartListItems />
        </ul>
    )
}

export default CartList