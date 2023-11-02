import axios from 'axios';
import { FC, useCallback, useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ToastAndroid,
  FlatList,
  Image,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCakeCandles } from '@fortawesome/free-solid-svg-icons';

import { Person } from '../../../types/PersonAPI';

import colors from '../../../colors';
import config from '../../../config.json';

interface ListElementProps extends Person {}

const TabScreenOne: FC = () => {
  const [data, setData] = useState<Person[]>();

  useEffect(() => {
    const getAPIData = async () => {
      axios
        .post(
          `${config.MOCKUP_API.URL}/get-list`,
          { count: 10 },
          {
            headers: {
              'X-RapidAPI-Key': config.MOCKUP_API.KEY,
              'X-RapidAPI-Host': config.MOCKUP_API.HOST,
            },
          },
        )
        .then(response => setData(response.data as Person[]))
        .catch(error => {
          console.log(error);
          // Show error
          ToastAndroid.show('Hubo un error en el servidor', ToastAndroid.SHORT);
        });
    };

    getAPIData();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={() => (
          <Text style={[styles.text, styles.heading]}>Lista de usuarios</Text>
        )}
        data={data}
        renderItem={info => <ListElement {...info.item} />}
      />
    </View>
  );
};

const ListElement: FC<ListElementProps> = props => {
  const getFormatedBirthdate = useCallback((date: string) => {
    const birthdate = new Date(date);

    return `${birthdate.getDate()}/${birthdate.getMonth()}`;
  }, []);

  return (
    <View style={styles.elementContainer}>
      <Image style={styles.elementImage} source={{ uri: props.avatar }} />
      <View>
        <Text style={[styles.text, styles.marginBottom]}>
          {props.firstname} {props.lastname}
        </Text>
        <View style={styles.elementBirthdayContainer}>
          <FontAwesomeIcon
            style={styles.elementBirthdayIcon}
            icon={faCakeCandles}
          />
          <Text style={styles.text}>
            {getFormatedBirthdate(props.birthdate)}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
  },
  text: {
    color: colors.dark,
  },
  elementContainer: {
    flexDirection: 'row',
    padding: 20,
  },
  elementImage: {
    height: 80,
    marginRight: 10,
    width: 80,
  },
  elementBirthdayContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  elementBirthdayIcon: {
    marginRight: 5,
  },
  marginBottom: {
    marginBottom: 10,
  },
});

export default TabScreenOne;
