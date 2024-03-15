import React from "react";
import {
  StackNavigationOptions,
  createStackNavigator,
} from "@react-navigation/stack";

import { MainScreensStack } from "../constants/navigation.constants";
import { ParamListBase, RouteProp } from "@react-navigation/native";

import HomeNavigation from "../../src/features/home/navigation/index";
import AccountNavigation from "../../src/features/account/navigation/index";
import CartNavigation from "../../src/features/cart/navigation";
import ProductsNavigation from "../../src/features/products/navigation";

const MainNavigator = createStackNavigator();

type Route = RouteProp<ParamListBase> & { params?: { screen?: string } };
type Options = {
  route: Route;
};

const NavigationStack: React.FC = () => {
  const getOptions = ({ route }: Options) =>
    ({
      headerShown: false,
      gestureEnabled: false,
      ...routeOptions(route),
    } as StackNavigationOptions);

  return (
    <MainNavigator.Navigator
      initialRouteName={MainScreensStack.HOME}
      screenOptions={getOptions}
    >
      <MainNavigator.Screen
        name={MainScreensStack.HOME}
        component={HomeNavigation}
      />
      <MainNavigator.Screen
        name={MainScreensStack.ACCOUNT}
        component={AccountNavigation}
      />
      <MainNavigator.Screen
        name={MainScreensStack.CART}
        component={CartNavigation}
      />
      <MainNavigator.Screen
        name={MainScreensStack.PRODUCT}
        component={ProductsNavigation}
      />
    </MainNavigator.Navigator>
  );
};

const routeOptions = (route: Route) => {
  if (route.name === MainScreensStack.HOME) {
    return { animationEnabled: false };
  }

  return { animationEnabled: true };
};

export default NavigationStack;
