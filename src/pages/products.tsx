import Grid from '@material-ui/core/Grid'
import { default as React, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../components/Layout'
import Product from '../components/Products/Product'
import { commerce } from '../lib/commerce'
import {
  selectProducts,
  setCart,
  setProducts,
} from '../state/products/ProductsReducer'
import WrapWithProvider from '../state/WrapWithProvider'
import useStyles from './styles/stylesProducts'

const Products = () => {
  const dispatch = useDispatch()
  const classes = useStyles()

  const products = useSelector(selectProducts)

  const fetchProducts = async () => {
    const { data } = await commerce.products.list()
    dispatch(setProducts(data))
  }

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve()
    dispatch(setCart(cart))
  }

  useEffect(() => {
    fetchProducts()
    fetchCart()
  }, [])

  const onAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity)
    dispatch(setCart(item.cart))
  }

  if (!products.length) return <p>Loading...</p>

  return (
    <Layout>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justifyContent="center" spacing={4}>
          {products.map(product => (
            <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
              <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
          ))}
        </Grid>
      </main>
    </Layout>
  )
}

const WrappedPage = () => <WrapWithProvider element={<Products />} />

export default WrappedPage
