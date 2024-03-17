import React, { useCallback } from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";

import Theme from "../../../../themes";
import { ProductDetails } from "../../../products/api/products.api.types";

interface Props {
  item: ProductDetails;
  handleOnPress: (id?: string) => void;
  handleOnRemove: (id?: string) => void;
}

const CartItem: React.FC<Props> = ({ item, handleOnPress, handleOnRemove }) => {
  const onPress = useCallback(() => {
    handleOnPress(item.id);
  }, [handleOnPress, item.id]);

  const onRemove = useCallback(() => {
    handleOnRemove(item.id);
  }, [handleOnRemove, item.id]);

  return (
    <TouchableOpacity onPress={onPress} style={styles.productItem}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.mainImage }} style={styles.productImage} />
      </View>
      <View style={styles.detailsContainer}>
        <View>
          <Text style={styles.productName}>{item.name}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.productPrice}>£{item.price?.amount}</Text>
          </View>
        </View>
        <View style={styles.quantityContainer}>
          <View style={styles.quantityInsideContainer}>
            <View style={styles.minusContainer}>
              <Image
                style={styles.iconStyles}
                source={Theme.Images.icons.minus}
              />
            </View>
            <Text style={styles.productPrice}>1</Text>
            <View style={styles.plusContainer}>
              <Image
                style={styles.iconStyles}
                source={Theme.Images.icons.plus}
              />
            </View>
          </View>
          <TouchableOpacity onPress={onRemove}>
            <Image
              style={styles.iconStyles}
              source={Theme.Images.icons.delete}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  productItem: {
    width: "100%",
    height: 100,
    marginVertical: 6,
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    width: "30%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginRight: 22,
  },
  detailsContainer: {
    flex: 1,
    height: "100%",
    justifyContent: "space-around",
  },
  priceContainer: {
    marginTop: 4,
    flexDirection: "row",
    alignItems: "center",
    opacity: 0.6,
  },
  productImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  productBrand: {
    fontSize: 15,
    color: Theme.Colors.Text.PRIMARY,
    fontWeight: "bold",
  },
  productName: {
    fontSize: 14,
    maxWidth: "100%",
    color: Theme.Colors.Text.PRIMARY,
    fontWeight: "600",
    letterSpacing: 1,
  },
  productPrice: {
    fontSize: 14,
    fontWeight: "400",
    maxWidth: "85%",
    marginRight: 4,
    color: Theme.Colors.Text.PRIMARY,
  },
  quantityContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  quantityInsideContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  minusContainer: {
    marginRight: 20,
    opacity: 0.5,
  },
  plusContainer: {
    marginLeft: 20,

    opacity: 0.5,
  },
  iconStyles: {
    width: 15,
    height: 20,
    resizeMode: "contain",
    tintColor: Theme.Colors.TabBar.ACTIVE_TINT,
  },
});
