import Header from "./header/Header";
import Footer from "./footer/Footer";
import { useEffect } from "react"
import { MyRestaurantContext } from "../context/RestaurantContext"
import Loading from "../components/Loading/Loading"

interface Props  {
    children?: React.ReactNode
};


const Layout = ({children}:Props) => {
  const { restaurantData, fetchRestaurantData, isFetching }:ImportRestaurantContextType  = MyRestaurantContext() 


  useEffect(()=>{
    fetchRestaurantData(import.meta.env.VITE_RESTAURANT_ID)
  },[])

  if(restaurantData){
    return (
      <div>
          <Header name={restaurantData.name} open={restaurantData.activeTimePeriod.open} close={restaurantData.activeTimePeriod.close}/>
              {children}
          <Footer open={restaurantData.activeTimePeriod.open} close={restaurantData.activeTimePeriod.close}/>
      </div>
    )
  }
  else{
    return null
  }

}

export default Layout