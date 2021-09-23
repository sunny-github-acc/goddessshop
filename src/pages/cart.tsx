import { Button, Container, Grid, Typography } from '@material-ui/core'
import { Link } from 'gatsby'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../components/Cart/CartItem/CartItem'
import { commerce } from '../lib/commerce'
import { selectCart, setCart } from '../state/products/ProductsReducer'
import WrapWithProvider from '../state/WrapWithProvider'
import useStyles from './styles/stylesCart'
import * as _ from 'lodash'
import Layout from '../components/Layout'

const Cart = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const cart = useSelector(selectCart)

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty()
    dispatch(setCart(response.cart))
  }

  const handleRemoveFromCart = async lineItemId => {
    const response = await commerce.cart.remove(lineItemId)
    dispatch(setCart(response.cart))
  }

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity })
    dispatch(setCart(response.cart))
  }

  const renderEmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your shopping cart,
      <Link className={classes.link} to="/products">
        start adding some
      </Link>
      !
    </Typography>
  )

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve()
    dispatch(setCart(cart))
  }

  useEffect(() => {
    fetchCart()
  }, [])

  if (_.isEmpty(cart)) return <p>Loading...</p>

  const renderCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map(lineItem => (
          <Grid item xs={12} sm={4} key={lineItem.id}>
            <CartItem
              item={lineItem}
              onUpdateCartQty={handleUpdateCartQty}
              onRemoveFromCart={handleRemoveFromCart}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={handleEmptyCart}
          >
            Empty cart
          </Button>
          <Button
            className={classes.checkoutButton}
            component={Link}
            to="/checkout"
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  )

  return (
    <Layout>
      <Container>
        <div className={classes.toolbar} />
        <Typography className={classes.title} variant="h3" gutterBottom>
          Your Shopping Cart
        </Typography>
        <Button
          className={classes.checkoutButton}
          component={Link}
          to="/products"
          size="large"
          type="button"
          variant="contained"
          color="primary"
        >
          products
        </Button>
        {!cart.line_items.length ? renderEmptyCart() : renderCart()}
      </Container>
    </Layout>
  )
}

const WrappedPage = () => <WrapWithProvider element={<Cart />} />

export default WrappedPage
