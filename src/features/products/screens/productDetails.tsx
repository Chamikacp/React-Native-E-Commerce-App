import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback } from "react";
import { useReduxDispatch, useReduxSelector } from "../../../../app/store";
import Theme from "../../../themes";
import { productDetailsSelector } from "../redux/products.selector";
import NavigationServices from "../../../../app/navigation/NavigationServices";
import { ProductsActions } from "../redux/products.slice";
import i18n from "../../../i18n";

const ProductDetailsScreen: React.FC = () => {
  const productDetails = useReduxSelector(productDetailsSelector);

  const goBack = useCallback(() => {
    NavigationServices.goBack();
  }, []);

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
        <Image
          style={styles.productImage}
          source={{ uri: productDetails?.mainImage }}
        />
        <View style={styles.productDetailsContainer}>
          <Text style={styles.productBrand}>{productDetails?.brandName}</Text>
          <Text style={styles.productName}>{productDetails?.name}</Text>
          <Text style={styles.productPrice}>
            £{productDetails?.price?.amount}
          </Text>
          <View style={styles.productStockContainer}>
            <Text style={styles.detailsTitle}>{i18n.products.sizeTitle}</Text>
            <Text style={styles.stockStatus}>
              {productDetails?.stockStatus}
            </Text>
          </View>
          <View style={styles.sizesContainer}>
            <View style={styles.sizeContainer}>
              <Text style={styles.sizeText}>
                {productDetails?.sizes && productDetails?.sizes[0]}
              </Text>
            </View>
            <View style={styles.sizeContainer}>
              <Text style={styles.sizeText}>
                {productDetails?.sizes && productDetails?.sizes[1]}
              </Text>
            </View>
            <View style={styles.sizeContainer}>
              <Text style={styles.sizeText}>
                {productDetails?.sizes && productDetails?.sizes[2]}
              </Text>
            </View>
            <View style={styles.sizeContainer}>
              <Text style={styles.sizeText}>
                {productDetails?.sizes && productDetails?.sizes[3]}
              </Text>
            </View>
          </View>
          <Text style={styles.detailsTitle}>
            {i18n.products.descriptionTitle}
          </Text>
          <Text style={styles.productName}>{productDetails?.description}</Text>
          <Text style={styles.detailsTitle}>
            {i18n.products.highlightTitle}
          </Text>
          <Text
            style={styles.productName}
          >{`\u2022 ${productDetails?.colour}`}</Text>
          <Text style={styles.detailsTitle}>
            {i18n.products.productsIdTitle}
          </Text>
          <Text
            style={styles.productName}
          >{`SKU: ${productDetails?.SKU}`}</Text>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.addToCartButton} onPress={() => {}}>
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
  productImage: {
    resizeMode: "contain",
    width: "100%",
    height: 300,
  },
  productDetailsContainer: {
    marginLeft: 15,
    marginRight: 15,
  },
  productStockContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
  },
  productBrand: {
    fontSize: 20,
    color: Theme.Colors.Text.PRIMARY,
    fontWeight: "bold",
  },
  stockStatus: {
    marginLeft: 15,
    fontSize: 15,
    color: Theme.Colors.Text.STOCK_STATUS,
  },
  productName: {
    marginTop: 2,
    fontSize: 15,
    color: Theme.Colors.Text.PRIMARY,
  },
  productPrice: {
    marginTop: 10,
    fontSize: 20,
    color: Theme.Colors.Text.PRIMARY,
  },
  detailsTitle: {
    marginTop: 15,
    marginBottom: 10,
    fontSize: 15,
    color: Theme.Colors.Text.PRIMARY,
    fontWeight: "bold",
  },
  sizesContainer: {
    marginBottom: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sizeContainer: {
    flex: 1,
    height: 30,
    marginLeft: 15,
    marginRight: 15,
    borderColor: Theme.Colors.Text.PRIMARY,
    borderWidth: 2,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  sizeText: {
    fontSize: 15,
    color: Theme.Colors.Text.PRIMARY,
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
