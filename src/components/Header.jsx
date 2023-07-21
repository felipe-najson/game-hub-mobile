import React, {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Logo from '../assets/original_logo.png';
import {Searchbar} from 'react-native-paper';
import useQueryStore from '../store';
import SearchIcon from '../assets/icons/search.png';
import CloseIcon from '../assets/icons/x-circle.png';

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
      <Image style={styles.tinyLogo} source={Logo} resizeMode="contain" />
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
  },
  searchbar: {
    flex: 1,
  },
});

export default Header;
