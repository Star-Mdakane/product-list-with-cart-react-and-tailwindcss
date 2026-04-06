import { createContext, useEffect, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

    const [data, setData] = useState([]);
    const [list, setList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/data.json");
                const data = await res.json();
                setData(data);
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
        setList((prev) => [...prev, item])
    };

    const removeItem = (id) => {
        setList(prev => prev.filter((item) => item.id !== id));
    }

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