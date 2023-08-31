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

export const getFilterMenuList = async(id :string, category: string) => {
    let restaurantData = await axios.get<RestauantDataResponse>(`https://us-central1-wongnai-frontend-assignment.cloudfunctions.net/api/restaurants/${id}.json`)
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
            let result = await axios.get<MenuDataResponse>(`https://us-central1-wongnai-frontend-assignment.cloudfunctions.net/api/restaurants/${id}/menus/${menu}/short.json`)
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

export async function getMenuFullData (req:Request, res:Response)  {
    const { id, category } = req.params
    try{
        let restaurantData = await axios.get<RestauantDataResponse>(`https://us-central1-wongnai-frontend-assignment.cloudfunctions.net/api/restaurants/${id}.json`)
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
                let result = await axios.get<MenuDataResponse>(`https://us-central1-wongnai-frontend-assignment.cloudfunctions.net/api/restaurants/${id}/menus/${menu}/full.json`)
                menuData.push(result.data)
            })
        );

        menuData.sort((a, b) => {
            const nameA = a.name.toUpperCase(); 
            const nameB = b.name.toUpperCase(); 
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
        })   

        res.status(200).json(menuData);
    }

    catch (err) {
        if (axios.isAxiosError(err) && err.message) {
            console.log(err.message);
        }
    }    
} 