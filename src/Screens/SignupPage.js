import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  StatusBar,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function LoginPage({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validation = () => {
    if (email === '') {
      Alert.alert('please enter your email');
    } else if (password === '') {
      Alert.alert('please enter your Password');
    } else {
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
                onChangeText={(email) => setEmail(email)}
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
                onChangeText={(password) => setPassword(password)}
              />
            </View>
            <TouchableOpacity
              style={styles.loginBtn}
              onPress={() => validation()}>
              <Text style={styles.appButtonText}>SIGN UP</Text>
            </TouchableOpacity>
            <View style={styles.row}>
              <TouchableOpacity>
                <Image
                  style={styles.button}
                  source={require('../../assets/Google_Auth.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.row}>
                <Image
                  style={styles.button}
                  source={require('../../assets/facebook_Auth.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.row}>
                <Image
                  style={styles.button}
                  source={require('../../assets/Apple_Auth.png')}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.dontHaveaccountText}>
                If you have an account?
                <Text style={styles.registerText}> Sign in here</Text>
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
    marginBottom: '35%',
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
  loginwith: {
    fontSize: 14,
    marginTop: 10,
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
    width: 40,
    height: 40,
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
    justifyContent: 'center',
    flex: 1,
    height: hp('100%'),
    width: wp('100%'),
  },
});
