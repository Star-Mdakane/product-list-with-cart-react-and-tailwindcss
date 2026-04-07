import { createContext, useEffect, useState } from "react";
import { nanoid } from "nanoid";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

    const [data, setData] = useState([]);
    const [list, setList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/data.json");
                const data = await res.json();
                setData(data.map(item => ({ ...item, id: nanoid() })));
            } catch (error) {
                console.log('Error fetching data', error)
            }
        }

        fetchData();
    }, [])

    useEffect(() => {
        console.log('list updated', list);
    }, [list])

    const addItemToList = (item) => {
        const newItem = { ...item, id: nanoid() };
        setList(prev => [...prev, newItem]);
    };

    const removeItem = (itemToRemove) => {
        const itemInList = list.find(item => item.name === itemToRemove.name);
        if (itemInList) {
            setList(prev => prev.filter((item) => item.id !== itemInList.id));
        }
    };

    const value = {
        data,
        list,
        addItemToList,
        removeItem
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )

}

export { GlobalContext, GlobalProvider }