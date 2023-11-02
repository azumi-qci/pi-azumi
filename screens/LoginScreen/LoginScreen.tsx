import React, { FC, useState } from 'react';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

import { LoginEmailModal } from '../../components/LoginEmailModal';

import { LoginNavigationProp } from '../../types/NavigationTypes';

import colors from '../../colors';

const LoginScreen: FC = () => {
  const navigation = useNavigation<LoginNavigationProp>();
  const [showModal, setShowModal] = useState(false);

  const onPressSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <>
      <LoginEmailModal
        visible={showModal}
        onDismiss={() => setShowModal(false)}
      />
      {/* Content */}
      <View style={styles.mainContainer}>
        <View style={styles.topImageContainer}>
          <Image
            resizeMode="contain"
            source={require('../../images/cat.png')}
            style={styles.topImage}
          />
        </View>
        <View style={styles.bottomCard}>
          <Text style={styles.bottomCardTitle}>Bienvenido/a a Handyman</Text>
          <Pressable
            style={[styles.customButton, styles.signInButton]}
            onPress={() => setShowModal(true)}>
            <FontAwesomeIcon
              color={colors.white}
              icon={faEnvelope}
              size={18}
              style={styles.customIcon}
            />
            <Text style={[styles.customButtonText, styles.signInButtonText]}>
              Entrar con correo electrónico
            </Text>
          </Pressable>
          <Pressable style={[styles.customButton, styles.facebookButton]}>
            <FontAwesomeIcon
              icon={faFacebookF}
              color={colors.dark}
              size={18}
              style={styles.customIcon}
            />
            <Text style={[styles.customButtonText, styles.facebookButtonText]}>
              Entrar con Facebook
            </Text>
          </Pressable>
          <View style={styles.signUpContainer}>
            <Text style={styles.noAccountText}>¿No tienes cuenta? </Text>
            <Pressable onPress={onPressSignUp}>
              <Text style={styles.signUpButtonText}>REGISTRATE</Text>
            </Pressable>
          </View>
        </View>
      </View>
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
  noAccountText: {
    color: colors.white,
    textAlign: 'center',
  },
  signUpButtonText: {
    color: colors.white,
    fontWeight: 'bold',
  },
  customIcon: {
    marginRight: 10,
  },
});

export default LoginScreen;
