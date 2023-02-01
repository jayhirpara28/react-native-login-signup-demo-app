/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View, StyleSheet, Dimensions } from 'react-native';
import { Colors, Constants } from '../common';
import TabNavBar from '../Components/TabBar';

const { height } = Dimensions.get('window');
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import LoginPage from '../Screens/LoginPage';
import SignUpPage from '../Screens/SignupPage';
import HomePage from '../Screens/HomePage';
import Product from '../Screens/Product';
import Profile from '../Screens/Profile';

const AuthRoute = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="SignUp" component={SignUpPage} />
      {/* <Stack.Screen name="Home" component={TabNavBar} /> */}
    </Stack.Navigator>
  );
};

const TabNav = ({ focused }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: { fontSize: 14 },
      }}
      options={{
        tabBarIcon: () => (
          <View>
            <Image
              source={require('../../assets/Logo.png')}
              style={{
                width: 25,
                height: 25,
              }}
            />
          </View>
        ),
      }}
      initialRouteName="First"
      tabBarOptions={{
        labelStyle: {
          fontFamily: Constants.fontRegular,
          fontSize: 11,
        },
        style: {
          height: height * 0.1,
          backgroundColor: '#ffff',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          position: 'absolute',
          zIndex: 1,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={[styles.tabBarIconView]}>
              <Image
                source={require('../../assets/Icon/home.png')}
                style={{
                  width: focused ? 25 : 20,
                  height: focused ? 25 : 20,
                  resizeMode: 'contain',
                  tintColor: focused ? Colors.secondary : '#999B9F',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Product"
        component={Product}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={[styles.tabBarIconView]}>
              <Image
                source={require('../../assets/Icon/headphones.png')}
                style={{
                  width: focused ? 25 : 20,
                  height: focused ? 25 : 20,
                  resizeMode: 'contain',
                  tintColor: focused ? Colors.secondary : '#999B9F',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={[styles.tabBarIconView]}>
              <Image
                source={require('../../assets/Icon/user.png')}
                style={{
                  width: focused ? 25 : 20,
                  height: focused ? 25 : 20,
                  resizeMode: 'contain',
                  tintColor: focused ? Colors.secondary : '#999B9F',
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AuthRoute;

const styles = StyleSheet.create({
  tabBarIconView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
