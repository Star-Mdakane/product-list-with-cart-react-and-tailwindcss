import { createContext, useEffect, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

    const [data, setData] = useState([])

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

    const value = {
        data
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )

}

export { GlobalContext, GlobalProvider }