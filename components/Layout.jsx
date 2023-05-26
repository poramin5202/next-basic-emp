import React from 'react'
import HeaderApp from './HeaderApp'
import FooterApp from './FooterApp'
import 'bootstrap/dist/css/bootstrap.min.css'

const Layout = ({children}) => {
  return (
    <div>
      <HeaderApp />
            {children}
        <FooterApp />
    </div>
  )
}

export default Layout
