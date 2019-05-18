import React from 'react';

const Collection = (props) => (
    <li className="list-group-item" key={props.collection.id}>
        {`Collection ${props.collection.id}: ${props.collection.title}`}
    </li>
);
export default Collection;