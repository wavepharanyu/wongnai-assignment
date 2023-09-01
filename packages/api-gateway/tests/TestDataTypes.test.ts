import { getData } from '../controllers/restaurantController'; 
import { getFilterMenuList } from '../controllers/menuController';
import { getGroupChoiceMenuDetail } from '../controllers/menuController';
import {expectTypeOf} from 'expect-type';

let id = '227018';



type RestauantDataResponse = {
    name: string;
    id: number;
    coverImage: string;
    menus: string[];
    activeTimePeriod: {
       open: string;
       close: string;
    };
}

type MenuDataResponse = {
    name: string;
    id: string;
    thumbnailImage?: string;
    fullPrice: number;
    discountedPercent: number;
    discountedTimePeriod?: {
       begin: string;
       end: string;
     };
    sold: number;
    totalInStock: number;
}

interface MenuDetailResponse {
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
    }[]
}

interface groupedChoice {
    egg? :{
        label?: string
    }[],
    spicy? :{
        label?: string
    }[],
    rice? :{
        label?: string
    }[],
    ice? :{
        label?: string
    }[],
    other? :{
        label?: string
    }[],
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
      choices: {
        label: string
      }[]
    }[]
}

describe('Test Data Type', () =>{

    it('Test Restaurant Data Type', async () => {
        const restaurantData = await getData(id);  
        expectTypeOf(restaurantData.data).toEqualTypeOf<RestauantDataResponse>();  
    })

    it('Test Menu List Type', async () => {
        const menuListData = await getFilterMenuList(id, 'promotion');  
        expectTypeOf(menuListData).toEqualTypeOf<MenuDataResponse[]>();  
    })

    // it('Test Menu Detail Type', async () => {
    //     const menuDetailData = await getGroupChoiceMenuDetail(id, 'bunny');  
    //     expectTypeOf(menuDetailData).toEqualTypeOf<ImportFullMenuType>();  
    // })


})