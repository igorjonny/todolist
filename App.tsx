import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView, StatusBar } from "react-native";

import { Home } from "./src/screens/Home";

import SafeViewAndroid from "./src/styles/SafeViewAndroid";

import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

import { Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({ Inter_400Regular, Inter_700Bold });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#0D0D0D"
        translucent
      />
      <SafeAreaView
        onLayout={onLayoutRootView}
        style={SafeViewAndroid.AndroidSafeArea}
      >
        <Home />
      </SafeAreaView>
    </>
  );
}
