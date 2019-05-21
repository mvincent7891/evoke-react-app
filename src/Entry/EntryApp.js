import React from 'react';
import EntryList from './EntryList'
import NewEntry from './NewEntry'

class EntryApp extends React.Component {
  render() {
    return <div>
      <NewEntry />
      <EntryList />
    </div>
  }
}

export default EntryApp;