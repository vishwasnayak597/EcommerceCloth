import React from 'react';
import CollectionItem from '../../Components/Collection-item/Collection-item';
import './category.styles.scss';
import {connect} from 'react-redux';
import  {selectCollection} from '../../Redux/shop/shop-selector';

const CategoryPage=({collection}) => {
  const { title, items } = collection;
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CategoryPage);