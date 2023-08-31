import { useEffect, useState } from 'react'
import MenuItem from './menuItem/MenuItem'
import './MenuList.scss'


interface MyComponentProps { 
  checked: boolean,
  menus : ImportShortMenuType[],

}


const MenuList = ({checked,menus} : MyComponentProps) => {
    return (
      <div className='menulist-container'>
        <div className='menulist-list'>
          {menus.map((menu)=>{
            return(
              <MenuItem menu={menu} checked={checked} key={menu.id} />
            )
          })}
        </div>
      </div>
    )
  }

export default MenuList