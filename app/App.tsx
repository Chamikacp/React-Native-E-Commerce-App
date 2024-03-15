import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import AppNavigator from "./navigation";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ActivityIndicator } from "react-native";
import initializeStore from "./store";

const { persistor, store } = initializeStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <SafeAreaProvider>
          <AppNavigator />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
