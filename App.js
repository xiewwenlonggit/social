import React, {useState, useEffect} from 'react';
import Store from './src/redux/store';
import {View} from 'react-native';
import Nav from './src/router';
import {Provider} from 'react-redux';
import {NativeBaseProvider} from 'native-base';
import Geo from './src/utils/Geo';
const App = () => {
  const [isInitGeo, setIsInitGeo] = useState(false);
  useEffect(() => {
    async function getLocation() {
      await Geo.initGeo();
      setIsInitGeo(true);
    }
    getLocation();
  }, []);
  return (
    <NativeBaseProvider>
      <View style={{flex: 1}}>
        <Provider store={Store}>{isInitGeo ? <Nav /> : <></>}</Provider>
      </View>
    </NativeBaseProvider>
  );
};

export default App;
