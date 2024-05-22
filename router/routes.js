import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createStackNavigator } from '@react-navigation/stack'
import Contacts from '../screens/contacts'
import Profile from '../screens/profile'
import colors from '../utility/colors'
import {MaterialIcons} from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Favorites from '../screens/Favorites'
import User from '../screens/User'
import Options from '../screens/Options'
import { createDrawerNavigator } from '@react-navigation/drawer'

const getDrawerItemIcon = icon => ({tintColor}) =>(
  <MaterialIcons name={icon} size={22} style={{color:tintColor}}/>
);

const getTabBarIcon = icon => ({tintColor}) => (
  <MaterialIcons name={icon} size={26} style={{color:{tintColor}}} />
);


const Stack = createStackNavigator();
const StackNavigator = ()=>{
  return (
        <Stack.Navigator initialRouteName='Contacts' screenOptions={{headerShown:false, headerTintColor:'white', headerStyle:{backgroundColor:'tomato'}, headerTitleAlign:'center'}}>
            <Stack.Screen name='Contacs' component={Contacts} options={{title:"Contacts"}} ></Stack.Screen>
            <Stack.Screen name='Profile' component={Profile}
            options={({route})=>{
                const {contact} = route.params;
                console.log(contact)
                const{name} = contact;
                return {
                  title: name.split(' ')[0],
                  headerTintColor:'white',
                  headerStyle:{
                    backgroundColor:colors.blue,
                  }
                };
              }
            }
            />
        </Stack.Navigator>
  )
}
const FavoritesScreens = () => {
  return (<Stack.Navigator initialRouteName='Favorites' screenOptions={{headerShown:false}}>
      <Stack.Screen name='Favorites' component={Favorites} options={{title:"Favorites"}} />
      <Stack.Screen name='Profile' component={Profile} options={{title:"Profile"}} />
  </Stack.Navigator>)
}

const UserSreens = ({navigation})=>{
  return (
    <Stack.Navigator initialRouteName='User'>
        <Stack.Screen name='User' component={User} options={{
          headerTitle:"Me", headerTintColor:'white', headerStyle:{backgroundColor:colors.blue}, headerRight: ()=>(
              <MaterialIcons name='settings' size={24} style={{color:'white', marginRight:10}} onPress={()=>navigation.navigate('Options')} />
          )
        }}/>
        <Stack.Screen name='Options' component={Options} options={{title:"Options"}} />
    </Stack.Navigator>
  )
}

const Tab = createMaterialBottomTabNavigator();
const TabNavigator = () =>{
  return (
    <NavigationContainer>
        <Tab.Navigator initialRouteName='ContactsScreens' barStyle={{backgroundColor: colors.blue}} labeled={false}
        activeColor={colors.greyLight} inactiveColor={colors.greyDard}>
          <Tab.Screen name='Drawerhehe' component={DrawerNavigator} options={{tabBarIcon:getTabBarIcon('list')}}></Tab.Screen>
          <Tab.Screen name='FavoritesScreens' component={FavoritesScreens} options={{tabBarIcon:getTabBarIcon('star')}}></Tab.Screen>
          <Tab.Screen name='UserScreens' component={UserSreens} options={{tabBarIcon:getTabBarIcon('person')}}></Tab.Screen>
        </Tab.Navigator>
    </NavigationContainer>
  )
}

const Drawer= createDrawerNavigator();
const DrawerNavigator = ()=>{
  return (
    <Drawer.Navigator initialRouteName='ContactsScreen'>
    <Drawer.Screen name='ContactsScreen' component={StackNavigator} options={{drawerIcon:getDrawerItemIcon('list')}}/>
    <Drawer.Screen name='FavoritesScreens' component={FavoritesScreens} options={{drawerIcon:getDrawerItemIcon('star')}}/>
    <Drawer.Screen name='UserScreens' component={UserSreens} options={{drawerIcon:getDrawerItemIcon('person')}}/>
</Drawer.Navigator>
)
}
export default TabNavigator;