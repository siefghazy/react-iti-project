import React, { memo } from 'react';
import styling from'../components/category.module.css'
const Category = ({name,path}) => {
    return (
        <button className={styling.mainCategory}> 
        <div >
        <img src={path} alt="" />
        </div>
        <p className={styling.paragraph}>{name}</p>
        </button>
    );
}

export default memo(Category) ;
