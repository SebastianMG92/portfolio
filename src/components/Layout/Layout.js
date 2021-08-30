import React from "react"
import PropTypes from "prop-types"

import Header from "../Header/Header"
import Footer from '../Footer/Footer'
import "bootstrap/dist/css/bootstrap.css"
import '../../fonts/fonts.css'
import '../../sass/style.scss'


const Layout = ({ children }) => (
  <>
    <Header />
    <main className={`main`}>{children}</main>
    <Footer />
  </>
)
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout