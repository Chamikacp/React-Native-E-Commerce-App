import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CartDetails from "../screens";
import { CartScreenStack } from "../constants/cart.navigation.constants";

const CartNavigator = createStackNavigator();

const CartNavigation: React.FC = () => (
  <CartNavigator.Navigator
    initialRouteName={CartScreenStack.CART_DETAILS}
    screenOptions={() => ({
      headerShown: false,
    })}
  >
    <CartNavigator.Screen
      name={CartScreenStack.CART_DETAILS}
      component={CartDetails}
    />
  </CartNavigator.Navigator>
);

export default CartNavigation;
