import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import TabStack from './stacks/TabStack';
import AuthStack from './stacks/AuthStack';
import {useAuthStore} from '../store';
import _ from 'lodash';

export default function Navigator() {
  const user = useAuthStore(s => s.user);

  return (
    <NavigationContainer ref={navigator}>
      {_.isEmpty(user) ? <AuthStack /> : <TabStack />}
    </NavigationContainer>
  );
}
