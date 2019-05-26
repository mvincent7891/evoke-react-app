import React from 'react';
import DELETE_ENTRY_MUTATION from './DeleteEntryMutation';
import ENTRY_LIST_QUERY from './EntryListQuery';
import { Mutation } from 'react-apollo';


        
const Entry = (props) => (
    <Mutation mutation={DELETE_ENTRY_MUTATION}>
        {(deleteEntry, { data }) => {
            const deleteEntryHandler = (e) => {
                e.preventDefault()
                deleteEntry({
                    variables: {
                        id: parseInt(props.entry.id)
                    },
                    refetchQueries: [{
                        query: ENTRY_LIST_QUERY
                    }]
                });
            }
            return (<div className="pad-5 pure-g">
                <div className="pure-u-1-8">
                    <button onClick={deleteEntryHandler} className="button-small pure-button"><i className="fa fa-trash fa-sm"></i></button>
                </div>
                <div className="pure-u-1-8">{`Entry ${props.entry.id}`}</div>
                <div className="pure-u-1-8">{`${props.entry.item.term}`}</div>
                <div className="pure-u-1-8">{`${props.entry.item.lexical_category}`}</div>
                <div className="pure-u-3-8">{`${props.entry.item.definition}`}</div>
            </div>)
        }}
    </Mutation>

);

export default Entry;