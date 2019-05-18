import React from 'react';
import { graphql } from 'react-apollo'
import gql from "graphql-tag";
import Collection from "./Collection" 

const COLLECTIONS_QUERY = gql`
  {
    collections {
      id
      title
    }
  }
`

const Collections  = ({ loading, error, data, networkStatus } ) => {
    if (loading) return <div>Loading...</div>
    if (error) return <div>{error.message}</div>


    if (data && data.collections) {
        return data.collections.map(currentCollection => (
            <Collection key={`collection-${currentCollection.id}`} collection={currentCollection} />
        ));
    } else {
        return <div>Something went wrong</div>
    }

}
  
export default graphql(COLLECTIONS_QUERY)(Collections);