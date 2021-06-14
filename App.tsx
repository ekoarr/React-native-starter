import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import Navigation from './src/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import { Entypo } from '@expo/vector-icons';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const App = () => {

  const [appIsReady, setAppIsReady] = useState(false);

  async function prepare() {
    try {
      await SplashScreen.preventAutoHideAsync();
      await Font.loadAsync(Entypo.font);
      await new Promise(resolve => setTimeout(resolve, 2000));
    } catch (e) {
      console.warn(e);
    } finally {
      setAppIsReady(true);
    }
  }

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return <AppLoading
      startAsync={prepare}
      onFinish={onLayoutRootView}
      onError={console.warn}
    />
  }

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </Provider>
  );
}

export default App