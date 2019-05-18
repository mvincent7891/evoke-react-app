import React from 'react';

const Collection = (props) => (
    <div key={props.collection.id}>
        <p>{`Collection ${props.collection.id}: ${props.collection.title}`}</p>
    </div>
);
export default Collection;