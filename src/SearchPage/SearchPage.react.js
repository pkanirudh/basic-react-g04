import React from 'react';

import './SearchPage.css';
import SearchForm from '../SearchForm/SearchForm.react';
import SearchResults from '../SearchResults/SearchResults.react';

const SearchPage = () => {

    return (
        <div className='searchpage_wrapper'>
            <h3>StackOverFlow Search</h3>
            <SearchForm/>
            <SearchResults/>
        </div>
    );

}

export default SearchPage;