import React from 'react';
import {View} from 'react-native';
import Nav from './src/router';
import store from './src/redux/store';
import {Provider} from 'react-redux';
const App = () => {
  return (
    <View style={{flex: 1}}>
      <Provider store={store}>
        <Nav />
      </Provider>
    </View>
  );
};

export default App;
