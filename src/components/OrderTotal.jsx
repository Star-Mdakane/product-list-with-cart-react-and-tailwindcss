import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext'

const OrderTotal = () => {

    const { list } = useContext(GlobalContext);
    const price = list.map(item => item.price)
    const total = price.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (
        <div className="flex justify-between items-center">
            <p className='text-[#260F08] text-[14px] leading-[auto] tracking-[0px] font-normal'>
                Order Total
            </p>
            <p className='text-[24px] text-[#260F08] font-bold leading-[auto] tracking-[0%]'>
                ${total}
            </p>
        </div>
    )
}

export default OrderTotal