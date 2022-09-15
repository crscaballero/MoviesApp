# MoviesApp

NOTE: This project doesn't use [expo](https://expo.dev/), it's pure [React-Native](https://reactnative.dev/).

### Test

## Android
1. Download and install [node](https://nodejs.org/) and [Android Studio](https://developer.android.com/)
2. Run `npm install`
3. With an emulator configured or a physical device connected `npm run android`

## iOS
1. Download and install [node](https://nodejs.org/) and [XCode](https://developer.apple.com/xcode/)
2. Run `npm install` & `npx pod-install`
3. With an emulator configured or a physical device connected `npm run ios`

### TODO:
- To make this project fully work on iOS it is necessary to make these steps https://github.com/oblador/react-native-vector-icons#ios using XCode or the icons won't work

### Troubleshootings
- The fetch to the API doesn't work using Android emulator, you'll have to use an iPhone, iPhone emulator or a physical android device
- Some times the app doesn't run after the first installation, if so you'll have to run it once again
- Make sure that your device has at least 1gb (recommended 2gb) of space if you are using an emulator
