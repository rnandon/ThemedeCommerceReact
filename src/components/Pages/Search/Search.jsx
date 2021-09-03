import React, { useEffect, useState } from 'react';

import useSearch from '../../../hooks/useSearch'
import Product from '../../Elements/Product/Product';

const Search = (props) => {
    const searchTerm = props.match.params.searchTerm;
    const results = useSearch(searchTerm);
    const [resultsBack, setResultsBack] = useState(false);

    useEffect(() => {
        if (results.length >= 0) {
            setResultsBack(true);
        }
    }, [results])

    if (!resultsBack){
        return (
            <h1>Searching for {searchTerm}...</h1>
        )
    } else if (results.length === 0) {
        return (
            <h1>No results found containing {searchTerm}.</h1>
        )
    } else {
        const resultsComponents = results.map((result) => {
            return <Product product={result} />
        })

        return (
            <div>
                <h1>Search results for {searchTerm}:</h1>
                {resultsComponents}
            </div>
        )
    }
}

export default Search;