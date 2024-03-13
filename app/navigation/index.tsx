import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import NavServices from "./NavigationServices";
import NavigationStack from "./NavigationStack";

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer ref={NavServices.navigationRef}>
      <NavigationStack />
    </NavigationContainer>
  );
};

export default AppNavigator;
