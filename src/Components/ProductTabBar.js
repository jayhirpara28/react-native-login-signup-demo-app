import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  StatusBar,
  SafeAreaView,
  Text,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

export default function TabBar() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.navImage}>
          <TouchableOpacity>
            <Icon
              name={'chevron-left'}
              style={styles.icon}
              size={25}
              color={'black'}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.title}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name={'shopping-cart'}
              style={styles.icon}
              size={25}
              color={'black'}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  navImage: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
