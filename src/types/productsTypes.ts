export interface ProductsReducerInterface {
  products: ProductInterface[]
  cart: CartInterface
  order: any // OrderInterface[]
}

export type ProductInterface = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export type CartInterface = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export type OrderInterface = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}
