import React from 'react';

const Entry = (props) => (
    <div className="pure-g">
        <div className="pure-u-1-8"><p>{`Entry ${props.entry.id}`}</p></div>
        <div className="pure-u-1-8"><p>{`${props.entry.item.term}`}</p></div>
        <div className="pure-u-3-4"><p>{`${props.entry.item.definition}`}</p></div>
    </div>
);
export default Entry;