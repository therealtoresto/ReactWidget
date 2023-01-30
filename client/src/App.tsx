import React from 'react';
import './App.css';
import UserList from './components/UserList';
import { Provider } from 'react-redux';
import { store } from './app/store'
import { Route, Routes, BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path='/' element={<UserList />}/>
            <Route path='*' element={<UserList />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
