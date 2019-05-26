import React from 'react';
import NEW_ENTRY_MUTATION from './NewEntryMutation';
import ENTRY_LIST_QUERY from './EntryListQuery';
import { Mutation } from 'react-apollo';
import Definition from './Definition';

const DefinitionContainer = (props) => (
    <Mutation mutation={NEW_ENTRY_MUTATION}>
        {(addEntry, { data }) => {
            const addEntryHandler = (e) => {
                e.preventDefault()

                const variables = { 
                  term: props.term,
                  definition: props.definition,
                  source: props.source,
                  lexicalCategory: props.lexical_category,
                  collectionId: null
                }

                addEntry({
                  variables,
                  refetchQueries: [{
                    query: ENTRY_LIST_QUERY
                  }]
                });
            }
            return (<Definition {...props} addEntry={addEntryHandler}/>)
        }}
    </Mutation>
)

export default DefinitionContainer;