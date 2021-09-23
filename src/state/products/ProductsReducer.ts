/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'
import { ProductsReducerInterface } from '../../types/productsTypes'
import { RootState } from '../reducers'

export const INITIAL_STATE: ProductsReducerInterface = {
  products: [],
  cart: {},
  order: null,
}

const name = 'products'

const productsSlice = createSlice({
  name,
  initialState: INITIAL_STATE,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload
    },
    setCart: (state, action) => {
      state.cart = action.payload
    },
    setOrder: (state, action) => {
      state.order = action.payload
    },
  },
})

export const { setProducts, setCart, setOrder } = productsSlice.actions

export const selectProducts = (state: RootState) => state.products.products
export const selectCart = (state: RootState) => state.products.cart
export const selectOrder = (state: RootState) => state.products.order

export default productsSlice.reducer
