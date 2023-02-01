/* eslint-disable no-unreachable */
/* eslint-disable no-self-compare */
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Styles from '../common/Styles';
import Colors from '../common/Colors';
import MyHeader from '../Components/MyHeader';
import HomePage from '../Screens/HomePage';
import Profile from '../Screens/Profile';
import Product from '../Screens/Product';
import Offers from '../Screens/Offers';
import Order from '../Screens/Orders';

export default function ColorScreen({ route, navigation }) {
  const viewRef = React.useRef(null);
  const [bgColor, setBgColor] = useState();

  const Redirect = () => {
    // console.log(route.name);
    if (route.name === 'Product') {
      return (
        <View>
          <Product />
        </View>
      );
    } else if (route.name === 'Profile') {
      return (
        <View>
          <Profile />
        </View>
      );
    } else if (route.name === 'Offers') {
      return (
        <View>
          <Offers />
        </View>
      );
    } else if (route.name === 'Order') {
      return (
        <View>
          <Order />
        </View>
      );
    } else if (route.name === 'Home') {
      return (
        <View>
          <HomePage />
        </View>
      );
    } else {
      return <></>;
    }
  };
  // useEffect(() => {
  //   switch (route.name) {
  //     case 'Home': {
  //       <HomePage />;
  //       break;
  //     }
  //     case 'Search': {
  //       setBgColor(Colors.green);
  //       break;
  //     }
  //     case 'Add': {
  //       setBgColor(Colors.red);
  //       break;
  //     }
  //     case 'Account': {
  //       setBgColor(Colors.purple);
  //       break;
  //     }
  //     case 'Like': {
  //       setBgColor(Colors.yellow);
  //       break;
  //     }
  //     default:
  //       setBgColor(Colors.white);
  //   }
  // }, []);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      viewRef.current.animate({ 0: { opacity: 0.5 }, 1: { opacity: 1 } });
    });
    return () => unsubscribe;
  }, [navigation]);
  return (
    <View style={Styles.container}>
      <MyHeader
        menu
        onPressMenu={() => navigation.goBack()}
        title={route.name}
        right="more-vertical"
        onRightPress={() => console.log('right')}
        route={route}
      />
      <Animatable.View
        ref={viewRef}
        easing={'ease-in-out'}
        style={Styles.container}>
        <View>{Redirect()}</View>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({});
