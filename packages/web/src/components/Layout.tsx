import Header from "./header/Header";
import Footer from "./footer/Footer";
import { useEffect } from "react"
import { MyRestaurantContext } from "../context/RestaurantContext"
import Loading from "../components/Loading/Loading"

interface Props  {
    children?: React.ReactNode
};

interface RestaurantContextType {
  restaurantData?: RestaurantType,
  fetchRestaurantData: (id: string) => void,
  isFetching: boolean,
}

interface RestaurantType {
  name: string
  id: number
  coverImage: string
  menus: string[]
  activeTimePeriod: {
     open: string
     close: string
   }
}


const Layout = ({children}:Props) => {
  const { restaurantData, fetchRestaurantData, isFetching }:RestaurantContextType  = MyRestaurantContext() 


  useEffect(()=>{
    fetchRestaurantData('227018')
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