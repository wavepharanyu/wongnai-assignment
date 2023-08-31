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
    switch(action.type){
        case "FETCH_DATA_REQUEST":
            return { ...state, isFetching:true }

        case "FETCH_DATA_SUCCESS":
            return { restaurantData: action.payload, isFetching:false }

        default:
            return state
    }
}

export default RestaurantReducer