import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

import { SignupEmailModal } from './components/SingupEmailModal';
import { SignupFacebookModal } from './components/SignupFacebookModal';

import colors from './colors';

const App = (): JSX.Element => {
  const navigation = useNavigation();

  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showFacebookModal, setShowFacebookModal] = useState(false);

  const onPressEmail = () => {
    setShowEmailModal(true);
  };

  const onPressFacebook = () => {
    setShowFacebookModal(true);
  };

  const onPressLogin = () => {
    navigation.navigate('generic'); // TODO: Fix navigation types
  };

  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.topImageContainer}>
          <Image
            resizeMode="contain"
            source={require('./images/cat.png')}
            style={styles.topImage}
          />
        </View>
        <View style={styles.bottomCard}>
          <Text style={styles.bottomCardTitle}>Bienvenido/a a Handyman</Text>
          <Pressable
            onPress={onPressEmail}
            style={[styles.customButton, styles.signInButton]}>
            <FontAwesomeIcon
              color={colors.white}
              icon={faEnvelope}
              size={18}
              style={styles.customIcon}
            />
            <Text style={[styles.customButtonText, styles.signInButtonText]}>
              Registro con correo electrónico
            </Text>
          </Pressable>
          <Pressable
            onPress={onPressFacebook}
            style={[styles.customButton, styles.facebookButton]}>
            <FontAwesomeIcon
              icon={faFacebookF}
              color={colors.dark}
              size={18}
              style={styles.customIcon}
            />
            <Text style={[styles.customButtonText, styles.facebookButtonText]}>
              Registro con Facebook
            </Text>
          </Pressable>
          <View style={styles.signUpContainer}>
            <Text style={styles.loginText}>¿Ya tienes cuenta? </Text>
            <Pressable onPress={onPressLogin}>
              <Text style={styles.loginButtonText}>INICIA SESIÓN</Text>
            </Pressable>
          </View>
        </View>
      </View>
      {/* Sing up with email modal */}
      <SignupEmailModal
        visible={showEmailModal}
        onDismiss={() => setShowEmailModal(false)}
      />
      {/* Sign up with modal */}
      <SignupFacebookModal
        visible={showFacebookModal}
        onDismiss={() => setShowFacebookModal(false)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
    flex: 1,
  },
  topImageContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
  },
  topImage: {
    flex: 1,
    left: -14,
  },
  bottomCard: {
    backgroundColor: colors.primary,
    borderTopEndRadius: 35,
    borderTopStartRadius: 35,
    paddingHorizontal: 25,
    paddingVertical: 35,
  },
  bottomCardTitle: {
    color: colors.white,
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
  },
  customButton: {
    alignItems: 'center',
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    padding: 20,
  },
  customButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  signInButton: {
    backgroundColor: colors.secondary,
  },
  signInButtonText: {
    color: colors.white,
  },
  facebookButton: {
    backgroundColor: colors.white,
  },
  facebookButtonText: {
    color: colors.dark,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loginText: {
    color: colors.white,
    textAlign: 'center',
  },
  loginButtonText: {
    color: colors.white,
    fontWeight: 'bold',
  },
  customIcon: {
    marginRight: 10,
  },
});

export default App;
