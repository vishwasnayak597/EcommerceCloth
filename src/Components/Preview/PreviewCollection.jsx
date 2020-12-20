import React from 'react';
import './Preview.styles.scss';
import CollectionItem from '../Collection-item/Collection-item';

const PreviewCollection =({title,items})=> (
   <div className="collection-preview">

       <h1 className="title">{title.toUpperCase()} </h1>
       <div className='preview'>
           {items
           .filter((item,index)=>index <4 )  //filtering only 4 items 
           .map((item) => (
            <CollectionItem key={item.id} item={item} />
               ))
           }
       </div>
   </div>
);

export default PreviewCollection;