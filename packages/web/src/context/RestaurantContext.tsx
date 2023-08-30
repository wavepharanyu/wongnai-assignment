import { createContext, useContext, useReducer, ReactNode  } from "react"; 
import RestaurantReducer from "../reducer/RestaurantReducer";
import axios from "axios";

interface RestaurantContextType {
    restaurantData?: RestaurantType,
    fetchRestaurantData: (id: string) => void,
    isFetching: boolean,
}

interface Props {
    children?: ReactNode
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

const initState = {
    isFetching: false,
    fetchRestaurantData: () => {},
    
}

const RestaurantContext = createContext<RestaurantContextType>(initState)

export const MyRestaurantContext = () =>{
    return useContext(RestaurantContext)
}

const RestaurantProvider = ({children} : Props) => {
    const [state,dispatch] = useReducer(RestaurantReducer,initState)
    
    const fetchRestaurantData = async(id: string) => {
        dispatch({type:"FETCH_DATA_REQUEST"})
        let res = await axios.get(`http://localhost:3001/api/restaurant/${id}`)
        dispatch({type:"FETCH_DATA_SUCCESS",payload: res.data})
    }

    return(
        <RestaurantContext.Provider value={{...state,fetchRestaurantData}}>
            {children}
        </RestaurantContext.Provider>
    )
}

export {RestaurantContext,RestaurantProvider}