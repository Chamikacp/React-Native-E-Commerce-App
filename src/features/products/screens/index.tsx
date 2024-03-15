import {
  FlatList,
  ListRenderItem,
  RefreshControl,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
} from "react-native";
import React, { useCallback, useEffect } from "react";
import { useReduxDispatch, useReduxSelector } from "../../../../app/store";
import { ProductsActions } from "../redux/products.slice";
import Theme from "../../../themes";
import { productsSelector } from "../redux/products.selector";
import i18n from "../../../i18n";
import { ProductDetails } from "../api/products.api.types";
import ProductItem from "../components/productItem";
import NavigationHelpers from "../../../../app/navigation/NavigationHelpers";

const AllProducts: React.FC = () => {
  const dispatch = useReduxDispatch();
  const products = useReduxSelector(productsSelector);

  const refreshDetails = useCallback(() => {
    dispatch(ProductsActions.getProducts());
  }, [dispatch]);

  useEffect(() => {
    refreshDetails();
  }, [dispatch, refreshDetails]);

  const handleOnPress = useCallback(
    (id?: string) => {
      const selectedProduct = products?.find((product) => product?.id === id);
      dispatch(ProductsActions.setProductDetails(selectedProduct));
      NavigationHelpers.navigateToProductDetails();
    },
    [dispatch, products]
  );

  const renderItem: ListRenderItem<ProductDetails> = useCallback(
    ({ item }): React.JSX.Element => (
      <ProductItem item={item} handleOnPress={handleOnPress} />
    ),
    [handleOnPress]
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Theme.Colors.TRANSPARENT} />
      <Text style={styles.title}>{i18n.title}</Text>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        refreshControl={
          <RefreshControl
            enabled
            refreshing={false}
            onRefresh={refreshDetails}
          />
        }
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      />
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
});

export default AllProducts;
