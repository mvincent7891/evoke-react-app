import React from 'react';

const Collection = (props) => (
    <div className="pure-g">
        <div className="pure-u-1-8"><p>{`Collection ${props.collection.id}`}</p></div>
        <div className="pure-u-1-8"><p>{`${props.collection.title}`}</p></div>
    </div>
);
export default Collection;