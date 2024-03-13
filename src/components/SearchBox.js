import React, { useState, useRef, useEffect } from 'react';
import { data } from './Data';
import TableData from './TableData';
import Pagination from './Pagination';

const SearchBox = () => {
    const searchInputRef = useRef(null);
    const initialData = data.data
    const [searchData, setSearchData] = useState(initialData);
    const [searchQuery, setSearchQuery] = useState('');
  

    useEffect(() => {
        if(searchQuery.length > 0){
            const filteredData = initialData.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchData(filteredData);
        }else{
            setSearchData(initialData)
        }
    },[searchQuery])

    
    return (
        <div>
            <header className="search-box">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search place..."
                    ref={searchInputRef}
                />
            </header>
            <TableData searchResults={searchData} searchQuery={searchQuery} />
            <Pagination results={searchData}/>
        </div>
    );
};

export default SearchBox;