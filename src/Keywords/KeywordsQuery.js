import gql from "graphql-tag";

const KEYWORDS_QUERY = gql`
  {
    keywords {
      keyword
      keyword_type
      keyword_id
      related
      related_type
      related_id
    } 
  }
`

export default KEYWORDS_QUERY