import BaseApi from "../../../../app/api/baseApi";
import { GET_PRODUCTS_ENDPOINT } from "../constants/apiEndpoints";
import { ProductsResponse } from "./products.api.types";

class ProductsApi extends BaseApi {
  getProducts(): Promise<ProductsResponse> {
    return this.getAsync<ProductsResponse>(GET_PRODUCTS_ENDPOINT);
  }
}

export default new ProductsApi();
