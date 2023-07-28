import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, StyleSheet} from 'react-native';
import GameIcon from '../../assets/icons/game-icon.png';
import ProfileIcon from '../../assets/icons/profile-icon.png';
import ProfileScreen from '../../screens/ProfileScreen';
import {colors} from '../../styles/colors';
import HomeStack from './HomeStack';
import Routes from '../routes';

const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => getNavigatorScreenOptions(route)}>
      <Tab.Screen name={Routes.HomeStack} component={HomeStack} />
      <Tab.Screen name={Routes.ProfileScreen} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabStack;

const getNavigatorScreenOptions = route => {
  return {
    headerTransparent: true,
    headerShown: false,
    tabBarStyle: styles.tabBarStyle,
    tabBarVisible: true,
    tabBarActiveTintColor: colors.wh,
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    tabBarIcon: ({focused}) => {
      let icon;

      if (route.name === Routes.HomeStack) {
        icon = GameIcon;
      } else if (route.name === Routes.ProfileScreen) {
        icon = ProfileIcon;
      }

      return (
        <Image
          source={icon}
          style={[
            focused ? styles.selectedImage : styles.image,
            {
              tintColor: focused ? colors.white : colors.gray,
            },
          ]}
        />
      );
    },
  };
};

const styles = StyleSheet.create({
  image: {height: 32, width: 32},
  selectedImage: {height: 36, width: 36},
  tabBarStyle: {
    backgroundColor: colors.black,
    borderRadius: 30,
    borderTopWidth: 0,
    bottom: 0,
    elevation: 9,
    height: 80,
    justifyContent: 'center',
    paddingBottom: 10,
    paddingTop: 0,
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
  },
});
