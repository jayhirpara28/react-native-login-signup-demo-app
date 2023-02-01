import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  StatusBar,
  SafeAreaView,
  Text,
} from 'react-native';

export default function TabBar() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.navImage}>
          <Text style={styles.profileText}>Profile</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  navImage: {
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileText: {
    color: 'black',
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },
});
