import { faHome, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FC } from 'react';

import { TabScreenOne } from '../TabNavigation/TabNavigationOne';
import { TabScreenTwo } from '../TabNavigation/TabNavigationTwo';
import { MapTab } from '../TabNavigation/MapsTab';

import colors from '../../colors';
import { faMap } from '@fortawesome/free-regular-svg-icons';

const Tab = createBottomTabNavigator();

const MenuScreen: FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={TabScreenOne}
        options={{
          headerShown: false,
          tabBarIcon: ({ size }) => (
            <FontAwesomeIcon icon={faHome} size={size} color={colors.dark} />
          ),
          tabBarActiveTintColor: colors.primary,
          title: 'Inicio',
        }}
      />
      <Tab.Screen
        name="Videos"
        component={TabScreenTwo}
        options={{
          headerShown: false,
          tabBarIcon: ({ size }) => (
            <FontAwesomeIcon icon={faVideo} size={size} color={colors.dark} />
          ),
          tabBarActiveTintColor: colors.primary,
          title: 'Videos',
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapTab}
        options={{
          headerShown: false,
          tabBarIcon: ({ size }) => (
            <FontAwesomeIcon icon={faMap} size={size} color={colors.dark} />
          ),
          tabBarActiveTintColor: colors.primary,
          title: 'Mapa',
        }}
      />
    </Tab.Navigator>
  );
};

export default MenuScreen;
