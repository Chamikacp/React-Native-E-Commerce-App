import { takeLatest } from "typed-redux-saga";
import { getProductsSaga } from "./products.saga";
import { ProductsActions } from "../redux/products.slice";

export const productsSaga = [
  takeLatest(ProductsActions.getProducts.type, getProductsSaga),
];
