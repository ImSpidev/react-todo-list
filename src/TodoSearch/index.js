import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch() {

    const {searchValue, setSearchValue} = React.useContext(TodoContext);

    const onSerachValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    return(
        <input 
            placeholder="Search TODO's..."
            onChange={onSerachValueChange}
            value={searchValue}
        >
        </input>
    ); 
};

export { TodoSearch };