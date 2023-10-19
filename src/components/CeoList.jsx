import {useState, useEffect} from 'react'

export const CeoList = () => {
    const [ceoList, setCeoList] = useState([]);

    useEffect(() => {
        const url = 'http://127.0.0.1:8000/ceos/'
        const getList = async() => {
            const data = await fetch(url).then(response => response.json());
            console.log("Data", data);
            setCeoList(data);
        };
        getList();
    }, []);


    return (
        <>
        <ul>
            {ceoList?.map((ceo, index) => {
                return <li key ={index}>{ceo.name} - {ceo.first_year_active}</li>
            })}
        </ul>
        </>
    );
};

