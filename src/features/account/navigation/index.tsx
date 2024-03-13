import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { AccountScreenStack } from "../constants/account.navigation.constants";
import AccountDetails from "../screens";

const AccountNavigator = createStackNavigator();

const AccountNavigation: React.FC = () => (
  <AccountNavigator.Navigator
    initialRouteName={AccountScreenStack.ACCOUNT_DETAILS}
    screenOptions={{
      headerShown: false,
      gestureEnabled: false,
    }}
  >
    <AccountNavigator.Screen
      name={AccountScreenStack.ACCOUNT_DETAILS}
      component={AccountDetails}
    />
  </AccountNavigator.Navigator>
);

export default AccountNavigation;
