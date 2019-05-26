import React from 'react';
import EntryList from './EntryList'
import NewEntry from './NewEntry'
import LookupTerm from './LookupTerm'

class EntryApp extends React.Component {
  render() {
    return <div>
      <NewEntry />
      <LookupTerm />
      <EntryList />
    </div>
  }
}

export default EntryApp;