import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import MemoCreateScreen from './src/screens/MemoCreateScreen';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MemoDetail"
        screenOptions={{
          headerTitle: 'React Native Memo App',
          headerStyle: { backgroundColor: '#467FD3' },
          headerTitleStyle: { color: '#ffffff' },
          headerTintColor: '#ffffff',
          headerBackTitle: 'Back'
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="MemoList" component={MemoListScreen} />
        <Stack.Screen name="MemoDetail" component={MemoDetailScreen} />
        <Stack.Screen name="MemoEdit" component={MemoEditScreen} />
        <Stack.Screen name="MemoCreate" component={MemoCreateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
