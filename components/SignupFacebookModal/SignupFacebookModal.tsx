import { FC } from 'react';
import {
  Text,
  View,
  Modal,
  StyleSheet,
  TextInput,
  Pressable,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

import colors from '../../colors';

interface SignupFacebookProps {
  visible: boolean;
  onDismiss(): void;
}

const LoginFacebookModal: FC<SignupFacebookProps> = ({
  visible,
  onDismiss,
}) => {
  return (
    <Modal
      animationType="fade"
      visible={visible}
      transparent={true}
      onRequestClose={onDismiss}>
      <Pressable style={styles.modalCenterView} onPress={onDismiss}>
        <View style={styles.modalContainer}>
          <View style={styles.iconContainer}>
            <FontAwesomeIcon icon={faFacebookF} size={40} />
          </View>
          <Text style={styles.header}>Registro con Facebook</Text>
          <TextInput
            style={styles.field}
            placeholder="Ingresa tu correo electrónico"
            placeholderTextColor={colors.muted}
          />
          <TextInput
            placeholder="Ingresa tu contraseña"
            placeholderTextColor={colors.muted}
            secureTextEntry={true}
            style={styles.field}
          />
          <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={onDismiss}>
              <Text style={styles.buttonText}>Enviar</Text>
            </Pressable>
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalCenterView: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  modalContainer: {
    backgroundColor: colors.white,
    borderRadius: 15,
    elevation: 4,
    paddingHorizontal: 25,
    paddingVertical: 15,
    width: '90%',
  },
  header: {
    color: colors.dark,
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 20,
    textAlign: 'center',
  },
  iconContainer: {
    alignItems: 'center',
  },
  field: {
    backgroundColor: colors.white,
    borderRadius: 10,
    color: colors.dark,
    elevation: 1,
    fontSize: 16,
    letterSpacing: 1,
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: colors.secondary,
    borderRadius: 50,
    paddingHorizontal: 25,
    paddingVertical: 15,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});

export default LoginFacebookModal;
