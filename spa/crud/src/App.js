import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// in app.js
import { Admin, Resource } from 'admin-on-rest';
import { PostList, PostEdit, PostCreate, PostIcon } from './posts';
import postgrestClient from '@sebastien-cleany/aor-postgrest-client';

class App extends Component {
  render() {
    return (
      <Admin restClient={postgrestClient('http://localhost:3002')}>
          <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
      </Admin>
    );
  }
}

export default App;
