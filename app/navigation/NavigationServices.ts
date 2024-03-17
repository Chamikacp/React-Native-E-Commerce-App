/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { NavigationContainerRef } from "@react-navigation/native";

type params = {
  screen?: string;
  params?: any;
};
function navigate(routeName: string, params?: params) {
  navigationRef.current?.navigate(routeName, params);
}

function goBack() {
  navigationRef.current?.goBack();
}

const navigationRef = React.createRef<NavigationContainerRef<any>>();

export default {
  navigationRef,
  navigate,
  goBack,
};
