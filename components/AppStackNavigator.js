import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import FoodDonateScreen from '../screens/FoodDonateScreen';
import RecieverDetailsScreen  from '../screens/RecieverDetailsScreen';




export const AppStackNavigator = createStackNavigator({
  FoodDonateList : {
    screen : FoodDonateScreen,
    navigationOptions:{
      headerShown : false
    }
  },
  RecieverDetails : {
    screen : RecieverDetailsScreen,
    navigationOptions:{
      headerShown : false
    }
  },

},
  {
    initialRouteName: 'FoodDonateList'
  }
);