import { useEffect, useState } from 'react'
import MenuItem from './menuItem/MenuItem'
import './MenuList.scss'


interface MyComponentProps { 
	categoryName: string ,
  checked: boolean,
  menus : FullMenuType[],
  isLoading: boolean
}

interface FullMenuType  {
  name: string
  id: string
  thumbnailImage?: string
  fullPrice: number
  discountedPercent: number
  discountedTimePeriod?: {
     begin: string
     end: string
   }
  sold: number
  totalInStock: number,
  largeImage: string,
  options: {
    label: string
    choices: {
      label: string
    }[]
  }[]
}


const MenuList = ({checked,menus} : MyComponentProps) => {

    return (
      <div className='menulist-container'>
        <div className='menulist-list'>
          {menus.map((menu)=>{
            return(
              <MenuItem menu={menu} checked={checked} key={menu.id}/>
            )
          })}
        </div>
      </div>
    )
  }

export default MenuList