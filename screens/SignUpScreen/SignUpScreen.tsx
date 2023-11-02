import { FC, useCallback, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

import { SignupEmailModal } from '../../components/SingupEmailModal';
import { SignupFacebookModal } from '../../components/SignupFacebookModal';

import colors from '../../colors';

const SignUpScreen: FC = () => {
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showFacebookModal, setShowFacebookModal] = useState(false);

  const onPressSignUpEmail = useCallback(() => {
    setShowEmailModal(true);
  }, []);

  const onPressSingUpFacebook = useCallback(() => {
    setShowFacebookModal(true);
  }, []);

  const onDismissEmailModal = useCallback(() => {
    setShowEmailModal(false);
  }, []);

  const onDismissFacebookModal = useCallback(() => {
    setShowFacebookModal(false);
  }, []);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.buttonsContainer}>
          <Pressable
            style={[styles.customButton, styles.signInButton]}
            onPress={onPressSignUpEmail}>
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
            style={[styles.customButton, styles.facebookButton]}
            onPress={onPressSingUpFacebook}>
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
        </View>
      </View>
      {/* Email sign up */}
      <SignupEmailModal
        visible={showEmailModal}
        onDismiss={onDismissEmailModal}
      />
      {/* Facebook sign up */}
      <SignupFacebookModal
        visible={showFacebookModal}
        onDismiss={onDismissFacebookModal}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonsContainer: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    marginHorizontal: 15,
    paddingHorizontal: 20,
    paddingVertical: 50,
    elevation: 5,
  },
  customButton: {
    alignItems: 'center',
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
  },
  customButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  signInButton: {
    backgroundColor: colors.secondary,
    marginBottom: 20,
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
  customIcon: {
    marginRight: 10,
  },
});

export default SignUpScreen;
