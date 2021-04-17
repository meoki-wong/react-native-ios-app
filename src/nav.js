
import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Register from './page/account/register.jsx'
import Login from './page/account/login'
import UserInfo from './page/account/userInfo'
function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="登录" onPress={()=>navigation.navigate('Login')}/>
      <Button title="填写资料" onPress={()=>navigation.navigate('UserInfo')}/>
      <Button title="注册" onPress={()=>navigation.navigate('Register')}/>
    </View>
  );
}

const Stack = createStackNavigator();

function Nav() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="UserInfo" component={UserInfo} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Nav;