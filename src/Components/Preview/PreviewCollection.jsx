import React from 'react';
import {
    CollectionPreviewContainer,
    TitleContainer,
    PreviewContainer
  } from './PreviewCollection.styles';
import CollectionItem from '../Collection-item/Collection-item';

const PreviewCollection = ({ title, items, history, match, routeName }) => (
    <CollectionPreviewContainer>
    <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
      {title.toUpperCase()}
    </TitleContainer>
    <PreviewContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default PreviewCollection;