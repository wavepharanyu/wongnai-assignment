interface MenuState {
    fullMenu?: FullMenuType[],
    menuDetail?: FullMenuType,
    isFetchingMenu: boolean,
}

type Action
  = { type: "FETCH_DATA_SUCCESS"; payload?: FullMenuType[] }
  | { type: "FETCH_DETAIL_SUCCESS"; payload?: FullMenuType }
  | { type: "FETCH_DATA_REQUEST";}
  | { type: "FETCH_DETAIL_REQUEST";}
  | { type: "SORT_DATA";payload?: FullMenuType[]}

interface MenuAction {
    payload?: Action,
    type: string
}

interface FullMenuType {
    name: string
    id: string
    thumbnailImage?: string
    fullPrice: number
    discountedPercent: number
    discountedTimePeriod?: {
       begin: string
       end: string
     }
    sold: number
    totalInStock: number,
    largeImage: string,
    options: {
      label: string
      choices: {
        label: string
      }[]
    }[]
}

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