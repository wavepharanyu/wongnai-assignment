import Layout from "../../../components/Layout"
import { Link } from "react-router-dom"
import './MenuCategory.scss'

const categoryItems = [
  {name: "Promotions", image:'/images/promotion.jpg' , linkUrl: '/category/promotion'},
  {name: "Set & Duo", image:'/images/set.jpg' , linkUrl: '/category/set'},
  {name: "Foods & Beverages", image:'/images/food.jpg' , linkUrl: '/category/food'}
]

const MenuCategory = () => {
  return (

      <div className="category-container" >
        <h1 className="category-title" data-testid='category-container'>เมนูอาหาร</h1>
        <div className="category-list">
          {categoryItems.map((item,index) => {
            return(
              <div className="category-item" key={index}>
                  <img className="image" src={item.image} />
                  <div className="detail">
                    <h2 className="text">{item.name}</h2>
                    <Link to={item.linkUrl} className="link"><button className="button" data-testid='category-button'>ดูเมนู</button></Link>
                  </div>
              </div>
            )
          })}
       </div>
      </div>

  )
}

export default MenuCategory