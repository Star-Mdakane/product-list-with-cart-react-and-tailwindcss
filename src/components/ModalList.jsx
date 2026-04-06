import React, { useEffect, useState } from 'react'
import ModalListItems from './ModalListItems'

const ModalList = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("../../data.json");
                const data = await res.json();
                setData(data);
                console.log(data);
            } catch (error) {
                console.log('Error fetching data', error)
            }
        }

        fetchData();
    }, [])

    return (
        <ul className='flex flex-col gap-4'>
            {/* Make an array to add items */}
            <ModalListItems data={data} />
        </ul>
    )
}

export default ModalList