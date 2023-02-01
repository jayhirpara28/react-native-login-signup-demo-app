/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  StatusBar,
  SafeAreaView,
  Text,
  TouchableOpacity,
  SectionList,
} from 'react-native';
import ProfileComponent from '../Components/ProfileComponent';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Feather';

import { Alert } from 'react-native';

const Profile = ({ navigation }) => {
  const handleLogout = (item) => {
    if (item === 'Logout') {
      AsyncStorage.removeItem('userPassword');
      navigation.navigate('Login');
    } else {
      Alert.alert('The Application Is In Developing Stage');
    }
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <ProfileComponent />
        <View style={styles.topView}>
          <View style={styles.profileImageView}>
            <Image
              style={{ marginBottom: hp(3) }}
              source={require('../../assets/profile.png')}
            />
          </View>
          <View style={styles.profileText}>
            <Text style={{ fontSize: 17, color: 'black' }}>Jay Hirpara</Text>
            <Text style={{ fontSize: 12 }}>jhirpara10@hotmail.com</Text>
          </View>
        </View>
      </SafeAreaView>
      <View style={styles.selectionContainer}>
        <SectionList
          showsVerticalScrollIndicator={false}
          sections={[
            {
              title: 'General',
              data: ['Edit Profile', 'Notifications', 'Wishlist'],
              icon: ['edit', 'bell', 'wind'],
            },
            {
              title: 'Legal',
              data: ['Terms of Use', 'Privicy Policy'],
              icon: ['command', 'shield'],
            },
            {
              title: 'Personal',
              data: ['Report a Bug', 'Logout'],
              icon: ['git-branch', 'log-out'],
            },
          ]}
          renderItem={({ item, icon }) => (
            <TouchableOpacity onPress={() => handleLogout(item)}>
              <Icon name={icon} style={styles.icon} size={13} color={'gold'} />
              <Text style={styles.item}>{item}</Text>
            </TouchableOpacity>
          )}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
          )}
          keyExtractor={(item, index) => `basicListEntry-${index}`}
        />
      </View>
    </>
  );
};
export default Profile;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: hp(4),
  },
  navImage: {
    alignContent: 'center',
  },
  profileImageView: {
    marginTop: hp(5),
  },
  topView: {
    flexDirection: 'row',
    borderBottomColor: '#BABABA',
    borderBottomWidth: 1,
  },
  profileText: {
    marginHorizontal: hp(2.5),
    marginTop: hp(8),
  },
  selectionContainer: {
    flex: 1,
    paddingTop: 22,
    marginHorizontal: hp(4),
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    marginBottom: 6,
    fontSize: 15,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,0.6)',
  },
  item: {
    padding: 10,
    fontSize: 15,
    height: 44,
    borderBottomWidth: 1,
    borderColor: '#F6F6F6',
    color: 'black',
  },
});
