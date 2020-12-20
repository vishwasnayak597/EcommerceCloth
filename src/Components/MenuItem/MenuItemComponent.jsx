import React from 'react';
import './MenuItem.styles.scss';
import {withRouter} from 'react-router-dom';

const MenuItem =({title,imageUrl,size,history,linkUrl,match})=>(
    <div className={`${size} menu-item`} 
    onClick={() => history.push(`${match.url}${linkUrl}`)}> 
    <div className="background-image" style={{   //only to increase image size while hovering
        backgroundImage:`url(${imageUrl})`}} />
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
             <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
)

export default withRouter(MenuItem);
