import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarTab from './NavbarTab'
import { Provider } from 'react-redux'
import store from '../store/store'
const RootLayout = () => {
  return (
    <>
    <Provider store={store}>
    <NavbarTab/>
    <main>
        <Outlet/>
    </main>
    </Provider>
    </>
  )
}

export default RootLayout