import { FC, useCallback, useEffect, useState } from 'react';
import {
  Text,
  View,
  Modal,
  StyleSheet,
  TextInput,
  Pressable,
  ToastAndroid,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { useNavigation } from '@react-navigation/native';
import { AxiosError } from 'axios';

import { LoginNavigationProp } from '../../types/NavigationTypes';

import api from '../../api';

import colors from '../../colors';

interface LoginEmailModalProps {
  visible: boolean;
  onDismiss(): void;
}

const LoginEmailModal: FC<LoginEmailModalProps> = ({ visible, onDismiss }) => {
  const [validating, setValidating] = useState(false);

  const navigation = useNavigation<LoginNavigationProp>();

  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handlePressSend = useCallback(() => {
    for (let field in data) {
      if (!data[field as keyof typeof data]) {
        ToastAndroid.show(
          'Por favor llene todos los campos',
          ToastAndroid.SHORT,
        );

        return;
      }
    }

    const cleanedData = { ...data };

    for (let field in cleanedData) {
      const properField = field as keyof typeof cleanedData;

      cleanedData[properField] = cleanedData[properField].trim();
    }

    setValidating(true);

    api
      .post('/login.php', { ...data })
      .then(response => {
        navigation.navigate('Home', { name: response.data.name });

        onDismiss();
      })
      .catch(error => {
        const err = error as AxiosError;

        if (!err.response) {
          ToastAndroid.show(
            'No se pudo conectar con el servidor',
            ToastAndroid.LONG,
          );
        } else {
          ToastAndroid.show(
            'El usuario y contraseña no coinciden',
            ToastAndroid.LONG,
          );
        }
      })
      .finally(() => setValidating(false));
  }, [data]);

  useEffect(() => {
    // Reset data if hidden
    if (!visible) {
      setData({
        email: '',
        password: '',
      });
    }
  }, [visible]);

  return (
    <Modal
      animationType="fade"
      visible={visible}
      transparent={true}
      onRequestClose={onDismiss}>
      <Pressable style={styles.modalCenterView} onPress={onDismiss}>
        <View style={styles.modalContainer}>
          <View style={styles.iconContainer}>
            <FontAwesomeIcon icon={faEnvelope} size={40} />
          </View>
          <Text style={styles.header}>Iniciar con correo electrónico</Text>
          <TextInput
            autoCapitalize="none"
            editable={!validating}
            keyboardType="email-address"
            onChangeText={text => setData({ ...data, email: text })}
            placeholder="Ingresa tu correo electrónico"
            placeholderTextColor={colors.muted}
            style={styles.field}
            value={data.email}
          />
          <TextInput
            editable={!validating}
            onChangeText={text => setData({ ...data, password: text })}
            placeholder="Ingresa tu contraseña"
            placeholderTextColor={colors.muted}
            secureTextEntry={true}
            style={styles.field}
            value={data.password}
          />
          <View style={styles.buttonContainer}>
            <Pressable
              style={[styles.button, validating ? styles.disabledButton : {}]}
              onPress={handlePressSend}
              disabled={validating}>
              <Text style={styles.buttonText}>Entrar</Text>
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
  disabledButton: {
    backgroundColor: colors.muted,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});

export default LoginEmailModal;
