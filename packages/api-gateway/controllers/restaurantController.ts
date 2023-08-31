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

export function getData(id :string){
    return axios.get<RestauantDataResponse>(`https://us-central1-wongnai-frontend-assignment.cloudfunctions.net/api/restaurants/${id}.json`)
}
  

export async function getRestaurantData (req:Request, res:Response)  {
    const { id } = req.params
    let result
    try{
        result = await getData(id)
        res.status(200).json(result.data);
    }

    catch (err) {
        if (axios.isAxiosError(err) && err.message) {
            console.log(err.message);
        }
    }    


} 