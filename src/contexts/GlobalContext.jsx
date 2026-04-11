import { createContext, useEffect, useState } from "react";
import { nanoid } from "nanoid";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

    const [data, setData] = useState([]);
    const [list, setList] = useState([]);

    let data = { cached: true };

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

    const getUniqueValue = (value) => {
        if (!value) return 0;
        const nameToKeep = value.name;
        return list.filter(i => i.name === nameToKeep).length;
    };


    const uniqueArray = [...new Map(list.map(item => [item.name, item])).values()];

    const value = {
        data,
        list,
        setList,
        addItemToList,
        removeItem,
        uniqueArray,
        getUniqueValue
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )

}

export { GlobalContext, GlobalProvider }
