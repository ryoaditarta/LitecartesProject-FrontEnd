import React, { useCallback, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './FirebaseConfig';
import { User } from 'firebase/auth';



import List from './src/screens/List/List';
import LoginOrRegister from './src/screens/LoginOrRegister/LoginOrRegister';
import Pretest from './src/screens/Pretest/Pretest';
import YaySelesaiPretest from './src/screens/YaySelesaiPretest/YaySelesaiPretest';
import Register from './src/screens/Register/Register';
import Login from './src/screens/Login/Login';
import MainMenu from './src/screens/MainMenu/MainMenu';
import DoTasks from './src/screens/DoTasks/DoTasks';
import EvaluationScreen from './src/screens/EvaluationScreen/EvaluationScreen';
import TesPretest from './src/screens/TesPretest/TesPretest';
import MapTask from './src/screens/MapTask/MapTask';
import Leaderboard from './src/screens/Leaderboard/Leaderboard';
import Profile from './src/screens/Profile/Profile';


const Stack = createNativeStackNavigator();

const InsideStack = createNativeStackNavigator();

function InsideLayout() {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen options={{ headerShown: false }} name="litecartes" component={Pretest} />
      <InsideStack.Screen options={{ headerShown: false }} name="litecartes" component={YaySelesaiPretest} />
      {/* <InsideStack.Screen name="litecartes" component={Details} /> */}
    </InsideStack.Navigator>
  )
}
export default function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log(user);
      setUser(user);
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginOrRegister'>
        {user != null ? (
          <Stack.Screen name="InsideLayout" component={MainMenu} options={{ headerShown: false }} />
        ) : (
          <Stack.Screen name="LoginOrRegister" component={LoginOrRegister} options={{ headerShown: false }} />
        )}
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false , animation: 'fade'}} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false , animation: 'fade'}} />
        <Stack.Screen name="Pretest" component={Pretest} options={{ headerShown: false , animation: 'fade'}} />
        <Stack.Screen name="YaySelesaiPretest" component={YaySelesaiPretest} options={{ headerShown: false , animation: 'fade'}} />
        <Stack.Screen name="MainMenu" component={MainMenu} options={{ headerShown: false , animation: 'fade'}} />
        <Stack.Screen name="DoTasks" component={DoTasks} options={{ headerShown: false , animation: 'fade'}} />
        <Stack.Screen name="EvaluationScreen" component={EvaluationScreen} options={{ headerShown: false , animation: 'fade'}} />
        <Stack.Screen name="TesPretest" component={TesPretest} options={{ headerShown: false , animation: 'fade'}} />
        <Stack.Screen name="MapTask" component={MapTask} options={{ headerShown: false, animation: 'fade' }} />
        <Stack.Screen name="Leaderboard" component={Leaderboard} options={{ headerShown: false, animation: 'fade' }} />
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false, animation: 'fade' }} />

      </Stack.Navigator>
      {/* <LoginOrRegister/> */}
      {/* <Pretest/> */}
      {/* <YaySelesaiPretest/> */}
      {/* <Register/> */}
      {/* <Login/> */}

    </NavigationContainer>
  );
}