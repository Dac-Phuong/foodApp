import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Login from '../Login';
import Register from '../Register';
import Home from '../HomeScreen/Home/HomeScreen'
import PublicView from '../PublicView/'
const Stack = createNativeStackNavigator();

function MyStack() {
    return (
        <NavigationContainer >
            <Stack.Navigator >  
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="PublicView" component={PublicView} />
                <Stack.Screen name="Notifications" component={Register} />
                <Stack.Screen name="Home" component={Home} />
                {/* <Stack.Screen name="Settings" component={Settings} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default MyStack