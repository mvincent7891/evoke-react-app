import gql from "graphql-tag";

const NEW_ENTRY_MUTATION = gql`
  mutation(
    $term: String!,
    $definition: String!,
    $collectionId: Int!,
    $source: String!,
    $lexicalCategory: String!
  ) {
    create_definition(
      term: $term,
      definition: $definition,
      collection_id: $collectionId,
      source: $source,
      lexical_category: $lexicalCategory
    ) {
      term
      definition
    }
  }
`

export default NEW_ENTRY_MUTATION;