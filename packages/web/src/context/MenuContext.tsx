import { createContext, useContext, useReducer, ReactNode  } from "react"; 
import MenuReducer from "../reducer/MenuReducer";
import axios from "axios";

interface Props {
    children?: ReactNode
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

interface ShortMenuType {
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
    totalInStock: number
}

const initState = {
    isFetchingMenu: false,
    fetchMenuList: () => {},
    fetchMenuDetail: () => {},
    sortMenu: () => {}
}

const MenuContext = createContext<ImportMenuContextType>(initState)

export const MyMenuContext = () =>{
    return useContext(MenuContext)
}

const MenuProvider = ({children} : Props) => {
    const [state,dispatch] = useReducer(MenuReducer,initState)
    
    const fetchMenuList = async(id: string, category: string) => {
        dispatch({type:"FETCH_DATA_REQUEST"})
        let res = await axios.get(`http://localhost:3001/api/restaurant/${id}/${category}/menulist`)
        dispatch({type:"FETCH_DATA_SUCCESS",payload: res.data})
    }

    const fetchMenuDetail = async(id: string, menu: string) => {
        dispatch({type:"FETCH_DETAIL_REQUEST"})
        let res = await axios.get(`https://us-central1-wongnai-frontend-assignment.cloudfunctions.net/api/restaurants/${id}/menus/${menu}/full.json`)
        dispatch({type:"FETCH_DETAIL_SUCCESS",payload: res.data})
    }

    const sortMenu = (fullMenu: ImportShortMenuType[], choice: string) => {
        let menuSort

        if(choice === "bestSell"){
            menuSort =  fullMenu.sort((a, b) => a.sold - b.sold).reverse();
        }
        else if(choice === "priceDesc"){
            menuSort =  fullMenu.sort((a, b) => (a.discountedPercent ? (a.fullPrice*(100-a.discountedPercent)) :a.fullPrice ) - (b.discountedPercent ? (b.fullPrice*(100-b.discountedPercent)) :b.fullPrice )).reverse();

        }
        else if(choice === "priceAsc"){
            menuSort =  fullMenu.sort((a, b) => (a.discountedPercent ? (a.fullPrice*(100-a.discountedPercent)) :a.fullPrice ) - (b.discountedPercent ? (b.fullPrice*(100-b.discountedPercent)) :b.fullPrice ));

        }
        dispatch({type:"SORT_DATA",payload: menuSort})
    }

    return(
        <MenuContext.Provider value={{...state,fetchMenuList,fetchMenuDetail,sortMenu}}>
            {children}
        </MenuContext.Provider>
    )
}

export {MenuContext,MenuProvider}