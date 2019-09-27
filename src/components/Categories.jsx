import React from 'react';

const Categories = ({ children, title }) => (
  <div className='categories'>
    <h3 className='categories-title'>{title}</h3>
    {children}
  </div>
);

export default Categories;
