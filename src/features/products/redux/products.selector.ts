import { ProductDetails } from "../api/products.api.types";
import { RootState } from "../../../../app/store";

export const productsSelector = (
  state: RootState
): ProductDetails[] | undefined => state.general.home.products?.data;

export const productDetailsSelector = (
  state: RootState
): ProductDetails | undefined => state.general.home.productDetails;
