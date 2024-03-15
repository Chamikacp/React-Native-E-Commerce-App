import productApi from "./products.api";

const ProductService = {
  getProducts: async () => {
    try {
      return await productApi.getProducts();
    } catch (error) {
      return Promise.reject(error);
    }
  },
};

export default ProductService;
