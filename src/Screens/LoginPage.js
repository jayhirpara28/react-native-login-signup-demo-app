import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  StatusBar,
  Alert,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function LoginPage({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const jsonEmail = JSON.stringify(email);
  const jsonPassword = JSON.stringify(password);

  const { height } = Dimensions.get('window');

  const validation = async () => {
    if (email === '') {
      Alert.alert('please enter your email');
    } else if (password === '') {
      Alert.alert('please enter your Password');
    } else {
      await AsyncStorage.setItem('userEmail', jsonEmail);
      await AsyncStorage.setItem('userPassword', jsonPassword);
      navigation.navigate('Home');
    }
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.scrollView}>
        <ImageBackground
          resizeMode="cover"
          source={require('../../assets/main.png')}
          style={styles.backgroundImage}>
          <View style={styles.container}>
            <Text style={styles.title}>Audio</Text>
            <Text style={styles.tagline}>
              It's modular and designed to last
            </Text>
            <View style={styles.inputView}>
              <Icon name={'mail'} style={styles.icon} size={16} />
              <TextInput
                leftIcon={<Icon name="user" size={24} />}
                style={styles.TextInput}
                placeholder="Email ID"
                placeholderTextColor="white"
                onChangeText={(e) => setEmail(e)}
              />
            </View>
            <View style={styles.inputView}>
              <Icon name={'lock'} style={styles.icon} size={16} />
              <TextInput
                style={styles.TextInput}
                placeholder="Password"
                placeholderTextColor="white"
                secureTextEntry={true}
                keyboardType="password"
                onChangeText={(e) => setPassword(e)}
              />
            </View>
            <TouchableOpacity>
              <Text style={styles.forgot_button}>Forgot Password </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.loginBtn}
              onPress={() => validation()}>
              <Text style={styles.appButtonText}>SIGN IN</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.dontHaveaccountText}>
                didn't Have Any Accout ?
                <Text style={styles.registerText}> Sign Up here</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: '10%',
    marginBottom: '3%',
    fontSize: 50,
    color: 'white',
    fontFamily: 'AppleSDGothicNeo-Medium',
  },
  tagline: {
    color: 'white',
    fontFamily: 'AppleSDGothicNeo-Medium',
    marginBottom: '50%',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  dontHaveaccountText: {
    color: 'white',
  },
  icon: {
    marginTop: 15,
    marginLeft: 5,
    color: 'white',
  },
  inputView: {
    width: '70%',
    height: 45,
    marginTop: 20,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 18,
  },
  TextInput: {
    color: 'white',
    height: 50,
    flex: 1,
    padding: 15,
  },
  forgot_button: {
    height: 20,
    margin: 10,
    fontSize: 13,
    color: 'white',
    fontWeight: 'bold',
  },
  loginBtn: {
    width: 250,
    height: 'auto',
    elevation: 8,
    backgroundColor: '#0ACF83',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 20,
    marginBottom: '5%',
  },
  appButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  loginText: {
    fontSize: 40,
    display: 'flex',
    marginBottom: 10,
  },
  registerText: {
    color: '#0ACF83',
    marginLeft: 10,
  },
  button: {
    width: 30,
    height: 30,
    marginTop: 25,
    margin: 10,
  },
  mainimage: {
    width: 300,
    height: 300,
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  backgroundImage: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: hp('100%'),
    width: wp('100%'),
  },
});
