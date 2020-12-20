import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import './collections-overview.styles.scss';
import PreviewCollection from '../Preview/PreviewCollection';
import  {selectCollectionsForPreview} from '../../Redux/shop/shop-selector';


const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
  
  const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
  });
  
  export default connect(mapStateToProps)(CollectionsOverview);
  