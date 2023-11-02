import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import { useRoute } from '@react-navigation/native';
import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { HomeRouteProp } from '../../types/NavigationTypes';

import { MenuScreen } from '../MenuScreen';

import colors from '../../colors';

const Drawer = createDrawerNavigator();

interface CustomDrawerProps extends DrawerContentComponentProps {
  name: string;
}

const HomeScreen: FC = () => {
  const params = useRoute<HomeRouteProp>().params;

  return (
    <Drawer.Navigator
      initialRouteName="MenuScreen"
      drawerContent={props => <CustomDrawer name={params.name} {...props} />}>
      <Drawer.Screen
        component={MenuScreen}
        initialParams={{ name: params.name }}
        name="MenuScreen"
        options={{ title: 'Menu' }}
      />
    </Drawer.Navigator>
  );
};

const CustomDrawer: FC<CustomDrawerProps> = ({ name, ...props }) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeaderContainer}>
        <View style={styles.drawerHeader}>
          <FontAwesomeIcon
            style={styles.drawerHeaderIcon}
            icon={faUser}
            color={colors.dark}
          />
          <Text style={styles.drawerHeaderTitle}>Usuario</Text>
        </View>
        <Text style={styles.drawerHeaderText}>{name}</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerHeaderContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.muted,
  },
  drawerHeaderText: {
    color: colors.dark,
  },
  drawerHeaderTitle: {
    fontWeight: 'bold',
    color: colors.dark,
    marginBottom: 5,
    fontSize: 18,
  },
  drawerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  drawerHeaderIcon: {
    marginRight: 10,
  },
});

export default HomeScreen;
