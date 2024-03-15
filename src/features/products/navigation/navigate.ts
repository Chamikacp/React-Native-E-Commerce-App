import { ParamListBase } from "@react-navigation/native";
import NavigationServices from "../../../../app/navigation/NavigationServices";
import { MainScreensStack } from "../../../../app/constants/navigation.constants";
import { ProductsScreenStack } from "../constants/products.navigation.constants";

const navigateToProductDetails = (params?: ParamListBase) => {
  NavigationServices.navigate(MainScreensStack.PRODUCT, {
    screen: ProductsScreenStack.PRODUCT_DETAILS,
    params,
  });
};

export default {
  navigateToProductDetails,
};
