import { Request, Response } from 'express';
import axios from 'axios';

interface RestauantDataResponse {
    name: string,
    id: number,
    coverImage: string,
    menus: string[],
    activeTimePeriod: {
       open: string
       close: string
     }
};
  
interface MenuDataResponse {
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

export const getFilterMenuList = async(idRest :string, category: string) => {
    let restaurantData = await axios.get<RestauantDataResponse>(`https://us-central1-wongnai-frontend-assignment.cloudfunctions.net/api/restaurants/${idRest}.json`)
    let restaurantMenus = restaurantData.data.menus

    let menusFilter
    if(category === "set"){
        menusFilter = restaurantMenus.filter((menu) => (menu.toLowerCase().includes("set") || menu.includes("Duo")))
    }
    else if(category === "food"){
        menusFilter = restaurantMenus.filter((menu) => !(menu.toLowerCase().includes("set") || menu.includes("Duo") || menu.includes("promotion")))
    }
    else{
        menusFilter = restaurantMenus.filter((menu) => menu.toLowerCase().includes(category.toLowerCase()))
    }

    let menuData: MenuDataResponse[] = [] 
    await Promise.all(
        menusFilter.map(async(menu) => {
            let result = await axios.get<MenuDataResponse>(`https://us-central1-wongnai-frontend-assignment.cloudfunctions.net/api/restaurants/${idRest}/menus/${menu}/short.json`)
            menuData.push(result.data)
        })
    );

    return( menuData.sort((a, b) => {
        const nameA = a.name.toUpperCase(); 
        const nameB = b.name.toUpperCase(); 
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
    }))
}

export async function getMenuListData (req:Request, res:Response)  {
    const { id, category } = req.params
    try{
        const MenuListData = await getFilterMenuList(id,category)
        res.status(200).json(MenuListData);
    }

    catch (err) {
        if (axios.isAxiosError(err) && err.message) {
            console.log(err.message);
        }
    }    
} 


export const getGroupChoiceMenuDetail = async(idRest :string, menuId: string) => {
    let result = await axios.get<ImportFullMenuType>(`https://us-central1-wongnai-frontend-assignment.cloudfunctions.net/api/restaurants/${idRest}/menus/${menuId}/full.json`)

    let fullMenu = result.data

    let grouped: any;

    fullMenu.options.forEach(function(d) {
        grouped = {};

        let egg = 'egg'
        let spicy = 'spicy'
        let rice = 'rice'
        let ice = 'ice'
        let sweet = 'sweet'
        let other = 'other'
        d.choices.forEach(function(t) {
            if(t.label.includes('ไข่')){
                if (!grouped[egg]) {
                    grouped[egg] = [];
                }
                grouped[egg].push({
                    label: t.label
                });
            }
            else if(t.label.toLowerCase().includes(spicy)){
                if (!grouped[spicy]) {
                    grouped[spicy] = [];
                }
                grouped[spicy].push({
                    label: t.label
                });
            }
            else if(t.label.toLowerCase().includes(rice)){
                if (!grouped[rice]) {
                    grouped[rice] = [];
                }
                grouped[rice].push({
                    label: t.label
                });
            }
            else if(t.label.toLowerCase().includes(sweet)){
                if (!grouped[sweet]) {
                    grouped[sweet] = [];
                }
                grouped[sweet].push({
                    label: t.label
                });
            }
            else if(t.label.toLowerCase().includes(ice)){
                if (!grouped[ice]) {
                    grouped[ice] = [];
                }
                grouped[ice].push({
                    label: t.label
                });
            }
            else{
                if (!grouped[other]) {
                    grouped[other] = [];
                }
                grouped[other].push({
                    label: t.label
                });
            }
        })
        d.choices = grouped
    });
    return fullMenu
}


export async function getMenuDetailData (req:Request, res:Response)  {
    const { id, menu } = req.params
    try{
        const MenuDetailData = await getGroupChoiceMenuDetail(id,menu)

        res.status(200).json(MenuDetailData);
    }

    catch (err) {
        if (axios.isAxiosError(err) && err.message) {
            console.log(err.message);
        }
    }    
} 