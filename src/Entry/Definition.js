import React from 'react';

const Definition = (props) => (
  <div className="pad-5 pure-g">
    <div className="pure-u-1-8">
        <button onClick={() => {}} className="button-small pure-button"><i className="fa fa-plus fa-sm"></i></button>
    </div>
    <div className="pure-u-1-8">{`${props.term.term}`}</div>
    <div className="pure-u-1-8">{`${props.term.lexical_category}`}</div>
    <div className="pure-u-3-8">{`${props.term.definition}`}</div>
  </div>

);

export default Definition;