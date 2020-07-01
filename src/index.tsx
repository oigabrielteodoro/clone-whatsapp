import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './routes';

const App: React.FC = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#010101" translucent />

    <Routes />
  </>
);

export default App;
