import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postProductToCart, getUser, changeCart } from "../api/index";

export const getCartAsync = createAsyncThunk("cart/getCart", async (user) => {
  return;
});

export const addToCartAsync = createAsyncThunk(
  "cart/addToCart",
  async ({ user, product }, thunkApi) => {
    const state = thunkApi.getState();

    const { cart } = user;
    //find product from cart
    const currentProductInCart = cart.find(
      (value) => value.productId === product.id
    );

    //existing product
    if (currentProductInCart) {
      cart.map((value) => {
        if (value.productId === product.id) {
          value.quantity++;
        }
        return value;
      });
    }
    //doesnt exist
    else {
      cart.push({
        productId: product.id,
        productName: product.name,
        productModel: product.model,
        quantity: 1,
        price: product.price,
        image: product.image
      });
    }
    //changeCartAsync

    const result = await postProductToCart(user.id, { ...user, cart });

    return result;
  }
);

export const decreaseCartAsync = createAsyncThunk(
  "cart/decreaseCart",
  async ({ user, product }, thunkApi) => {
    const state = thunkApi.getState();
    const { cart } = user;
    let cartResult = [...cart];
    //find product in cart
    const currentProductInCart = cartResult.find(
      (value) => value.productId === product.id
    );
    let index = cartResult.indexOf(currentProductInCart);
    //existing product
    if (currentProductInCart) {
      cartResult = cartResult.map((value, i) => {
        if (+value.productId === +product.id) {
          if (+(value?.quantity) > 0) {
            value.quantity--;
          }
        }
        return value;
      });
      if (currentProductInCart.quantity == 0){
        cartResult.splice(index, 1)
      }
    }

    //changeCartAsync
    const result = await postProductToCart(user.id, {
      ...user,
      cart: cartResult,
    });

    return result;
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    productsInCart: [],
    cartQuantity: 0,
    cartPriceSum: 0,
    isChanged: true,
    isSaveClicked: false,
  },
  reducers: {
    getCart: (state, action) => {
        state.productsInCart = action.payload;
    },
    changeApplied: (state) => {
        state.isChanged = !state.isChanged;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getCartAsync.fulfilled, (state, action) => {
        const st = state;
        st.productsInCart = action.payload.cart;
    //   state.productsInCart = action.payload.cart;
      // state.isChanged = false;
    });
    builder.addCase(addToCartAsync.pending, (state, action) => {
      // console.log(action);
    });
    builder.addCase(addToCartAsync.fulfilled, (state, action) => {
      console.log(action.payload);
      const st = state;
      st.productsInCart = action.payload.cart;
    });
  },
});
export const { cartSummary, changeApplied, clickSimpleAdd, clickDecrease, getCart } =
  cartSlice.actions;
export default cartSlice.reducer;
