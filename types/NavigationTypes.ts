import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Home: { name: string };
};

export type DrawerParamList = {
  Menu: { name: string };
};

export type LoginNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;
export type SignUpNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SignUp'
>;
export type HomeNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

export type HomeRouteProp = RouteProp<RootStackParamList, 'Home'>;

export type MenuRouteProp = RouteProp<DrawerParamList, 'Menu'>;
