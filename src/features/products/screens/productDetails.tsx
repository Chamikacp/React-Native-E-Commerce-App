import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useCallback } from "react";
import { useReduxSelector } from "../../../../app/store";
import Theme from "../../../themes";
import { productDetailsSelector } from "../redux/products.selector";
import NavigationServices from "../../../../app/navigation/NavigationServices";
import i18n from "../../../i18n";
import ProductDetailsView from "./views/productDetailsView";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-simple-toast";

const ProductDetailsScreen: React.FC = () => {
  const productDetails = useReduxSelector(productDetailsSelector);

  const goBack = useCallback(() => {
    NavigationServices.goBack();
  }, []);

  const addToCart = useCallback(async () => {
    let cartItems = await AsyncStorage.getItem("cartItems");
    let itemsArray = [];
    if (cartItems) {
      itemsArray = JSON.parse(cartItems);
    }
    itemsArray.push(productDetails);
    try {
      await AsyncStorage.setItem("cartItems", JSON.stringify(itemsArray));
      Toast.show(i18n.products.toastMessage, 1);
      goBack();
    } catch (error) {
      return error;
    }
  }, [productDetails]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Theme.Colors.TRANSPARENT} />
      <TouchableOpacity
        style={styles.backIconContainer}
        onPress={goBack}
        hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
      >
        <Image style={styles.backIcon} source={Theme.Images.icons.chevron} />
      </TouchableOpacity>

      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <ProductDetailsView item={productDetails} />
      </ScrollView>

      <TouchableOpacity style={styles.addToCartButton} onPress={addToCart}>
        <Text style={styles.addToCartButtonText}>
          {i18n.products.addToCartTitle}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Theme.Colors.Background.PRIMARY,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: Theme.Colors.Background.PRIMARY,
  },
  title: {
    margin: 10,
    fontSize: 35,
    color: Theme.Colors.Text.PRIMARY,
    fontWeight: "bold",
  },
  backIconContainer: {
    marginLeft: 15,
    marginTop: 15,
  },
  backIcon: {
    width: 20,
    height: 20,
    tintColor: Theme.Colors.TabBar.ACTIVE_TINT,
    resizeMode: "contain",
  },
  detailsTitle: {
    marginTop: 15,
    marginBottom: 10,
    fontSize: 15,
    color: Theme.Colors.Text.PRIMARY,
    fontWeight: "bold",
  },
  addToCartButton: {
    backgroundColor: Theme.Colors.Background.INVERTED,
    padding: 12,
    borderRadius: 8,
    margin: 20,
    alignItems: "center",
  },
  addToCartButtonText: {
    color: Theme.Colors.Text.INVERTED,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProductDetailsScreen;
