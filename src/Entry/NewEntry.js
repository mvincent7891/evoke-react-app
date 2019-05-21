import React from 'react';
import { graphql, Mutation } from 'react-apollo'
import COLLECTION_LIST_QUERY from "../Collection/CollectionListQuery"
import NEW_ENTRY_MUTATION from "./NewEntryMutation"

class NewEntry extends React.Component {
  constructor(props) {
    super(props)
    this.termInput = null;
    this.definitionInput = null;
  }

  handleNewEntrySubmission() {

  }

  renderCollectionSelection() {
    // const { loading, error, data } = this.props;
    const { data } = this.props;

    const collections = (data && data.collections) || [];

    return  (<select id="collection">
      { collections.map(c => <option key={`collection-option-${c.id}`}>{c.title}</option>) }
    </select>);
  }

  render() {

    return (
      <Mutation mutation={NEW_ENTRY_MUTATION}>
        {(addEntry, { data }) => (
          <form
            className="pure-form"
            onSubmit={e => {
              e.preventDefault();
              addEntry({ variables: { 
                term: this.termInput.value,
                definition: this.definitionInput.value,
                source: 'source'
              } });
              this.definitionInput.value = "";
              this.termInput.value = "";
            }}
          >
              <fieldset>
                  <legend>Create new entry:</legend>
                  <div className="pad-5 pure-u-1-8">
                    { this.renderCollectionSelection() }
                  </div>
                  <div className="pad-5 pure-u-1-8">
                      <input
                        className="pure-input-1"
                        type="text"
                        placeholder="Term"
                        ref={node => {
                          this.termInput = node;
                        }}
                      />
                  </div>
                  <div className="pad-5 pure-u-3-8">
                      <input 
                        className="pure-input-1" 
                        type="text" 
                        placeholder="Definition"
                        ref={node => {
                          this.definitionInput = node;
                        }}
                      />
                  </div>
                  <div className="pad-5 pure-u-1-8">
                    <button type="submit" className="pure-button pure-button-primary">Add Entry</button>
                  </div>
              </fieldset>
            </form>
        )}
      </Mutation>
    )
  }
}

export default graphql(COLLECTION_LIST_QUERY)(NewEntry);