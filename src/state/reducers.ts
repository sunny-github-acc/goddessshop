import { CombinedState, combineReducers } from 'redux'
import { ProductsReducerInterface } from '../types/productsTypes'
import { ThemeReducerInterface } from '../types/themeTypes'
import productsSlice from './products/ProductsReducer'
import themeSlice from './theme/ThemeReducer'

export interface RootState {
  theme: ThemeReducerInterface
  products: ProductsReducerInterface
}

const rootReducer = combineReducers<CombinedState<RootState>>({
  theme: themeSlice,
  products: productsSlice,
})

export { rootReducer }
