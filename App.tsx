import React from "react";
import { SafeAreaView, StatusBar } from "react-native";

import { Home } from "./src/screens/Home";

import SafeViewAndroid from "./src/styles/SafeViewAndroid";

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
        <Home />
      </SafeAreaView>
    </>
  );
}
