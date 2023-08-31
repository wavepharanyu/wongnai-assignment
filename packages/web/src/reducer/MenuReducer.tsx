interface MenuState {
    fullMenu?: ImportShortMenuType[],
    menuDetail?: ImportFullMenuType,
    isFetchingMenu: boolean,
}

type Action
  = { type: "FETCH_DATA_SUCCESS"; payload?: ImportShortMenuType[] }
  | { type: "FETCH_DETAIL_SUCCESS"; payload?: ImportFullMenuType }
  | { type: "FETCH_DATA_REQUEST";}
  | { type: "FETCH_DETAIL_REQUEST";}
  | { type: "SORT_DATA";payload?: ImportShortMenuType[]}


const MenuReducer = (state: MenuState,action: Action) => {
    switch (action.type) {
        case "FETCH_DATA_REQUEST":
            return { ...state, isFetchingMenu:true };
    
        case "FETCH_DATA_SUCCESS":
            return { ...state, fullMenu: action.payload, isFetchingMenu:false };

        case "FETCH_DETAIL_REQUEST":
            return { ...state, isFetchingMenu:true };

        case "FETCH_DETAIL_SUCCESS":
            return { ...state, menuDetail: action.payload, isFetchingMenu:false };

        case "SORT_DATA":
            return { ...state, fullMenu: action.payload };

        default:
            return state;
    }
}

export default MenuReducer