import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { ProductsScreenStack } from "../constants/products.navigation.constants";
import AllProducts from "../screens";
import ProductDetailsScreen from "../screens/productDetails";

const ProductsNavigator = createStackNavigator();

const ProductsNavigation: React.FC = () => (
  <ProductsNavigator.Navigator
    initialRouteName={ProductsScreenStack.ALL_PRODUCTS}
    screenOptions={{
      headerShown: false,
      gestureEnabled: false,
    }}
  >
    <ProductsNavigator.Screen
      name={ProductsScreenStack.ALL_PRODUCTS}
      component={AllProducts}
    />
    <ProductsNavigator.Screen
      name={ProductsScreenStack.PRODUCT_DETAILS}
      component={ProductDetailsScreen}
    />
  </ProductsNavigator.Navigator>
);

export default ProductsNavigation;
