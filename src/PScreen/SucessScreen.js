import {StyleSheet, Image, SafeAreaView} from 'react-native';
import React from 'react';
import {Layout, Text, Button} from '@ui-kitten/components';
import {useNavigation} from '@react-navigation/native';
const SucessScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Layout style={styles.MainContainer}>
        <Layout style={styles.MainHeader}>
          <Image
            style={styles.Logo}
            source={require('../../assets/VigilanceAI_logo.png')}
            resizeMode="contain"
          />
          <Image
            style={styles.SuccessGif}
            source={require('../../assets/95029-success.gif')}
            resizeMode="contain"
          />
          <Layout style={styles.Success}>
            <Text style={styles.SuccessTwo}>Success !!!</Text>
            <Text style={styles.SuccessThree}>
              Your Account has been Created
            </Text>
          </Layout>
          <Button
            onPress={() => navigation.navigate('BottomNavigator')}
            style={styles.Button}
            size="giant">
            Continue
          </Button>
        </Layout>
      </Layout>
    </SafeAreaView>
  );
};
export default SucessScreen;
const styles = StyleSheet.create({
  MainContainer: {
    height: '100%',
    paddingHorizontal: 30,
  },
  MainHeader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Logo: {
    height: 150,
    width: 150,
    marginTop: 50,
  },
  SuccessGif: {
    width: 150,
    height: 150,
    aspectRatio: 1,
    marginTop: 100,
  },
  Success: {
    marginTop: 50,
  },
  SuccessTwo: {
    textAlign: 'center',
    fontSize: 30,
    color: '#10C741',
    fontFamily: 'GTWalsheimPro-Bold',
  },
  SuccessThree: {
    paddingTop: 10,
    color: '#818181',
    fontSize: 18,
    fontFamily: 'GTWalsheimPro-Regular',
  },
  Button: {
    marginTop: 50,
    backgroundColor: '#0075A9',
    width: 300,
    borderColor: 'transparent',
  },
});
