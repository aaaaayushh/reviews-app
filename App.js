import React, { useState } from "react";
import Home from "./screens/home";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import Navigator from "./routes/drawer";
const getFonts = () =>
  Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
    "nunito-italic": require("./assets/fonts/Nunito-Italic.ttf"),
    "nunito-bolditalic": require("./assets/fonts/Nunito-BoldItalic.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (fontsLoaded) {
    return <Navigator />;
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={() => setFontsLoaded(false)}
      />
    );
  }
  // return <Home />;
}
