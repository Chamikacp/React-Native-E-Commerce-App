import React, { useCallback } from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";

import Theme from "../../../../themes";
import { ProductDetails } from "../../api/products.api.types";

interface Props {
  item: ProductDetails;
  handleOnPress: (id?: string) => void;
}

const ProductItem: React.FC<Props> = ({ item, handleOnPress }) => {
  const onPress = useCallback(() => {
    handleOnPress(item.id);
  }, [handleOnPress, item.id]);

  return (
    <TouchableOpacity style={styles.productItem} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image style={styles.productImage} source={{ uri: item.mainImage }} />
      </View>
      <Text style={styles.productBrand}>{item.brandName}</Text>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>£{item.price?.amount}</Text>
    </TouchableOpacity>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  productItem: {
    flex: 0.5,
    margin: 5,
    padding: 10,
    borderRadius: 8,
    backgroundColor: Theme.Colors.Background.PRIMARY,
  },
  imageContainer: {
    alignContent: "center",
    backgroundColor: Theme.Colors.Background.PRIMARY,
  },
  productImage: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  productBrand: {
    fontSize: 15,
    color: Theme.Colors.Text.PRIMARY,
    fontWeight: "bold",
  },
  productName: {
    marginTop: 4,
    fontSize: 15,
    color: Theme.Colors.Text.SECONDARY,
    fontWeight: "bold",
  },
  productPrice: {
    marginTop: 5,
    fontSize: 15,
    color: Theme.Colors.Text.SECONDARY,
  },
});
