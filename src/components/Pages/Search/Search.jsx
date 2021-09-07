import React, { useEffect, useState } from 'react';

import useSearch from '../../../hooks/useSearch'
import useDataRetrieval from '../../../hooks/useDataRetrieval';
import Product from '../../Elements/Product/Product';
import axios from 'axios';

const Search = (props) => {
    const searchTerm = props.match.params.searchTerm;
    let [filterCategories, setFilterCategories] = useState([]);
    const { results, getResults } = useSearch(searchTerm);
    const [shownResults, setShownResults] = useState([]);
    const [resultsBack, setResultsBack] = useState(false);
    const [categories, setCategories] = useState(false);
    async function getCategories() {
        // Retrieve all category values stored in the db for filtering
        let categoryResponse = await axios.get("https://localhost:44394/api/category");
        if (categoryResponse.data) {
            setCategories(categoryResponse.data);
        }
    }
    
    useEffect(() => {
        // Run a new search whenever the search term changes
        getResults(searchTerm);
        if (!categories) {
            getCategories();
        }
    }, [searchTerm])

    useEffect(() => {
        try {
            // This just checks if results is defined. Will break if it isn't
            const resultsLength = results.length;
            // Helps with conditional formatting. 
            // results === undefined -> still waiting
            // results === [] or [...] -> got results
            setResultsBack(true);
            // Set unfiltered results. Will handle filtering after the user selects categories to filter with
            setShownResults(results);
        } catch {}
    }, results)

    const filterResults = () => {
        let relevantResults = results.filter((result) => {
            // If there are entries in filterCategories, then filter by them. Otherwise (no filters) just return every entry.
            return (filterCategories.length > 0? filterCategories.includes(result.category.categoryId) : true);
        })
        // Refresh the page.
        setShownResults(relevantResults);
    }

    let categoryBoxes = [];
    if (categories) {
        const toggleField = (value) => {
            // Get the current filterCategories- if the current value is in the list, remove it. Else, add it.
            let newFilters = filterCategories;
            if (newFilters.includes(value)) {
                newFilters = newFilters.filter(el => el !== value);
            } else {
                newFilters.push(value);
            }
            // Refresh the page.
            setFilterCategories(newFilters);
        }
        categoryBoxes = categories.map((category) => {
            // Controls which categories are being filtered.
            return (
                <div>
                    <input name={category.categoryId} type="checkbox" onClick={() => toggleField(category.categoryId)} value={category.categoryId} />
                    <label for={category.categoryId} >{category.name}</label>
                </div>
            )
        })
    }

    if (!resultsBack){
        // Still waiting
        return (
            <h1>Searching for {searchTerm}...</h1>
        )
    } else if (shownResults.length === 0) {
        // Nothing came back
        return (
            <div>
                <h1>No results found containing {searchTerm}.</h1>
                {categories && 
                    <div>
                        {categoryBoxes} 
                        <button onClick={filterResults} >Filter</button>
                    </div>
                }
            </div>
        )
    } else {
        // Received something to render
        const resultsComponents = results.map((result) => {
            return <Product product={result} />
        })

        return (
            <div>
                <h1>Search results for {searchTerm}:</h1>
                {categories && 
                    <div>
                        {categoryBoxes} 
                        <button onClick={filterResults} >Filter</button>
                    </div>
                }
                {resultsComponents}
            </div>
        )
    }
}

export default Search;