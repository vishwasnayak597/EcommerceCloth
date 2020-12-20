import React from 'react';
import './Directory.styles.scss';
import MenuItem from '../MenuItem/MenuItemComponent';
import {connect} from 'react-redux';
import {selectDirectorySections} from '../../Redux/directory-redux/directory-selector';
import {createStructuredSelector} from 'reselect';



 const Directory =({sections})=>(   //for state value of menu items class is necessary
              <div className="directory-menu">
                {sections.map(({id,...otherSectionProps})=>(
                     <MenuItem key={id} {...otherSectionProps}/>
                ))}
              
            </div>
        );
    const mapStateToProps=createStructuredSelector({
      sections: selectDirectorySections
    });

export default connect(mapStateToProps) (Directory);