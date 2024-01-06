import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native' 
import User from '../../../Screens/User'
import AddUser from '../../../Screens/AddUser'

const Stack = createStackNavigator()
const AppNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='User'>
            <Stack.Screen name = "User" component={User}  /> 
            <Stack.Screen name = "AddUser" component={AddUser} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation

const styles = StyleSheet.create({})

// options={{headerShown:false}}