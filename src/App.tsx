import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {Navigation} from './navigation/Navigation';
import {GradientProvider} from './context/GradientContext';

interface AppStateProps {
  children: JSX.Element | JSX.Element[];
}

const AppState = ({children}: AppStateProps) => {
  return (
    <GradientProvider>
      {children}
    </GradientProvider>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigation />
      </AppState>
    </NavigationContainer>
  );
};

export default App;
