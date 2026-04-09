import { useContext } from 'react'
import ModalListItems from './ModalListItems'
import { GlobalContext } from '../contexts/GlobalContext';


const ModalList = () => {

    const { list, setList, uniqueArray } = useContext(GlobalContext);

    return (

        <ul className='flex flex-col gap-4'>
            {uniqueArray?.map(item => <ModalListItems key={item.id} item={item} list={list} setList={setList} />)}
        </ul>


    )
}

export default ModalList