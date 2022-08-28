import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteProduct,
  editProduct,
  getProducts,
  getProductsByPage,
} from "../api/index";

// const initialState = getProducts();

export const getProductsAsync = createAsyncThunk(
  "products/getProducts",
  async () => {
    const result = await getProducts();
    return result;
  }
);

export const deleteProductAsync = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    const result = await deleteProduct(id);
    return result;
  }
);

export const editProductAsync = createAsyncThunk(
  "products/editProduct",
  async (id, data) => {
    const result = await editProduct(id, data);
    return result;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    selectedProduct: {},
    isChanged: false,
  },
  reducers: {
    // editProduct: (state, action) => {

    //     const index = state.products.findIndex((product)=> +product.id === +action.payload.id);

    //     state.products.splice(index, 1, +action.payload);
    // },
    changeApplied: (state) => {
      state.isChanged = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProductsAsync.fulfilled, (state, action) => {
      const st = state;
      st.products = action.payload;
    });
    builder.addCase(deleteProductAsync.fulfilled, (state, action) => {
      const st = state;
      st.isChanged = true;
    });
    builder.addCase(editProductAsync.fulfilled, (state, action) => {
      const st = state;
      st.isChanged = true;
      
    });
  },
});
export const { changeApplied } = productsSlice.actions;

export default productsSlice.reducer;
