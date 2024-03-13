import React, { useState, useRef, useEffect } from 'react';


const Pagination = ({results}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const resultsPerPage = (5);
    const handlePaginationClick = (page) => {
        setCurrentPage(page);
      };
    const renderPagination = () => {
        if (results.length > 0) {
          const totalPages = Math.ceil(results.length / resultsPerPage);
          const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
    
          return (
            <div className="pagination">
              {pageNumbers.map((page) => (
                <button
                  key={page}
                  onClick={() => handlePaginationClick(page)}
                  className={page === currentPage ? 'active' : ''}
                >
                  {page}
                </button>
              ))}
            </div>
          );
        } else {
          return null;
        }
      };
    
    return (
        <div className="pagination-container">
            {renderPagination()}
        </div>
    );
};

export default Pagination;