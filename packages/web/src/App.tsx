import { BrowserRouter, Route, Routes } from 'react-router-dom' 
import Home from './pages/Home'
import MenuCategory from './pages/menu/menuCategory/MenuCategory'
import Menu from './pages/menu/menuList/MenuList'
import MenuDetail from './pages/menu/menuDetail/MenuDetail'

import NotFound from './pages/error/NotFound'
import Layout from './components/Layout'
import './App.scss'

function App() {
  return (

      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/category' element={<MenuCategory/>}/>
          <Route path='/category/:category' element={<Menu/>}/>
          <Route path='/menu/:id' element={<MenuDetail/>}/>

          <Route path="*" element={<NotFound/>}/>
          </Route>
      </Routes>

  )
}

export default App
