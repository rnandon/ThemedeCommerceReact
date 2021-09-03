import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useSearch = (searchTerm) => {
    const [data, setData] = useState({});
    const [results, setResults] = useState({});
    useEffect(() => {
        if (data.data) {
            setResults(data.data);
        }
    }, [data])
    
    useEffect(() => {
        getResults(searchTerm);
    }, []);

    async function getResults(searchTerm) {
        const response = await axios.get(`https://localhost:44394/api/product/search/${searchTerm}`);
        if (response.data){
            setData(response);
        }
    }

    return [results];
}

export default useSearch;