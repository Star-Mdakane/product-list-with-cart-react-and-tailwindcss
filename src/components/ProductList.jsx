import DessertItem from './DessertItem';
import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

const ProductList = () => {

    const { data } = useContext(GlobalContext)

    return (
        <section id="productlist__container" className='flex flex-col col-span-2 gap-8'>
            <h1 className='text-[#260F08] text-[40px] leading-[120%] tracking-[0%] font-bold'>Desserts</h1>
            <ul className='grid md:grid-cols-3 gap-6 md:gap-8'>
                {data.map(dessert => (
                    <DessertItem key={dessert.name} dessert={{ ...dessert, id: dessert.id }} />
                ))}

            </ul>
        </section>
    )
}

export default ProductList