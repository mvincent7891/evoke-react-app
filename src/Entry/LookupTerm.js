import React from 'react';
import { Query } from 'react-apollo'
import LOOKUP_TERM_QUERY from "./LookupTermQuery"
import Definition from "./Definition"

class LookupTerm extends React.Component {
  constructor(props) {
    super(props)
    this.termInput = null;
    this.state = { term: null, definition: [] }
  }


  render() {
    const { term } = this.state;
    return (
      <Query 
        query={LOOKUP_TERM_QUERY}
        variables={{ term }}
        skip={!term}
      >
        {({ data, refetch, loading }) => (
          <div>
            <form
            className="pure-form"
            onSubmit={e => {
              e.preventDefault();
              this.setState({term: this.termInput.value}, () => {
                refetch().then(() => this.termInput.value = "")
              })
            }}
          >
              <fieldset>
                  <legend>Lookup entry:</legend>

                  <div className="pad-5 pure-u-1-8">
                      <input
                        disabled={loading}
                        className="pure-input-1"
                        type="text"
                        placeholder="Term"
                        ref={node => {
                          this.termInput = node;
                        }}
                      />
                  </div>
  
                  <div className="pad-5 pure-u-1-8">
                    <button type="submit" className={`pure-button pure-button-primary ${loading && 'pure-button-disabled'}`}>Lookup</button>
                  </div>
              </fieldset>

              
            </form>
            <div>
              {
                data && data.lookup && data.lookup.map(term => <Definition term={term}/>)
              }
            </div>
          </div>
        )}
      </Query>
    )
  }
}

export default LookupTerm;