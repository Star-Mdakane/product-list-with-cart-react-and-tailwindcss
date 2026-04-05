import React from 'react'

const ModalListItems = () => {
    return (
        <>
            <li className='flex items-center justify-between pb-4 border-b border-rose-100'>
                <div className="flex gap-4">
                    <img src="../../assets/images/image-tiramisu-thumbnail.jpg" className='w-12 h-12' alt="tiramisu" />
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
                </div>

                <button type='button' aria-label='Remove item' className='w-5 h-5 rounded-full border border-[#AD8A85] flex items-center justify-center hover:border-[#260F08] group'>
                    <svg className='group-hover:stroke-[#260F08]' xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z" /></svg>
                </button>
            </li>
        </>
    )
}

export default ModalListItems