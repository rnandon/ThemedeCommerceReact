import React, { useEffect, useState } from 'react';

import useSearch from '../../../hooks/useSearch'
import Product from '../../Elements/Product/Product';

const Search = (props) => {
    const searchTerm = props.match.params.searchTerm;
    const { results, getResults } = useSearch(searchTerm);
    const [resultsBack, setResultsBack] = useState(false);

    useEffect(() => {
        // Run a new search whenever the search term changes
        getResults(searchTerm);
    }, [searchTerm])

    useEffect(() => {
        try {
            // This just checks if results is defined. Will break if it isn't
            const resultsLength = results.length;
            // Helps with conditional formatting. 
            // results === undefined -> still waiting
            // results === [] or [...] -> got results
            setResultsBack(true);
        } catch {}
    }, results)

    if (!resultsBack){
        // Still waiting
        return (
            <h1>Searching for {searchTerm}...</h1>
        )
    } else if (results.length === 0) {
        // Nothing came back
        return (
            <h1>No results found containing {searchTerm}.</h1>
        )
    } else {
        // Received something to render
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