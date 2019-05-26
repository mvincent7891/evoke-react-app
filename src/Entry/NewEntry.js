import React from 'react';
import { graphql, Mutation } from 'react-apollo'
import COLLECTION_LIST_QUERY from "../Collection/CollectionListQuery"
import NEW_ENTRY_MUTATION from "./NewEntryMutation"

class NewEntry extends React.Component {
  constructor(props) {
    super(props)
    this.termInput = null;
    this.definitionInput = null;
    this.collectionSelect = null;
    this.lexicalCategorySelect = null;
  }

  handleNewEntrySubmission() {

  }

  renderCollectionSelection() {
    // const { loading, error, data } = this.props;
    const { data } = this.props;

    const collections = (data && data.collections) || [];

    return  (<select 
                id="collection"
                ref={node => {
                  this.collectionSelect = node;
                }}
              >
      { collections.map(c => <option key={`collection-option-${c.id}`} value={c.id}>{c.title}</option>) }
    </select>);
  }

  renderLexicalCategorySelection() {
    const categories = [
      'noun', 'adjective', 'verb', 'adverb'
    ];

    return  (<select 
                id="lexical"
                ref={node => {
                  this.lexicalCategorySelect = node;
                }}
              >
      { categories.map(category => (<option key={`lexical-option-${category}`} value={category}>
        {category}
      </option>)) }
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
              let selectComponent = this.collectionSelect;
              const collectionId = selectComponent.options[selectComponent.selectedIndex].value;

              selectComponent = this.lexicalCategorySelect;
              const lexicalCategory = selectComponent.options[selectComponent.selectedIndex].value;

              const variables = { 
                term: this.termInput.value,
                definition: this.definitionInput.value,
                collectionId: parseInt(collectionId),
                source: 'user',
                lexicalCategory: lexicalCategory
              }
              addEntry({ variables });
              this.definitionInput.value = "";
              this.termInput.value = "";
            }}
          >
              <fieldset>
                  <legend>Create new entry:</legend>
                  <div className="pad-5 pure-u">
                    { this.renderCollectionSelection() }
                  </div>
                  <div className="pad-5 pure-u">
                    { this.renderLexicalCategorySelection() }
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