import React from 'react';
import { graphql } from 'react-apollo'
import Entry from "./Entry" 
import ENTRY_LIST_QUERY from "./EntryListQuery"

const EntryList  = ({ loading, error, data } ) => {
    if (loading) return <div>Loading...</div>
    if (error) return <div>{error.message}</div>


    if (data && data.entries) {
        return (<ul className="list-group">
            {
                data.entries.map(currentEntry => (
                    <Entry key={`entry-${currentEntry.id}`} entry={currentEntry} />
                )    
            )}
        </ul>);
    } else {
        return <div/>
    }

}
  
export default graphql(ENTRY_LIST_QUERY)(EntryList);