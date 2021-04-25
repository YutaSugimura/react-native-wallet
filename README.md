# React Native Template

- [React Native](https://reactnative.dev/) The version we are using is 0.64.0.
  - [github](https://github.com/facebook/react-native)
  - [react-native-community/cli](https://github.com/react-native-community/cli)

## Setup
```zsh
  yarn install
  yarn ios:pod
```

## Run in emulator
```zsh
  # ios
  yarn ios

  # android
  yarn android
```

## Build Android
```zsh
  yarn android:build

  # Test
  yarn android:releaseTest
```

## Other commands
```zsh
  # storybook
  yarn storybook
  yarn storybook:build

  # bundle-visualize
  yarn bundle-visualize
```

## Frequently used library list
- [react-navigation](https://reactnavigation.org/)
- [async-storage](https://github.com/react-native-async-storage/async-storage)
- [react-native-bootsplash](https://github.com/zoontek/react-native-bootsplash)
- [react-native-firebase](https://rnfirebase.io/)
- [react-native-push-notification](https://github.com/zo0r/react-native-push-notification)
- [push-notification-ios](https://github.com/react-native-push-notification-ios/push-notification-ios)
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)