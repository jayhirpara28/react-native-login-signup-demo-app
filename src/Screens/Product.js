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
    title: 'Popularity',
  },
  {
    id: '2',
    title: 'Newest',
  },
  {
    id: '3',
    title: 'Most Expensive',
  },
  {
    id: '4',
    title: 'Tranding',
  },
];

const ProductPage = ({ navigation }) => {
  const [id, setId] = useState();
  const ProductData = ProductDATA.DATA;
  // console.log(ProductData);
  const cardGap = 15;
  const cardWidth = (Dimensions.get('window').width - cardGap * 3) / 2;
  const totalCard = ProductData.length;
  console.log(totalCard);
  const getListViewItem = (item) => {
    setId(item.id);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* <ProductTabBar /> */}
      <View style={styles.container}>
        <View style={styles.Text}>
          <Text style={styles.nameText}>Headphone</Text>
          <Text style={styles.welcomeText}>TMA Wireless</Text>
        </View>
        <View style={styles.flateListView}>
          <View>
            <Icon
              name={'sliders'}
              style={styles.icon}
              size={14}
              color={'sliders'}>
              &nbsp;
              <Text style={{ fontSize: 12, color: 'black' }}>Filter</Text>
            </Icon>
          </View>
          <View>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={DATA}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={styles.flatList}>
                  <TouchableOpacity onPress={getListViewItem.bind(this, item)}>
                    <Text
                      style={[
                        styles.chnageClickedItem,
                        {
                          backgroundColor:
                            item.id === id ? '#0ACF83' : '#F6F6F6',
                          color: item.id === id ? 'white' : '#7F7F7F',
                          fontSize: item.id === id ? 13 : 13,
                        },
                      ]}>
                      {item.title}
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        </View>
      </View>
      <View style={styles.greyContainer}>
        {/* Second ScrollView */}
        <View style={{ paddingBottom: wp(55) }}>
          <ScrollView showsHorizontalScrollIndicator={false}>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                marginBottom: '100%',
              }}>
              {ProductData.map((subject, i) => {
                return (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}>
                    <View
                      key={subject.id}
                      style={{
                        marginTop: cardGap,
                        marginLeft: i % 2 !== 0 ? cardGap : 0,
                        width: cardWidth,
                        height: 255,
                        backgroundColor: 'white',
                        borderRadius: 16,
                        shadowOpacity: 0.2,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <View style={styles.viewCard}>
                        {/* <Card style={styles.secondCardView}> */}
                        <View style={styles.secondCard}>
                          <View style={styles.secondCardImage}>
                            <Image
                              source={require('../../assets/HeadPhone1.png')}
                            />
                          </View>
                          <View style={styles.secondCardFirstView}>
                            <Text style={{ fontSize: 12, color: 'black' }}>
                              {subject.title}
                            </Text>
                            <Text
                              style={{
                                fontSize: 12,
                                fontWeight: 'bold',
                                color: 'black',
                              }}>
                              USD {subject.Price}
                            </Text>
                          </View>
                          <View style={styles.ratting}>
                            <View>
                              <Icon
                                name={'star'}
                                style={styles.star}
                                size={13}
                                color={'gold'}
                              />
                            </View>
                            <View>
                              <Text
                                style={{
                                  paddingLeft: 2,
                                  fontSize: 12,
                                  color: 'black',
                                }}>
                                {subject.Ratting}
                              </Text>
                            </View>
                            <View>
                              <Text
                                style={{
                                  paddingLeft: 20,
                                  fontSize: 12,
                                  color: 'black',
                                }}>
                                {subject.Reviews} Reviews
                              </Text>
                            </View>
                          </View>
                        </View>
                        {/* </Card> */}
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
};
export default ProductPage;
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginHorizontal: hp(3.5),
  },
  flateListView: {
    flexDirection: 'row',
  },
  nameText: {
    color: 'black',
    fontSize: 20,
    marginBottom: hp(1),
  },
  welcomeText: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: hp(3),
  },
  Text: {
    marginTop: hp(3),
  },
  searchbar: {
    borderRadius: 10,
  },
  greyContainer: {
    marginTop: hp(5),
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: '#F6F6F6',
    overflow: 'hidden',
    // height: 'auto',
  },
  flatList: {
    marginHorizontal: hp(1),
  },
  cardView: {
    alignItems: 'center',
    marginHorizontal: hp(4),
  },
  secondCardView: {
    marginLeft: hp(4),
    width: wp(40),
  },
  ScrollView: {
    flexDirection: 'row',
  },
  secondViewCard: {
    marginTop: hp(2),
  },
  viewCard: {
    marginTop: hp(2),
    paddingBottom: hp(2),
  },
  secondCard: {
    flexDirection: 'column',
    width: '100%',
    height: hp(34),
    borderRadius: 10,
    padding: 10,
  },
  cardFirstView: {
    marginTop: 15,
    width: '50%', // is 50% of container width
  },
  secondCardFirstView: {
    marginTop: 15,
    width: '100%',
  },
  cardSecondView: {
    marginTop: 20,
  },
  cardText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
  },
  cardshopNow: {
    fontWeight: 'bold',
    marginTop: 20,
    color: '#0ACF83',
    fontSize: 17,
  },
  chnageClickedItem: {
    height: 25,
    padding: 3,
    borderRadius: 50,
    textAlign: 'center',
    fontSize: 14,
    // width: wp(20),
  },
  featuredProduct: {
    color: 'black',
  },
  thirdView: {
    marginHorizontal: hp(6),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  secondCardImage: {
    height: hp(18),
  },
  icon: {
    height: 30,
    width: 60,
    padding: 3,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
    lineHeight: 20,
    color: 'black',
  },
  star: {
    // position: 'absolute',
    // backgroundColor: 'gold',
  },
  ratting: {
    paddingTop: 2,
    flexDirection: 'row',
    marginTop: 6,
  },
});
