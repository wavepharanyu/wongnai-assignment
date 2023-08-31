import { getData } from '../controllers/restaurantController'; 
import { getFilterMenuList } from '../controllers/menuController';
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


describe('Test Data Type', () =>{

    it('Test Restaurant Data Type', async () => {
        const restaurantData = await getData(id);  
        expectTypeOf(restaurantData.data).toEqualTypeOf<RestauantDataResponse>();  
    })

    it('Test Menu List Type', async () => {
        const menuListData = await getFilterMenuList(id, 'promotion');  
        expectTypeOf(menuListData).toEqualTypeOf<MenuDataResponse[]>();  
    })

})