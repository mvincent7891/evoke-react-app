import gql from "graphql-tag";

const DELETE_ENTRY_MUTATION = gql`
  mutation(
    $id: Int!
  ) {
    delete_entry(
      id: $id,
    ) {
      id
    }
  }
`

export default DELETE_ENTRY_MUTATION;