
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as React from 'react';
import { StatusBar } from 'react-native';
import Home from './src/screens/Home';
const Stack = createNativeStackNavigator();

function App() {
  const [fontsLoaded] = useFonts({
    'SF-PRO-DISPLAY-BOLD': require('./assets/fonts/SFPRODISPLAYBOLD.ttf'),
    'SF-PRO-TEXT-BOLD': require('./assets/fonts/SFProText-Bold.ttf'),
    'SF-PRO-TEXT-MEDIUM': require('./assets/fonts/SFProText-Medium.ttf'),
    'SF-PRO-TEXT-REGULAR': require('./assets/fonts/SFProText-Regular.ttf'),
    'SF-PRO-TEXT-SEMIBOLD': require('./assets/fonts/SFProText-Semibold.ttf'),

  });
  
  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
      <StatusBar style='auto'  />
    </NavigationContainer>
  );
}

export default App;