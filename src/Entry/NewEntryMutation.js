import gql from "graphql-tag";

const NEW_ENTRY_MUTATION = gql`
  mutation(
    $term: String!,
    $definition: String!,
    $collectionId: Int!,
    $source: String!
  ) {
    create_definition(
      term: $term,
      definition: $definition,
      collectionId: $collectionId,
      source: $source
    ) {
      term: term
      definition: definition
    }
  }
`

export default NEW_ENTRY_MUTATION;