import React, { useEffect, useState } from 'react'
import AddItemButton from './AddItemButton'
import ActiveButton from './ActiveButton'
import DessertItem from './DessertItem';

const ProductList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/data.json");
                const data = await res.json();
                setData(data);
                console.log(data);
            } catch (error) {
                console.log('Error fetching data', error)
            }
        }

        fetchData();
    }, [])

    console.log(data);

    return (
        <section id="productlist__container" className='flex flex-col col-span-2 gap-8'>
            <h1 className='text-[#260F08] text-[40px] leading-[120%] tracking-[0%] font-bold'>Desserts</h1>
            <ul className='grid md:grid-cols-3 gap-6 md:gap-8'>
                {data.map(dessert => (
                    <DessertItem key={dessert.name} dessert={dessert} />
                ))}

            </ul>
        </section>
    )
}

export default ProductList