import React from 'react'
import CustomThemeProvider from '../utils/themeProvider'
import Footer from './Footer'
import Navbar from './Navbar'

import { Helmet } from 'react-helmet'

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <style>
          {`
            html, body {
              height: 100%;
            }

            body {  
              box-sizing: border-box;
              margin: 0;
              width: 100vw;
              padding: 0;
              font-family: 'Permanent Marker', cursive;
            }
          `}
        </style>
      </Helmet>

      <CustomThemeProvider>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </CustomThemeProvider>
    </>
  )
}

export default Layout
