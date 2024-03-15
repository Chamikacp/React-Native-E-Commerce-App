import { PayloadAction, createAction, createSlice } from "@reduxjs/toolkit";
import { ProductDetails, ProductsResponse } from "../api/products.api.types";

export interface ProductsState {
  products?: ProductsResponse;
  productDetails?: ProductDetails;
}

export const initialState: ProductsState = {
  products: undefined,
  productDetails: undefined,
};

const ProductsSlice = createSlice({
  name: "trial",
  initialState,
  reducers: {
    setProducts: (
      state: ProductsState,
      action: PayloadAction<ProductsResponse | undefined>
    ) => {
      state.products = action.payload;
    },
    setProductDetails: (
      state: ProductsState,
      action: PayloadAction<ProductDetails | undefined>
    ) => {
      state.productDetails = action.payload;
    },
  },
});

const productsSagaActions = {
  getProducts: createAction("Product/getProductsSaga"),
};

export const ProductsActions = {
  ...ProductsSlice.actions,
  ...productsSagaActions,
};

export default ProductsSlice.reducer;
