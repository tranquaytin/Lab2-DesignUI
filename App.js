import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, View ,Text} from 'react-native';
import { fetchContacts, fetchRandomContact } from './utility/api';
import Contacts from './screens/contacts';
import Profile from './screens/profile';
import StackNavigator from './router/routes'
import Favorites from './screens/Favorites';
import User from './screens/User';
import TabNavigator from './router/routes';
import { Provider } from 'react-redux';
import store from './screens/store';
export default function App() {
  // useEffect(()=>{
  //   fetchRandomContact().then(data=>console.log(data))
  // },[])
  return (
    // <View style={{flex:1}}>
    // </View>
    <Provider store={store}>
      <TabNavigator/>
      <StatusBar style="auto" />
   </Provider>
  );
};