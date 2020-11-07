import React from 'react';
import './App.css';
import Main from './component/Main';

// Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">

        <Main></Main>

      </div>
    </Provider>
  );
}

export default App;
