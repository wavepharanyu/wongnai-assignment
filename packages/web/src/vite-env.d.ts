/// <reference types="vite/client" />

interface ImportRestaurantType {
    name: string
    id: number
    coverImage: string
    menus: string[]
    activeTimePeriod: {
       open: string
       close: string
     }
}

interface ImportRestaurantContextType {
    restaurantData?: ImportRestaurantType,
    fetchRestaurantData: (id: string) => void,
    isFetching: boolean,
}
  

interface ImportFullMenuType {
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
      choices: groupedChoice[]
    }[],
  }

interface groupedChoice {
    egg? :{
        label: string
    }[],
    spicy? :{
        label: string
    }[],
    rice? :{
        label: string
    }[],
    ice? :{
        label: string
    }[],
    sweet? :{
      label: string
    }[],
    other? :{
      label: string
    }[],
}

interface ImportShortMenuType {
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

interface ImportMenuContextType {
    fullMenu?: ImportShortMenuType[],
    menuDetail?: ImportFullMenuType,
    fetchMenuList: (id: string, category: string) => void,
    fetchMenuDetail: (id: string, menu: string) => void,
    sortMenu: (fullMenu: ImportShortMenuType[], choice: string) => void,
    isFetchingMenu: boolean,
}
