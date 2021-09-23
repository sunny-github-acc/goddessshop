import {
  AppBar,
  Avatar,
  Badge,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import { Link } from 'gatsby'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import logo from '../../images/background.jpg'
import { selectCart } from '../../state/products/ProductsReducer'
import useStyles from './styles'

const PrimarySearchAppBar = () => {
  const classes = useStyles()

  const cartItems = useSelector(selectCart)

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null)

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null)

  const mobileMenuId = 'primary-search-account-menu-mobile'

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          component={Link}
          to="/cart"
          aria-label="Show cart items"
          color="inherit"
        >
          <Badge badgeContent={cartItems?.total_items} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
    </Menu>
  )

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <Avatar src={logo} alt="eshop" className={classes.image} />
            eshop
          </Typography>

          <div className={classes.grow} />

          {location.pathname === '/products' ? (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cart items"
                color="inherit"
              >
                <Badge badgeContent={cartItems?.total_items} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          ) : null}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </>
  )
}

export default PrimarySearchAppBar
