/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Alert,
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';

export const tabBar = () => {
  const _renderIcon = (routeName: string, selectedTab: string) => {
    let icon = 'home';

    switch ('Home') {
      case 'title1':
        icon = 'ios-home-outline';
        break;
      case 'title2':
        icon = 'settings-outline';
        break;
    }

    return (
      <Ionicons
        name={icon}
        size={25}
        color={'Home' === 'Home' ? 'black' : 'gray'}
      />
    );
  };
  const renderTabBar = ({ routeName, selectedTab, navigate }: any) => {
    return (
      <TouchableOpacity
        onPress={() => navigate('Home')}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {_renderIcon('home', 'home')}
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <CurvedBottomBar.Navigator
          style={styles.bottomBar}
          strokeWidth={0.5}
          strokeColor="#DDDDDD"
          height={55}
          circleWidth={55}
          bgColor="white"
          initialRouteName="title1"
          borderTopLeftRight
          renderCircle={({ selectedTab, navigate }) => (
            <Animated.View style={styles.btnCircle}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: 'center',
                }}
                onPress={() => Alert.alert('Click Action')}>
                <Ionicons name={'apps-sharp'} color="gray" size={25} />
              </TouchableOpacity>
            </Animated.View>
          )}
          tabBar={renderTabBar}>
          <CurvedBottomBar.Screen
            name="title1"
            position="LEFT"
            component={() => (
              <View style={{ backgroundColor: '#BFEFFF', flex: 1 }} />
            )}
          />
          <CurvedBottomBar.Screen
            name="title2"
            component={() => (
              <View style={{ backgroundColor: '#FFEBCD', flex: 1 }} />
            )}
            position="RIGHT"
          />
        </CurvedBottomBar.Navigator>
      </NavigationContainer>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  button: {
    marginVertical: 5,
  },
  bottomBar: {},
  btnCircle: {
    width: 60,
    height: 60,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
    bottom: 30,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: 'gray',
  },
  img: {
    width: 30,
    height: 30,
  },
});
