interface RestaurantState {
    restaurantData?: RestaurantType
    isFetching: boolean,
}

interface RestaurantAction {
    payload?: RestaurantType,
    type: string
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



const RestaurantReducer = (state: RestaurantState,action: RestaurantAction) => {
    if(action.type === "FETCH_DATA_REQUEST"){
        return { ...state, isFetching:true }
    }
    if(action.type === "FETCH_DATA_SUCCESS"){
        return { restaurantData: action.payload, isFetching:false }
    }
    else{
        return state
    }
}

export default RestaurantReducer