import React from 'react'

const AddItemButton = () => {
    return (
        <button type="button" aria-label='Add to cart' className='w-40 h-11 p-3 gap-2 bg-white border border-[#AD8A85] hover:border-[#C73B0F] rounded-full absolute left-1/2 translate-x-[-50%] bottom-0 translate-y-1/2 flex items-center justify-center cursor-pointer group'>
            <img src="../../assets/images/icon-add-to-cart.svg" alt="cart" />
            <p className='text-[14px] text-[#260F08] font-semibold leading-[auto] tracking-[0%] group-hover:text-[#C73B0F]'>
                Add To Cart
            </p>
        </button>
    )
}

export default AddItemButton