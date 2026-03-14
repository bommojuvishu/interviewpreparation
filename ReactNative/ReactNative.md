# init

- https://docs.expo.dev/tutorial/create-your-first-app/
- sudo npx create-expo-app StickerSmash && cd StickerSmash
- sudo npx expo start

  - scan the QR code from the android expo go android app
  - incase of the error of super user
    - sudo chmod -R 777 directory_name

- sudo npm install react-native-paper react-native-safe-area-context

# Checklist before react native expo app uploading to prod

- change the version : "version": "2.0.0",
- "versionCode": 4,
- add padding of 200 ,https://onlinepngtools.com/add-padding-to-png
- change app icon ,adaptive-icon of foregroundImage
- check the privacy policy button
- check the email id in the privacy policy
- app title
- check the repos
  - sudo npm install react-native-paper react-native-safe-area-context
- finally check all the workflow testing

- eas build -p android --profile preview

```javascript
"preview": {
      "android":{
        "buildType": "apk"
      }
      }

```

- disable the dark mode

```javascript
import React from "react";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";

const lightTheme = {
  ...DefaultTheme,
  dark: false,
  // You can customize other theme properties here if needed
};

const YourApp = () => (
  <PaperProvider theme={lightTheme}>{/* Your app content */}</PaperProvider>
);

export default YourApp;
```

- eas build -p android --profile production

# Frequent snippets

- Safearea view

```javascript
<SafeAreaView style={styles.container}></SafeAreaView>
```

- click on the button ,even if the keyboard is on

```javascript
<ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
 >
```

# Top libraries

- react-native-paper : UI library
- react-native-pager-view : swiper libary
- lottie-react-native : animations
- react-native-safe-area-context
- @react-navigation/native : https://reactnavigation.org/docs/getting-started/
- react-native-vector-icons
- @react-native-firebase/app
- https://ui.gorhom.dev/components/bottom-sheet/

# Admob integration

URL : https://docs.page/invertase/react-native-google-mobile-ads

- sudo npx expo install expo-dev-client
- eas build --profile development :
  - this command builds the dev app in cloud and displays the QR , scan the QR -> download the APK -> install it -> open it then dev app server starts now and execute the following command
- sudo npx expo start --dev-client
  - it generates the QR code -> SCAN the QR USING THE DEV APP SERVER -> then changes reflect

```javascript
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";

const adUnitId = __DEV__
  ? TestIds.ADAPTIVE_BANNER
  : "ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy";

<BannerAd unitId={adUnitId} size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER} />;
```

# commonly used ones

- sudo npx expo start
- eas build -p android --profile preview
- eas build -p android --profile production

- In React Native, styling (such as the yellow border) is done using JavaScript as compared to the web, where CSS is used.

# Build

- npm install -g eas-cli
- eas login
- eas build:configure
- eas build --platform android

- eas build -p android --profile preview
- eas build -p android --profile production

Documentation : https://docs.expo.dev/build/setup/

for apk generation

```javascript
"preview": {
      "android":{
        "buildType": "apk"
      },
```

## app json

https://docs.expo.dev/versions/latest/config/app/

## color hex code

blue
5e0acc

# Stylesheet

- button :
  - onChangeText : track the text changes
  - for shadown effect # elevation : 2
  - for spacing around between button # margin : 4
  - on click call back # <Pressable onPress={presshandler } android_ripple ={ {color: '#color'}}/>
  - weight # flex :1

```javascript
<Button
  onPress={() => {
    console.log("You tapped the button!");
  }}
  title="Press Me"
/>
```

- gradient
  - install the package expo-linear-gradient , give 2 colors as props , it will convert to the gradient color
  - Imagebackground Component
    - it from react native
    - used to add image as background
    - add transparency for the image
  ```javascript
  .backgroundimage {
  opacity : 0.14
  }
  ```
- Alert
  - Alert.alert("msg","msg",) : pop up box
- Icons
  - npm install @expo/vector-icons
  - https://icons.expo.fyi/Index
- fonts
  - expo install expo-font
- splash screen
  - expo install expo-app-loading
- status bar

```javascript
<Statusbar style="light" />
```

# React Navigation

installation : https://reactnavigation.org/docs/getting-started

- npm install @react-navigation/native
- npx expo install react-native-screens react-native-safe-area-context

## Center the image

```javascript
container: {
    flex: 1,
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
  }
```

## Testing screen

```javascript
// src/HelloWorldScreen.js

import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TestingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, World!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default TestingScreen;
```

## React Native Paper installation

- sudo npm install react-native-paper react-native-safe-area-context

https://callstack.github.io/react-native-paper/docs/guides/getting-started/

icons : https://oblador.github.io/react-native-vector-icons/

```javascript
import * as React from "react";
import { PaperProvider } from "react-native-paper";
import App from "./src/App";

export default function Main() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}
```

### Open hyperlink

```javascript
import { Linking } from "react-native";
const privacyPolicyUrl =
  "https://privacypolicyjustvishu.blogspot.com/2024/03/telangana-holiday-list.html";
// Open the URL
Linking.openURL(privacyPolicyUrl);
```

## ICON dimensions

icon ,adaptive-icon: 1024x1024
splashscreen : 1284x2778

# Expo router

### change the app bar name

```js
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Star Birthday⭐️",
          headerRight: () => <InfoButton />,
          headerTransparent: true,
          headerTintColor: "white",
        }}
    </Stack>
  );
}
```

infoButtons.js

```js
import React from "react";
import { Button, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const InfoButton = () => {
  const handlePress = async () => {
    const url = "https://sites.google.com/view/ai-horoscope/home"; // Replace with your desired URL
    await Linking.openURL(url);
  };

  //   return <Button title="Info" onPress={handlePress} />;
  return (
    <Ionicons
      name="information-circle-outline"
      size={24}
      color="white"
      onPress={handlePress}
    />
  );
};

export default InfoButton;
```

## Add padding between header and screen

expo install react-native-safe-area-context

```js
import { SafeAreaView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

...
 const insets = useSafeAreaInsets();
...

<ScrollView
          style={[
            styles.scrollView,
            {
              paddingTop: insets.top + 60, // Add extra padding for header
              backgroundColor: '#fff'
            }
          ]}
        >
```

### Modal

https://www.npmjs.com/package/react-native-modal

```js
import React, { useState } from "react";
import { Button, Linking, View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Modal from "react-native-modal";

const InfoButton = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handlePress = async () => {
    setIsModalVisible(true);
  };

  return (
    <>
      <Ionicons
        name="information-circle-outline"
        size={24}
        color="black"
        onPress={handlePress}
      />
      <Modal
        isVisible={isModalVisible}
        backdropColor={"white"}
        backdropOpacity={1}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>
            {" "}
            Disclaimer: This app is not affiliated with the Telangana State Government.
            It provides information on Telangana public holidays for informational
            purposes only. Users are advised to refer to the official government
            website for the most accurate and up-to-date information.
          </Text>
          <Button title="Close" onPress={() => setIsModalVisible(false)} />
        </View>
      </Modal>
    </>
  );
};

export default InfoButton;
```
