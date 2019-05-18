import React from 'react';
import { graphql } from 'react-apollo'
import Collection from "./Collection" 
import COLLECTION_LIST_QUERY from "./CollectionListQuery"

const CollectionList  = ({ loading, error, data } ) => {
    if (loading) return <div>Loading...</div>
    if (error) return <div>{error.message}</div>


    if (data && data.collections) {
        return (<ul className="list-group">
            {
                data.collections.map(currentCollection => (
                    <Collection key={`collection-${currentCollection.id}`} collection={currentCollection} />
                )    
            )}
        </ul>);
    } else {
        return <div/>
    }

}
  
export default graphql(COLLECTION_LIST_QUERY)(CollectionList);