import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useDataRetrieval = (dataUrl) => {
    // Retrieves data from url. Automatically updates when that data comes back, 
    //   cleaning up the await process a bit

    // We need data to have state so it can rerender a component when it gets updated. 
    let [data, setData] = useState({});

    async function getData(url) {
        const response = await axios.get(url);
        // When we have data, we need to get it to the data variable and make the page reload to handle it.
        if (response.data) {
            setData(response.data);
        } else if (response.status === 404) {
            setData({ status: 404 });
        }
    }

    // Start getting the data on load
    useEffect(() => {
        getData(dataUrl)
    }, [])

    return { data };
}

export default useDataRetrieval;