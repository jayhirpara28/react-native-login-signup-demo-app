import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView } from 'react-native';
import TabBar from '../Components/TabBar';

const OrderPage = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        <View>
          <Text>This is Order Page</Text>
        </View>
      </ScrollView>
    </>
  );
};

export default OrderPage;

const styles = StyleSheet.create({});
