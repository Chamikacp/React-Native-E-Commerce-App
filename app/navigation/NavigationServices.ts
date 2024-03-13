/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  CommonActions,
  NavigationContainerRef,
  StackActions,
} from "@react-navigation/native";

type params = {
  screen?: string;
  params?: any;
};
function navigate(routeName: string, params?: params) {
  navigationRef.current?.navigate(routeName, params);
}

function getCurrentRoute() {
  return navigationRef.current?.getCurrentRoute();
}

function goBack() {
  navigationRef.current?.goBack();
}

function pop(count: number, forceGoBack?: boolean) {
  navigationRef.current?.dispatch(StackActions.pop(count));
  if (forceGoBack) {
    navigationRef.current?.goBack();
  }
}

function fullReset(routeName: string) {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index: 1,
      routes: [{ name: routeName }],
    })
  );
}

function fullNestedReset(
  routeName: string,
  secondScreen: string,
  thirdScreen?: string
) {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index: 1,
      routes: [
        {
          name: routeName,
          state: {
            routes: [
              {
                name: secondScreen,
                state: thirdScreen
                  ? { routes: [{ name: thirdScreen }] }
                  : undefined,
              },
            ],
          },
        },
      ],
    })
  );
}

function getRouterState() {
  return navigationRef.current?.getState();
}

function isReady() {
  return navigationRef.current?.isReady();
}

function setParams(params: { [x: string]: string | boolean }) {
  navigationRef.current?.setParams(params);
}

function getPreviousRouteName() {
  let index = 0;
  const state = navigationRef.current?.getState();
  if (state?.index && state?.index > 0) {
    index = state.index - 1;
  }
  const prevRoute = state?.routes[index] as {
    name: string;
    params?: { screen?: string };
  };
  if (prevRoute?.params && prevRoute?.params?.screen) {
    return prevRoute?.params?.screen;
  }
  return prevRoute.name;
}

const navigationRef = React.createRef<NavigationContainerRef<any>>();

export default {
  navigationRef,
  pop,
  navigate,
  goBack,
  getCurrentRoute,
  fullReset,
  fullNestedReset,
  getRouterState,
  isReady,
  setParams,
  getPreviousRouteName,
};
