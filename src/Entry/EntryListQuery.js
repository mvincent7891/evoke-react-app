import gql from "graphql-tag";

const ENTRY_LIST_QUERY = gql`
  {
    entries {
      id
      item {
        term
        definition
        item_type
        lexical_category
        hashed_def
      }
      collection {
        id
      }
    }
  }
`

export default ENTRY_LIST_QUERY