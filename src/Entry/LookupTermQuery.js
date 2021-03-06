import gql from "graphql-tag";

const LOOKUP_TERM_QUERY = gql`
  query($term: String!) {
    lookup(term: $term) {
      term
      definition
      lexical_category
      source
      hashed_def
      collections
    }
  }
`

export default LOOKUP_TERM_QUERY