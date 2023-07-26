import React, {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Logo from '../assets/original_logo.png';
import {Searchbar, Text} from 'react-native-paper';
import SearchIcon from '../assets/icons/search.png';
import CloseIcon from '../assets/icons/x-circle.png';
import Config from 'react-native-config';
import {useQueryStore} from '../store';

const Header = () => {
  const [value, setValue] = useState('');
  const setSearchText = useQueryStore(s => s.setSearchText);

  const onChangeSearch = query => {
    setValue(query);
  };

  const onClearSearch = () => {
    setValue('');
    setSearchText('');
  };

  const handleSearch = () => {
    setSearchText(value);
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'column', rowGap: 0}}>
        <Image style={styles.tinyLogo} source={Logo} resizeMode="contain" />
        <Text variant="bodySmall" style={{color: 'white'}}>
          {Config.ENV}
        </Text>
      </View>
      <Searchbar
        icon={SearchIcon}
        clearIcon={CloseIcon}
        style={styles.searchbar}
        placeholder="Search"
        value={value}
        onChangeText={onChangeSearch}
        onClearIconPress={onClearSearch}
        onIconPress={handleSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    columnGap: 10,
    alignItems: 'center',
    padding: 8,
    paddingVertical: 10,
  },
  tinyLogo: {
    width: 80,
    height: 60,
    marginBottom: 0,
  },
  searchbar: {
    flex: 1,
  },
});

export default Header;
