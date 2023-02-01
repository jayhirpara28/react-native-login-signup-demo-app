import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon, { Icons } from '../common/Icons';
import Colors from '../common/Colors';
import ColorScreen from '../Screens/ColorScreen';
import HomePage from '../Screens/HomePage';
import * as Animatable from 'react-native-animatable';

const TabArr = [
  {
    route: 'Home',
    label: 'Home',
    type: Icons.Ionicons,
    activeIcon: 'home',
    inActiveIcon: 'home-outline',
    component: ColorScreen,
  },
  {
    route: 'Product',
    label: 'Product',
    type: Icons.Ionicons,
    activeIcon: 'headset',
    inActiveIcon: 'headset-outline',
    component: ColorScreen,
  },
  {
    route: 'Offers',
    label: 'Offers',
    type: Icons.Ionicons,
    activeIcon: 'gift',
    inActiveIcon: 'gift-outline',
    component: ColorScreen,
  },
  {
    route: 'Order',
    label: 'Order',
    type: Icons.Ionicons,
    activeIcon: 'cube',
    inActiveIcon: 'cube-outline',
    component: ColorScreen,
  },
  {
    route: 'Profile',
    label: 'Profile',
    type: Icons.FontAwesome,
    activeIcon: 'user-circle',
    inActiveIcon: 'user-circle-o',
    component: ColorScreen,
  },
];

const Tab = createBottomTabNavigator();

const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate({
        0: { scale: 0.5, rotate: '0deg' },
        1: { scale: 1.5, rotate: '360deg' },
      });
    } else {
      viewRef.current.animate({
        0: { scale: 1.5, rotate: '360deg' },
        1: { scale: 1, rotate: '0deg' },
      });
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <Animatable.View ref={viewRef} duration={600} style={styles.container}>
        <Icon
          type={item.type}
          name={focused ? item.activeIcon : item.inActiveIcon}
          color={focused ? Colors.green : Colors.black}
        />
      </Animatable.View>
    </TouchableOpacity>
  );
};

export default function AnimTab1() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          position: 'absolute',
          bottom: 16,
          right: 16,
          left: 16,
          borderRadius: 16,
        },
      }}>
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: (props) => <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
