import React from 'react';

// wrapper.js is a standalone component
function Wrapper({ children }) {
    return (
        <div className="wrapper">
          { children }
        </div>
    );
  }
  
  export default Wrapper;