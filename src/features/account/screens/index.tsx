import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Theme from "../../../themes";

const AccountDetails: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.soonText}>Coming Soon!</Text>
    </SafeAreaView>
  );
};

export default AccountDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.Colors.Background.PRIMARY,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  soonText: {
    fontSize: 15,
    color: Theme.Colors.Text.SECONDARY,
  },
});
