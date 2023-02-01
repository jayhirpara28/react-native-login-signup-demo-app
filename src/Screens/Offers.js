import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView } from 'react-native';
import TabBar from '../Components/TabBar';

const OfferPage = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        <View>
          <Text>This is Offer PAge</Text>
        </View>
      </ScrollView>
    </>
  );
};

export default OfferPage;

const styles = StyleSheet.create({});
