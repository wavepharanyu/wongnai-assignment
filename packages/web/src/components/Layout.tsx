import Header from "./header/Header";
import Footer from "./footer/Footer";
import { useEffect } from "react"
import { MyRestaurantContext } from "../context/RestaurantContext"
import Loading from "../components/Loading/Loading"
import React from "react"
import { Outlet } from 'react-router-dom' 


const Layout = () => {
  const { restaurantData, fetchRestaurantData, isFetching }:ImportRestaurantContextType  = MyRestaurantContext() 


  useEffect(()=>{
    fetchRestaurantData("227018")
    
  },[])

  if(restaurantData){
    return (
        <React.Fragment>
          <Header name={restaurantData.name} open={restaurantData.activeTimePeriod.open} close={restaurantData.activeTimePeriod.close}/>
              <Outlet/>
          <Footer open={restaurantData.activeTimePeriod.open} close={restaurantData.activeTimePeriod.close}/>
        </React.Fragment>
    )
  }
  else{
    return (
      <React.Fragment></React.Fragment>
    )
  }

}

export default Layout