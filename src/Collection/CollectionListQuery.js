import gql from "graphql-tag";

const COLLECTION_LIST_QUERY = gql`
  {
    collections {
      id
      title
    }
  }
`

export default COLLECTION_LIST_QUERY