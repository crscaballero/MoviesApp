# MoviesApp

Small React-Native application connects to the [TheMovieDB](https://www.themoviedb.org/) API to retrieve and show the latest movies information.

![Screenshot_20220915-184205](https://user-images.githubusercontent.com/48134692/190539533-cabdc570-5c8b-49e6-828a-1e7cfcc40f13.png)

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
#### iOS
There are a few pending steps to make this app fully works on iOS and to do them is necessary to use a Mac computer
1. Install icons following [these steps](https://github.com/oblador/react-native-vector-icons#ios)
2. Generate the icon image for the app, [this website](https://appicon.co/) helps to do that
3. Configure the SplashScreen, follow [these steps](https://github.com/crazycodeboy/react-native-splash-screen#installation)

### Troubleshooting
- The fetch to the API doesn't work using Android emulator, you'll have to use an iPhone, iPhone emulator or a physical android device
- Some times the app doesn't run after the first installation, if so you'll have to run it once again
- Make sure that your device has at least 1gb (recommended 2gb) of space if you are using an emulator

### Resources
- TO create a react-native app from zero without expo & using typescript you can run this command `npx react-native init AwesomeTSProject --template react-native-template-typescript`
- To create the Icons for the Android App [this](https://romannurik.github.io/AndroidAssetStudio/icons-launcher.html#foreground.type=clipart&foreground.clipart=android&foreground.space.trim=1&foreground.space.pad=0.25&foreColor=rgba(96%2C%20125%2C%20139%2C%200)&backColor=rgb(68%2C%20138%2C%20255)&crop=0&backgroundShape=square&effects=none&name=ic_launcher) and [this](https://appicon.co/) for iPhone App
