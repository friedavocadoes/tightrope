import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="relative px-6 flex items-center justify-center">
    
     
      <div className="layout-content"> 
        {children}
      </div>
    </div>
  );
};

export default Layout;
