/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  ScrollView,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import ProductTabBar from '../Components/ProductTabBar';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import ProductDATA from '../Helper/ProductData.json';

const DATA = [
  {
    id: '1',
    title: 'My Orders',
  },
  {
    id: '2',
    title: 'My Favorites',
  },
  {
    id: '3',
    title: 'Recent View Items',
  },
  {
    id: '4',
    title: 'Settings',
  },
  {
    id: '5',
    title: 'Logout',
  },
];

const Profile = () => {
  const [id, setId] = useState();

  const getListViewItem = (item) => {
    setId(item.id);
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* <ProductTabBar /> */}
      <View style={{ flex: 1 }}>
        <View
          style={{
            // marginTop: 10,
            marginHorizontal: hp(6.5),
            height: hp(65),
            backgroundColor: '#F9F9F9',
            borderRadius: 16,
            shadowOpacity: 1,
            justifyContent: 'center',
            top: hp(8),
            zIndex: 1,
          }}>
          <View style={styles.profileImageView}>
            <View style={styles.round}>
              <Image source={require('../../assets/profile.png')} />
            </View>
          </View>

          <View
            style={{
              bottom: hp(3),
              borderBottomWidth: 1.5,
              borderBottomColor: '#BABABA',
              marginHorizontal: hp(5.5),
            }}>
            <Text
              style={{
                fontSize: 23,
                color: 'black',
                textAlign: 'center',
              }}>
              Jay Hirpara
            </Text>
            <Text
              style={{
                fontSize: 14,
                textAlign: 'center',
                marginBottom: hp(2),
              }}>
              jhirpara10@hotmail.com
            </Text>
          </View>
          {DATA.map((item) => {
            return (
              <>
                <View style={styles.listView}>
                  <TouchableOpacity>
                    <Text style={styles.text}>{item.title}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Icon
                      name={'chevron-right'}
                      style={styles.icon}
                      size={16}
                      color={'black'}
                    />
                  </TouchableOpacity>
                </View>
              </>
            );
          })}
        </View>
        <View style={styles.greyContainer} />
      </View>
    </>
  );
};
export default Profile;
const styles = StyleSheet.create({
  greyContainer: {
    marginTop: hp(5),
    borderTopLeftRadius: 150,
    borderTopRightRadius: 150,
    backgroundColor: '#0ACF83',
    height: hp(45),
    bottom: hp(15),
  },
  profileImageView: {
    bottom: hp(3.5),
    alignItems: 'center',
  },
  round: {
    alignItems: 'center',
    borderColor: '#0ACF83',
    borderWidth: 2,
    borderRadius: 100,
  },
  text: {
    fontSize: 18,
    margin: 8,
    color: 'black',
  },
  icon: {
    margin: 13,
  },
  listView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: hp(3.5),
  },
});
