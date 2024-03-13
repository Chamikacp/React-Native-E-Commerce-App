import {
  View,
  StyleSheet,
  Platform,
  Image,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";
import { hasNotch } from "react-native-device-info";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { HomeScreenStack } from "../constants/home.navigation.constants";
import HomeDetails from "../screens";
import CartDetails from "../../cart/screens";
import AccountDetails from "../../account/screens";
import i18n from "../../../i18n";
import Theme from "../../../themes";
import { FONT_SIZES } from "../../../../app/constants/generic.constants";

export interface RenderTabBarParams {
  focused: boolean;
  color: string;
  size: number;
}

const TabItemContainerHeight = 64;

const HomeTabNavigator: React.FC = () => {
  const Tab = createBottomTabNavigator();
  const { bottom } = useSafeAreaInsets();

  const renderIcon = (iconName: ImageSourcePropType, color: string) => (
    <View style={[styles.iconContainer]}>
      <Image
        style={[{ tintColor: color }, styles.iconStyles]}
        source={iconName}
      />
    </View>
  );

  const renderTrialsTabBarIcon = ({ color }: RenderTabBarParams) =>
    renderIcon(Theme.Images.icons.chevron, color);

  const renderDrillsTabBarIcon = ({ color }: RenderTabBarParams) =>
    renderIcon(Theme.Images.icons.chevron, color);

  const renderProfileTabBarIcon = ({ color }: RenderTabBarParams) =>
    renderIcon(Theme.Images.icons.chevron, color);

  return (
    <Tab.Navigator
      screenOptions={{
        ...tabBarOptions,
        tabBarStyle: [
          tabBarOptions.tabBarStyle,
          { height: TabItemContainerHeight + bottom, paddingBottom: bottom },
        ],
      }}
    >
      <Tab.Screen
        name={HomeScreenStack.HOME}
        component={HomeDetails}
        options={{
          tabBarLabel: i18n.tabBar.home,
          tabBarIcon: renderTrialsTabBarIcon,
        }}
      />
      <Tab.Screen
        name={HomeScreenStack.CART}
        component={CartDetails}
        options={{
          tabBarLabel: i18n.tabBar.cart,
          tabBarIcon: renderDrillsTabBarIcon,
        }}
      />
      <Tab.Screen
        name={HomeScreenStack.ACCOUNT}
        component={AccountDetails}
        options={{
          tabBarLabel: i18n.tabBar.account,
          tabBarIcon: renderProfileTabBarIcon,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    marginBottom: Platform.OS === "ios" ? -6 : -10,
  },
  generalStyles: {
    paddingHorizontal: "5.6%",
    paddingBottom: 8,
    paddingTop: 8,
  },
  tabStyles: {
    gap: 8,
    marginBottom: hasNotch() ? 0 : 8,
  },
  labelStyles: {
    fontSize: FONT_SIZES.bitTiny,
    fontFamily: "PPNeueMontreal-Medium",
    fontWeight: "500",
  },
  iconStyles: {
    width: 24,
    height: 24,
  },
});

const tabBarOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarLabelPosition: "below-icon",
  tabBarAllowFontScaling: false,
  tabBarLabelStyle: styles.labelStyles,
  tabBarStyle: styles.generalStyles,
  tabBarItemStyle: styles.tabStyles,
  tabBarHideOnKeyboard: true,
  tabBarActiveTintColor: Theme.Colors.TabBar.ACTIVE_TINT,
  tabBarInactiveTintColor: Theme.Colors.TabBar.INACTIVE_TINT,
};

export default HomeTabNavigator;
