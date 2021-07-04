import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import RepositoryList from './components/RepositoryList';
import Home from './pages/Home';

import store from './store';

//const App = () => <Provider store={store}><RepositoryList /></Provider>;
const App: React.FC = () => {
  return (
    <Provider store={store}>
    <Router>
    <Route exact path='/'>
      <Home />
    </Route>
    <Route path='/repositorylist'>
      <RepositoryList />
    </Route>
    
  </Router>
  </Provider>
  )
}

export default App;
