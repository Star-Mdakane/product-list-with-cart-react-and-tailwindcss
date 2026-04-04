import React from 'react'

const ProductList = () => {
    return (
        <section id="productlist__container" className='flex flex-col col-span-2 gap-8'>
            <h1 className='text-[#260F08] text-[40px] leading-[120%] tracking-[0%] font-bold'>Desserts</h1>
            <ul className='grid md:grid-cols-3 gap-6 md:gap-8'>
                <li className='w-full flex flex-col gap-4'>
                    <div className='relative mb-5.5'>
                        <img src="../../assets/images/image-waffle-mobile.jpg" className='h-53 lg:h-60 rounded-lg' alt="waffle" />
                        <button type="button" className='w-40 h-11 p-3 gap-2 bg-white border border-rose-400 rounded-full absolute left-1/2 translate-x-[-50%] bottom-0 translate-y-1/2 flex items-center justify-center'>
                            <img src="../../assets/images/icon-add-to-cart.svg" alt="cart" />
                            <p className='text-[14px] text-[#260F08] font-semibold leading-[auto] tracking-[0%]'>
                                Add To Cart
                            </p>
                        </button>
                        {/* <button id='active' type="button" className='w-40 h-11 p-3 rounded-full absolute left-1/2 translate-x-[-50%] bottom-0 translate-y-1/2 flex items-center justify-between bg-[#C73B0F]'>
                            <div className='w-5 h-5 rounded-full border border-white flex items-center justify-center'>
                                <img src="../../assets/images/icon-decrement-quantity.svg" alt="decrement" />
                            </div>
                            <input type="text" placeholder='0' className='w-5 text-[14px] bg-[#C73B0F] text-white font-semibold text-center' />
                            <div className='w-5 h-5 rounded-full border border-white flex items-center justify-center' >
                                <img src="../../assets/images/icon-increment-quantity.svg" alt="increment" />
                            </div>
                        </button> */}
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-[14px] leading-[auto] tracking-[0px] font-normal text-[#87635A]'>
                            Waffle
                        </p>
                        <p className='text-[16px] text-[#260F08] leading-[auto] tracking-[0%] font-semibold'>
                            Waffle with Berries
                        </p>
                        <p className='text-[16px] text-[#C73B0F] leading-[auto] tracking-[0%] font-semibold'>
                            $6.50
                        </p>
                    </div>
                </li>
                <li className='w-full flex flex-col gap-4'>
                    <div className='relative mb-5.5'>
                        <img src="../../assets/images/image-creme-brulee-mobile.jpg" className='h-53 lg:h-60 rounded-lg' alt="waffle" />
                        <button type="button" className='w-40 h-11 p-3 gap-2 bg-white border border-rose-400 rounded-full absolute left-1/2 translate-x-[-50%] bottom-0 translate-y-1/2 flex items-center justify-center'>
                            <img src="../../assets/images/icon-add-to-cart.svg" alt="cart" />
                            <p className='text-[14px] text-[#260F08] font-semibold leading-[auto] tracking-[0%]'>
                                Add To Cart
                            </p>
                        </button>
                        {/* <button id='active' type="button" className='w-40 h-11 p-3 rounded-full absolute left-1/2 translate-x-[-50%] bottom-0 translate-y-1/2 flex items-center justify-between bg-[#C73B0F]'>
                            <div className='w-5 h-5 rounded-full border border-white flex items-center justify-center'>
                                <img src="../../assets/images/icon-decrement-quantity.svg" alt="decrement" />
                            </div>
                            <input type="text" placeholder='0' className='w-5 text-[14px] bg-[#C73B0F] text-white font-semibold text-center' />
                            <div className='w-5 h-5 rounded-full border border-white flex items-center justify-center' >
                                <img src="../../assets/images/icon-increment-quantity.svg" alt="increment" />
                            </div>
                        </button> */}
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-[14px] leading-[auto] tracking-[0px] font-normal text-[#87635A]'>
                            Crème Brûlée
                        </p>
                        <p className='text-[16px] text-[#260F08] leading-[auto] tracking-[0%] font-semibold'>
                            Vanilla Bean Crème Brûlée
                        </p>
                        <p className='text-[16px] text-[#C73B0F] leading-[auto] tracking-[0%] font-semibold'>
                            $7.00
                        </p>
                    </div>
                </li>
                <li className='w-full flex flex-col gap-4'>
                    <div className='relative mb-5.5'>
                        <img src="../../assets/images/image-macaron-mobile.jpg" className='h-53 lg:h-60 rounded-lg' alt="waffle" />
                        <button type="button" className='w-40 h-11 p-3 gap-2 bg-white border border-rose-400 rounded-full absolute left-1/2 translate-x-[-50%] bottom-0 translate-y-1/2 flex items-center justify-center'>
                            <img src="../../assets/images/icon-add-to-cart.svg" alt="cart" />
                            <p className='text-[14px] text-[#260F08] font-semibold leading-[auto] tracking-[0%]'>
                                Add To Cart
                            </p>
                        </button>
                        {/* <button id='active' type="button" className='w-40 h-11 p-3 rounded-full absolute left-1/2 translate-x-[-50%] bottom-0 translate-y-1/2 flex items-center justify-between bg-[#C73B0F]'>
                            <div className='w-5 h-5 rounded-full border border-white flex items-center justify-center'>
                                <img src="../../assets/images/icon-decrement-quantity.svg" alt="decrement" />
                            </div>
                            <input type="text" placeholder='0' className='w-5 text-[14px] bg-[#C73B0F] text-white font-semibold text-center' />
                            <div className='w-5 h-5 rounded-full border border-white flex items-center justify-center' >
                                <img src="../../assets/images/icon-increment-quantity.svg" alt="increment" />
                            </div>
                        </button> */}
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-[14px] leading-[auto] tracking-[0px] font-normal text-[#87635A]'>
                            Macaron
                        </p>
                        <p className='text-[16px] text-[#260F08] leading-[auto] tracking-[0%] font-semibold'>
                            Macaron Mix of Five
                        </p>
                        <p className='text-[16px] text-[#C73B0F] leading-[auto] tracking-[0%] font-semibold'>
                            $8.00
                        </p>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default ProductList