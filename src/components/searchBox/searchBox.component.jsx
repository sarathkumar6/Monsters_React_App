import React from 'react';
import './searchBox.styles.css';

export const SearchBox = ({placeholder, changeHandler}) => (
    <input  className="search"
            type='search'
            placeholder={placeholder}
            onChange = {changeHandler}/>
      
);
