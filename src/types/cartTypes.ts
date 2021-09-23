export interface CartReducerInterface {
  cart: CartInterface[]
}

export type CartInterface = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}
