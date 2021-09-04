import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useSearch = (searchTerm) => {
    // Uses intermediate data store to handle refreshing the page
    // Basically, use the async function to repeatedly check if the response is finished
    // When it does, update the data 
    // Updating the data triggers useEffect, updates the results
    // Results and getResults are returned to keep the page this is called from up to date without a bunch of refreshes

    const [data, setData] = useState();
    const [results, setResults] = useState();
    useEffect(() => {
        try {
            if (data.data) {
                setResults(data.data);
            }
        } catch {}
    }, [data])
    
    useEffect(() => {
        getResults(searchTerm);
    }, []);

    async function getResults(searchTerm) {
        const response = await axios.get(`https://localhost:44394/api/product/search/${searchTerm}`);
        if (response.data){
            try {
                // Just checking that the data actually exists
                const name = response.data[0].name;
                // If it does, set the data
                setData(response);
            }
            catch {
                // No catch handling needed, just do nothing
            }
        }
    }

    // Return the results, which only refresh when the data is actually available
    // Return getResults to allow multiple searches
    return { results, getResults };
}

export default useSearch;