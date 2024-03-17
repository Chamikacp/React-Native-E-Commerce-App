import {
  FlatList,
  ListRenderItem,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ProductDetails } from "../../products/api/products.api.types";
import NavigationHelpers from "../../../../app/navigation/NavigationHelpers";
import { useReduxDispatch } from "../../../../app/store";
import { ProductsActions } from "../../products/redux/products.slice";
import Theme from "../../../themes";
import i18n from "../../../i18n";
import CartItem from "../components/cartItem";

import Toast from "react-native-simple-toast";

const CartDetails: React.FC = () => {
  const dispatch = useReduxDispatch();
  const [products, setProducts] = useState<ProductDetails[]>([]);
  const [total, setTotal] = useState(0);

  const getTotal = (products: ProductDetails[]) => {
    let total = 0;
    for (let index = 0; index < products.length; index++) {
      let productPrice = products[index].price?.amount;
      total = total + Number(productPrice);
    }
    setTotal(total);
  };

  const getCartItems = useCallback(async () => {
    let cartItems = await AsyncStorage.getItem("cartItems");
    let itemsArray = [];
    if (cartItems) {
      itemsArray = JSON.parse(cartItems);
      setProducts(itemsArray);
      getTotal(itemsArray);
    } else {
      setProducts([]);
      setTotal(0);
    }
  }, [setProducts, getTotal]);

  useFocusEffect(() => {
    getCartItems();
  });

  const removeItemFromCart = useCallback(
    async (id?: string) => {
      let cartItems = await AsyncStorage.getItem("cartItems");
      let itemsArray = [];
      if (cartItems) {
        itemsArray = JSON.parse(cartItems);
        for (let index = 0; index < itemsArray.length; index++) {
          if (itemsArray[index].id == id) {
            itemsArray.splice(index, 1);
          }

          await AsyncStorage.setItem("cartItems", JSON.stringify(itemsArray));
          getCartItems();
        }
      }
    },
    [getCartItems]
  );

  const checkOut = async () => {
    try {
      await AsyncStorage.removeItem("cartItems");
      Toast.show(i18n.cart.comingSoon, 1);
      getCartItems();
    } catch (error) {
      return error;
    }
  };

  const handleOnPress = useCallback(
    (id?: string) => {
      const selectedProduct = products.find((product) => product?.id === id);
      dispatch(ProductsActions.setProductDetails(selectedProduct));
      NavigationHelpers.navigateToProductDetails();
    },
    [dispatch, products]
  );

  const renderItem: ListRenderItem<ProductDetails> = useCallback(
    ({ item }): React.JSX.Element => (
      <CartItem
        item={item}
        handleOnPress={handleOnPress}
        handleOnRemove={removeItemFromCart}
      />
    ),
    [handleOnPress]
  );

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.title}>{i18n.cart.title}</Text>

      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.listEmptyContainer}>
            <Text style={styles.emptyText}>{i18n.cart.emptyText}</Text>
          </View>
        }
      />

      <View style={styles.checkOutContainer}>
        <View style={styles.pricesContainer}>
          <View style={styles.checkOutContainer}>
            <Text style={styles.totalText}>{i18n.cart.subTotalText}</Text>
            <Text style={styles.priceText}>£{total}</Text>
          </View>
          <View style={styles.shippingContainer}>
            <Text style={styles.totalText}>{i18n.cart.shippingText}</Text>
            <Text style={styles.priceText}>£{total / 20}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.checkOutButton}
          onPress={() => checkOut()}
          disabled={products.length === 0}
        >
          <Text style={styles.checkOutButtonText}>
            {i18n.cart.checkoutButtonText} (£{total + total / 20})
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CartDetails;

const styles = StyleSheet.create({
  mainContainer: {
    flexGrow: 1,
    backgroundColor: Theme.Colors.Background.PRIMARY,
  },
  listEmptyContainer: {
    flex: 1,
    alignItems: "center",
  },
  emptyText: {
    fontSize: 15,
    color: Theme.Colors.Text.SECONDARY,
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Theme.Colors.Background.PRIMARY,
  },
  title: {
    margin: 10,
    fontSize: 30,
    color: Theme.Colors.Text.PRIMARY,
    fontWeight: "bold",
  },
  itemsContainer: {
    paddingHorizontal: 16,
  },
  checkOutContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  shippingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  pricesContainer: {
    flex: 1,
    marginLeft: 20,
  },
  totalText: {
    fontSize: 15,
    color: Theme.Colors.Text.SECONDARY,
  },
  priceText: {
    fontSize: 15,
    color: Theme.Colors.Text.PRIMARY,
    fontWeight: "bold",
  },
  checkOutButton: {
    backgroundColor: Theme.Colors.Background.INVERTED,
    padding: 12,
    borderRadius: 8,
    margin: 20,
    alignItems: "center",
  },
  checkOutButtonText: {
    color: Theme.Colors.Text.INVERTED,
    fontSize: 16,
    fontWeight: "bold",
  },
});
