import React from 'react';
import FaWindows from '../assets/icons/ri_windows-fill.png';
import FaPlaystation from '../assets/icons/ri_playstation-fill.png';
import FaXbox from '../assets/icons/ri_xbox-fill.png';
import SiNintendo from '../assets/icons/nintendo.png';
import FaApple from '../assets/icons/mac-os.png';
import FaLinux from '../assets/icons/mdi_linux.png';
import FaAndroid from '../assets/icons/android-filled.png';
import MdPhoneIphone from '../assets/icons/raphael_ios.png';
import BsGlobe from '../assets/icons/mdi_web.png';
import {Image, StyleSheet, View} from 'react-native';
import {colors} from '../styles/colors';

const PlataformIconList = ({platforms = []}) => {
  const iconMap = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <View style={styles.container}>
      {platforms.map(platform => {
        return (
          <Image
            source={iconMap[platform.slug]}
            style={styles.icon}
            tintColor={colors.white}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    columnGap: 4,
  },
  icon: {height: 24, width: 24},
});

export default PlataformIconList;
