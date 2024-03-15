import { call, put } from "typed-redux-saga";
import ProductService from "../api/products.service";
import { ProductsActions } from "../redux/products.slice";

export function* getProductsSaga() {
  try {
    const response = yield* call(ProductService.getProducts);
    yield* put(ProductsActions.setProducts(response));
  } catch (error) {}
}
