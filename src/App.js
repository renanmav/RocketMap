import React from 'react';
import { Provider } from 'react-redux';

import Map from './pages/Map/index';

import './config/Reactotron';

import store from './redux/store';

const App = () => (
  <Provider store={store}>
    <Map />
  </Provider>
);

export default App;
