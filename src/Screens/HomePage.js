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
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import TabBar from '../Components/TabBar';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Card } from 'react-native-paper';
const DATA = [
  {
    id: '1',
    title: 'Headphone',
    color: 'green',
  },
  {
    id: '2',
    title: 'Headband',
    color: 'green',
  },
  {
    id: '3',
    title: 'Earpads',
    color: 'green',
  },
  {
    id: '4',
    title: 'Cable',
    color: 'green',
  },
  {
    id: '5',
    title: 'Powerbank',
    color: 'green',
  },
];

const HomePage = () => {
  const [id, setId] = useState();

  const getListViewItem = (item) => {
    setId(item.id);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* <TabBar /> */}
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.Text}>
            <Text style={styles.nameText}>Hi, Jay</Text>
            <Text style={styles.welcomeText}>
              What are you looking for today?
            </Text>
          </View>
          <View>
            <Searchbar
              style={styles.searchbar}
              placeholder="Search heasphone"
              onChangeText={this.updateSearch}
            />
          </View>
        </View>
        <View style={styles.greyContainer}>
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
                        backgroundColor: item.id === id ? '#0ACF83' : '#F6F6F6',
                        color: item.id === id ? 'white' : '#7F7F7F',
                        fontSize: item.id === id ? 12 : 12,
                        marginLeft: hp(2.5),
                      },
                    ]}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          />
          <View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {/* First Card */}
              <View style={styles.viewCardBanner}>
                <Card style={styles.cardView}>
                  <View style={styles.card}>
                    <View style={styles.cardFirstView}>
                      <Text style={styles.cardText}>
                        TMT-4 Modular Headphone
                      </Text>
                      <TouchableOpacity>
                        <Text style={styles.cardshopNow}>Shop now -&gt;</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.cardSecondView}>
                      <Image source={require('../../assets/HeadPhone1.png')} />
                    </View>
                  </View>
                </Card>
              </View>
              {/* Second Card */}
              <View style={styles.viewCardBanner}>
                <Card style={styles.cardView}>
                  <View style={styles.card}>
                    <View style={styles.cardFirstView}>
                      <Text style={styles.cardText}>
                        TMA-2 Modular Headphone
                      </Text>
                      <TouchableOpacity>
                        <Text style={styles.cardshopNow}>Shop now -&gt;</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.cardSecondView}>
                      <Image source={require('../../assets/HeadPhone1.png')} />
                    </View>
                  </View>
                </Card>
              </View>
            </ScrollView>
          </View>
          <View style={styles.thirdView}>
            <View>
              <Text style={{ fontSize: 17, color: 'black' }}>
                Featured Products
              </Text>
            </View>
            <View>
              <TouchableOpacity>
                <Text style={{ fontSize: 15 }}>See All</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Second ScrollView */}
          <View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {/* Second ScrollView: First Card */}
              <View style={styles.viewCard}>
                <Card style={styles.secondCardView}>
                  <View style={styles.secondCard}>
                    <View style={styles.secondCardImage}>
                      <Image source={require('../../assets/HeadPhone1.png')} />
                    </View>
                    <View style={styles.secondCardFirstView}>
                      <Text style={{ fontSize: 16 }}>TMA-2 HD Wireless</Text>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: 'bold',
                        }}>
                        USD 360
                      </Text>
                    </View>
                  </View>
                </Card>
              </View>

              {/* Second ScrollView: Second Card */}
              <View style={styles.viewCard}>
                <Card style={styles.secondCardView}>
                  <View style={styles.secondCard}>
                    <View style={styles.secondCardImage}>
                      <Image source={require('../../assets/handsFree.png')} />
                    </View>
                    <View style={styles.secondCardFirstView}>
                      <Text style={{ fontSize: 16 }}>C02 - Cable</Text>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: 'bold',
                        }}>
                        USD 25
                      </Text>
                    </View>
                  </View>
                </Card>
              </View>

              {/* Second ScrollView: third Card */}
              <View style={styles.viewCard}>
                <Card style={styles.secondCardView}>
                  <View style={styles.secondCard}>
                    <View style={styles.secondCardImage}>
                      <Image source={require('../../assets/HeadPhone1.png')} />
                    </View>
                    <View style={styles.secondCardFirstView}>
                      <Text style={{ fontSize: 16 }}>TMA-2 HD Wireless</Text>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: 'bold',
                        }}>
                        USD 299
                      </Text>
                    </View>
                  </View>
                </Card>
              </View>

              {/* Second ScrollView: fourth Card */}
              <View style={styles.viewCard}>
                <Card style={styles.secondCardView}>
                  <View style={styles.secondCard}>
                    <View style={styles.secondCardImage}>
                      <Image source={require('../../assets/handsFree.png')} />
                    </View>
                    <View style={styles.secondCardFirstView}>
                      <Text style={{ fontSize: 16 }}>TMA-2 HD Wireless</Text>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: 'bold',
                        }}>
                        USD 149
                      </Text>
                    </View>
                  </View>
                </Card>
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginHorizontal: hp(3.5),
  },
  nameText: {
    color: 'black',
    fontSize: 20,
    marginBottom: hp(1),
  },
  welcomeText: {
    color: 'black',
    fontSize: 26,
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
    // height: hp('100%'),
  },
  changeColor: {
    color: 'green',
  },
  flatList: {
    marginHorizontal: hp(1),
    marginTop: hp(5),
  },
  cardView: {
    alignItems: 'center',
    marginHorizontal: hp(4),
  },
  secondCardView: {
    marginLeft: hp(4),
  },
  secondViewCard: {
    marginTop: hp(2),
  },
  viewCard: {
    marginTop: hp(2),
    paddingBottom: hp(2),
    marginBottom: hp(12),
  },
  viewCardBanner: {
    marginTop: hp(2),
    paddingBottom: hp(2),
  },
  card: {
    flexDirection: 'row',
    width: wp(86),
    borderRadius: 10,
    padding: 10,
  },
  secondCard: {
    flexDirection: 'column',
    width: '100%',
    height: hp(32),
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
    width: wp(20),
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
    height: hp(21),
  },
});
