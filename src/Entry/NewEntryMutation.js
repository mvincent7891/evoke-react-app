import gql from "graphql-tag";

const NEW_ENTRY_MUTATION = gql`
  mutation(
    $term: String!,
    $definition: String!,
    $source: String!
  ) {
    create_definition(
      term: $term,
      definition: $definition,
      source: $source
    ) {
      term: term
      definition: definition
    }
  }
`

export default NEW_ENTRY_MUTATION;