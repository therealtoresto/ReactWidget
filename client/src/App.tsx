import React from 'react';
import './App.css';
import UserList from './components/UserList';
import { Provider } from 'react-redux';
import {store} from './app/store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <UserList />
      </Provider>
    </div>
  );
}

export default App;
