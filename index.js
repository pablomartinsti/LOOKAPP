import "react-native-gesture-handler"; // Esta linha deve ser a primeira do arquivo
import "react-native-reanimated";
import { registerRootComponent } from "expo";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import React from "react";

import Routes from "./src/routes";
import ContextProvider from "./src/contexts/app";

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ContextProvider>
        <Routes />
      </ContextProvider>
    </GestureHandlerRootView>
  );
}

registerRootComponent(App);
