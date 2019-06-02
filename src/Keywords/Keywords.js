import React from 'react';
import { graphql } from 'react-apollo'
import KEYWORDS_QUERY from "./KeywordsQuery"
import { groupBy } from 'lodash'

const Keywords  = ({ loading, error, data } ) => {
    if (loading) return <div>Loading...</div>
    if (error) return <div>{error.message}</div>

    if (data && data.keywords) {
      console.log(groupBy(data.keywords, 'keyword'))

      return (
        <div>Done.</div>
      );
    } else {
      return <div/>
    }

}
  
export default graphql(KEYWORDS_QUERY)(Keywords);