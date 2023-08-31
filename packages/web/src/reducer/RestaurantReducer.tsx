interface RestaurantState {
    restaurantData?: ImportRestaurantType
    isFetching: boolean,
}

interface RestaurantAction {
    payload?: ImportRestaurantType,
    type: string
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