import { GlobalContext } from '../contexts/GlobalContext';
import { useContext } from 'react';
import CartListItems from './CartListItems';


const CartList = () => {

    const { list, setList } = useContext(GlobalContext);

    const uniqueArray = [...new Map(list.map(item => [item.name, item])).values()];


    return (
        <ul className='flex flex-col gap-4'>
            {uniqueArray?.map(item => <CartListItems key={item.id} item={item} list={list} setList={setList} />)}
        </ul>
    )
}

export default CartList