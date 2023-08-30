import { useState } from 'react'
import Timer from '../../timer/Timer'
import './MenuItem.scss'
import { Link } from 'react-router-dom'

interface MyComponentProps { 
	menu: FullMenuType ,
    checked: boolean
}


interface FullMenuType {
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

const MenuItem = ({menu, checked} : MyComponentProps ) => {
    const [isInPeriod, setIsInPeriod] = useState(true)
    const endDate = "2023-09-15T12:00:00"
    //const endDate = "2023-08-30T05:25:00"
    const { begin, end }= menu.discountedTimePeriod || {} 
    let diffPeriod = 0
    let mockIsInPeriod = new Date(endDate).getTime() - new Date().getTime()
    if(end){
        let endTime = new Date(end).getTime()
        let nowTime = new Date().getTime()
        diffPeriod = endTime - nowTime
    }

  return (
    <div className='menuitem-container'>
    <Link to={`/menu/${menu.id}`} className='menuitem-link'>
        <img className='image' src={`${menu.largeImage !== undefined ? menu.largeImage : '/images/cutlery.png'}`}/>
        <div className='menuitem-detail'>
        <p className='name'>{menu.name}</p>
        <div className='menuitem-price'>
            { !checked && <p className={`${(diffPeriod > 0 && menu.discountedPercent > 0 && isInPeriod)  ? 'price-line' : 'price'}`}>฿ {menu.fullPrice}</p>}
            { !checked && diffPeriod > 0 && menu.discountedPercent > 0 && isInPeriod && <p className='discount'>฿ {(menu.fullPrice*(100-menu.discountedPercent))/100}</p>}

            {/* Mock Up Discount */}
            { checked && <p className={`${(isInPeriod)  ? 'price-line' : 'price'}`}>฿ {menu.fullPrice}</p>}
            { checked && mockIsInPeriod > 0 && isInPeriod && <p className='discount'>฿ {(menu.fullPrice*80)/100}</p>}


        </div>
        <div className='menuitem-stock'>
            <p className='text'>ขายไปแล้ว {menu.sold}</p>
            <p className='text'>เหลือ {menu.totalInStock}</p>
        </div>
        </div>
        {menu.discountedTimePeriod && diffPeriod > 0 && <Timer endDate={end} setIsInPeriod={setIsInPeriod}/>}

        {/* Mock Up Discount */}
        {checked && mockIsInPeriod > 0 && <Timer endDate={endDate} setIsInPeriod={setIsInPeriod}/>}
    </Link>
  </div>
  )
}

export default MenuItem