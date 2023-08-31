import React from 'react'
import ReactDOM from 'react-dom'
import { RestaurantProvider } from './context/RestaurantContext'
import { MenuProvider } from './context/MenuContext'
import { BrowserRouter } from 'react-router-dom' 

import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <RestaurantProvider>
        <MenuProvider>
        <App />
        </MenuProvider>
      </RestaurantProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
