import styled from 'styled-components';
import { Link } from "react-router-dom"
import { useEffect } from "react"
import './Banner.scss'
import { MyRestaurantContext } from "../../context/RestaurantContext"
import Loading from "../../components/Loading/Loading"

interface RestaurantContextType {
  restaurantData?: RestaurantType,
  fetchRestaurantData: (id: string) => void,
  isFetching: boolean,
}

interface RestaurantType  {
  name: string
  id: number
  coverImage: string
  menus: string[]
  activeTimePeriod: {
     open: string
     close: string
   }
}



const Banner = () => {
  const { restaurantData, fetchRestaurantData, isFetching }:RestaurantContextType  = MyRestaurantContext() 

  const Container = styled.div<{ coverImage: string }>`
  background-image: url(${(props) => props.coverImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  height:82vh; 
  opacity: 0.7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color:black
`;

  useEffect(()=>{

    fetchRestaurantData('227018')
    
  },[])
  if(!isFetching && restaurantData){
    return(
      <Container coverImage={restaurantData.coverImage}>
        <p className='banner-title'>{restaurantData.name}</p>
        <p className='banner-detail'>Good coffee, good food, good vibes.</p>
        <p className='banner-detail'>wongnai users' choice 2019</p>
        <Link to='/category' className='banner-link'><button className='banner-button'>เมนูอาหาร</button></Link>
      </Container>
    )
  }
  else{
    return (
      <div>
          <Loading/>
      </div>
    )
  }

}

export default Banner