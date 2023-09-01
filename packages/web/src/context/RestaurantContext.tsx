import { createContext, useContext, useReducer, ReactNode  } from "react"; 
import RestaurantReducer from "../reducer/RestaurantReducer";
import axios from "axios";

interface Props {
    children?: ReactNode
}


const initState = {
    isFetching: false,
    fetchRestaurantData: () => {},
    
}

const RestaurantContext = createContext<ImportRestaurantContextType>(initState)

export const MyRestaurantContext = () =>{
    return useContext(RestaurantContext)
}

const RestaurantProvider = ({children} : Props) => {
    const [state,dispatch] = useReducer(RestaurantReducer,initState)
    
    const fetchRestaurantData = async(id: string) => {
        dispatch({type:"FETCH_DATA_REQUEST"})
        let res = await axios.get(`http://localhost:3001/api/restaurants/${id}`)
        dispatch({type:"FETCH_DATA_SUCCESS",payload: res.data})
    }

    return(
        <RestaurantContext.Provider value={{...state,fetchRestaurantData}}>
            {children}
        </RestaurantContext.Provider>
    )
}

export {RestaurantContext,RestaurantProvider}