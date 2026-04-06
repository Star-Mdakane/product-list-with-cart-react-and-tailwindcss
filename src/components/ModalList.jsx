import { useContext } from 'react'
import ModalListItems from './ModalListItems'
import { GlobalContext } from '../contexts/GlobalContext';

const ModalList = () => {
    const { data } = useContext(GlobalContext)

    return (

        <ul className='flex flex-col gap-4'>
            {/* Make an array to add items */}
            <ModalListItems data={data} />
        </ul>


    )
}

export default ModalList