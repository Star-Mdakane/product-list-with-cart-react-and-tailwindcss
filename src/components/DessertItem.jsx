import { useContext, useEffect, useState } from 'react'
import ActiveButton from './ActiveButton'
import AddItemButton from './AddItemButton';
import { GlobalContext } from '../contexts/GlobalContext';

const DessertItem = ({ dessert }) => {

    const [width, setWidth] = useState(window.innerWidth);
    const [isSelected, setSelected] = useState(false);
    const { addItemToList, removeItem } = useContext(GlobalContext);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    const handleAddItem = () => {
        setSelected(true);
    }



    const { image, name, category, price } = dessert;
    const isMobile = width < 640;
    const isTablet = width < 1024;
    const imageSrc = isMobile ? image.mobile : isTablet ? image.tablet : image.desktop;

    return (

        <li className={`w-full flex flex-col gap-4 group ${isSelected && 'isActive'}`}>
            <div className='relative mb-5.5'>
                <img src={imageSrc} className='h-53 lg:h-60 rounded-lg group-[.isActive]:border-2 border-[#C73B0F]' alt="waffle" />
                {isSelected ? <ActiveButton onAdd={() => addItemToList(dessert)} onDelete={() => removeItem({ ...dessert, id: dessert.id })} /> : <AddItemButton handleClick={handleAddItem} />}

            </div>
            <div className='flex flex-col'>
                <p className='text-[14px] leading-[auto] tracking-[0px] font-normal text-[#87635A]'>
                    {category}
                </p>
                <p className='text-[16px] text-[#260F08] leading-[auto] tracking-[0%] font-semibold'>
                    {name}
                </p>
                <p className='text-[16px] text-[#C73B0F] leading-[auto] tracking-[0%] font-semibold'>
                    ${price.toFixed(2)}
                </p>
            </div>
        </li>

    )
}

export default DessertItem