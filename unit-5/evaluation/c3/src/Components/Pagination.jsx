import React from "react";
import "./CSS Files/Pagination.css";

const Pagination = () => {

  return (
    <div className="paginationWrapper" data-testid='paginationWrapper'>
        <button
          className="prevBtn"
          data-testid='prevBtn'
        >
          Prev
        </button>
      
      {/* render the buttons here, directly. Ensure, each button has the "data-testid='btn'" prop. Add the className, activeBtn, if the current button is the activePage*/}
    
        <button
          className="nextBtn"
          data-testid='nextBtn'
        >
          Next
        </button>
      
    </div>
  );
};

export default Pagination;
