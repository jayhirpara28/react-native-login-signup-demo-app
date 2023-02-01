import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EncryptedStorage from 'react-native-encrypted-storage';
import MainRoutes from './MainRoutes';
import AuthRoute from './AuthRoute';
import { NavigationContainer } from '@react-navigation/native';

const Routes = () => {
  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();

  useEffect(() => {
    AsyncStorage.getItem('userEmail').then((response) => {
      setUserEmail(response);
    });
    AsyncStorage.getItem('userPassword').then((response) => {
      setUserPassword(response);
    });
  }, []);

  return (
    <NavigationContainer independent={true}>
      {userEmail !== null && userPassword !== null ? (
        <MainRoutes />
      ) : (
        <AuthRoute />
      )}
    </NavigationContainer>
  );
};

export default Routes;
