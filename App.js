import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './Project/Routes/StackNavigator'
import Account from './Project/HomeScreen/Account';
import { useFonts } from "expo-font";
export default function App() {
  let [fontsLoaded] = useFonts({
    'Gilroy-Semi': require('./assets/font/Gilroy-SemiBold.ttf'),
    'Gilroy-Bold': require('./assets/font/Gilroy-BoldItalic.ttf'),
    'Gilroy-ExtraBold': require('./assets/font/Gilroy-ExtraBold.otf'),
    'Gilroy-Light': require('./assets/font/Gilroy-Light.otf'),
    'Gilroy-Regula': require('./assets/font/Gilro-Regular.otf'),
  });
  if (!fontsLoaded) {
    return console.log('loi roi kia')
  }
  return (
    // <MyStack>
    // </MyStack>
    <Account />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
