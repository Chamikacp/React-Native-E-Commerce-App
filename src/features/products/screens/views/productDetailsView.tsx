import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

import { ProductDetails } from "../../api/products.api.types";
import Theme from "../../../../themes";
import i18n from "../../../../i18n";

interface Props {
  item?: ProductDetails;
}

const ProductDetailsView: React.FC<Props> = ({ item }) => {
  return (
    <>
      <Image style={styles.productImage} source={{ uri: item?.mainImage }} />

      <View style={styles.productDetailsContainer}>
        <Text style={styles.productBrand}>{item?.brandName}</Text>

        <Text style={styles.productName}>{item?.name}</Text>

        <Text style={styles.productPrice}>£{item?.price?.amount}</Text>

        <View style={styles.productStockContainer}>
          <Text style={styles.detailsTitle}>{i18n.products.sizeTitle}</Text>
          <Text style={styles.stockStatus}>{item?.stockStatus}</Text>
        </View>

        <View style={styles.sizesContainer}>
          {item?.sizes?.map((size) => (
            <View style={styles.sizeContainer}>
              <Text style={styles.sizeText}>{size}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.detailsTitle}>
          {i18n.products.descriptionTitle}
        </Text>
        <Text style={styles.productName}>{item?.description}</Text>

        <Text style={styles.detailsTitle}>{i18n.products.highlightTitle}</Text>
        <Text style={styles.productName}>{`\u2022 ${item?.colour}`}</Text>

        <Text style={styles.detailsTitle}>{i18n.products.productsIdTitle}</Text>
        <Text style={styles.productName}>{`SKU: ${item?.SKU}`}</Text>
      </View>
    </>
  );
};

export default ProductDetailsView;

const styles = StyleSheet.create({
  productImage: {
    resizeMode: "contain",
    width: "100%",
    height: 300,
  },
  productDetailsContainer: {
    marginLeft: 15,
    marginRight: 15,
  },
  productBrand: {
    fontSize: 20,
    color: Theme.Colors.Text.PRIMARY,
    fontWeight: "bold",
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
  productStockContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
  },
  detailsTitle: {
    marginTop: 15,
    marginBottom: 10,
    fontSize: 15,
    color: Theme.Colors.Text.PRIMARY,
    fontWeight: "bold",
  },
  stockStatus: {
    marginLeft: 15,
    fontSize: 15,
    color: Theme.Colors.Text.STOCK_STATUS,
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
});
