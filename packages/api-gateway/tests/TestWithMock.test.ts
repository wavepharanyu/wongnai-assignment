import { getData } from '../controllers/restaurantController'; 
import {expectTypeOf} from 'expect-type';
import axios from 'axios';

let id1 = '227018';
let id2 = '567051';

let mockRestaurantData = {
                    name:"ลืมเคี้ยว",
                    id:567051,
                    coverImage:"https://img.wongnai.com/p/1920x0/2021/08/14/f6ae0252eb0d44b79553c0dba6e56cfe.jpg",
                    activeTimePeriod:{open:"10:30",close:"20:00"}
                    ,menus:["ข้าวผัดปลาทู","โรตี แกงเขียวหวานหมู  ไก่","หมึกผัดพริกเผา","ต้มยำทะเลน้ำขัน น้ำใส","แกงเขียวหวานหมู  ไก่",
                    "โรตี แกงเขียวหวานหมู  ไก่","ข้าวผัดปลาทู","ข้าวผัดแหนม","ข้าวผัดหมูอาบแดด","ข้าวผัดคะน้าหมู ไก่","ข้าวผัดกุนเชียง","ข้าวผัดกุ้ง",
                    "ข้าวหมูกระเทียม","ข้าวกะเพราหมูสับ หมูชิ้น  ไก่","ข้าวกะเพราทะเล","ข้าวพริกแกงหมู  ไก่","ข้าวพริกแกงทะเล","ข้าวผัดแกงเขียวหวานหมู  ไก่",
                    "ข้าวผัดแกงเขียวหวานทะเล","มัักกัโรนีหมู  ไก่","มักกะโรนีทะเล","สปาเก็ตตี้ขี้เมาหมู  ไก","สปาเก็ตตี้ผัดขี้เมาทะเล","ผัดหอยลาย","หมึกผัดพริกเผา",
                    "กุ้งผัดพริกสด","กะเพราหมู  ไก่","กะเพราทะเล","คะน้าหมู  ไก่ (พริกสด)","พริกแกงหมู  ไก่","พริกแกงทะเล","หมู  ไก่  กระเทียม",
                    "ไข้เจียวหมูสับ","เขียวหวานผัดแห้ง หมู ไก่","เขียวหวานผัดแห้ง ทะเล","แกงเขียวหวานหมู  ไก่","แกงเขียวหวานทะเล","ต้มยำทะเลน้ำขัน น้ำใส",
                    "แกงจืดเต้าหู้หมูสับ","ไก่ตะเกียบทอดเกลือ","หมูอาบแดด","คอหมูย่าง","น้ำตกหมู","ลาบหมู","ไข่ดาว","ข้าวเปล่า","ยำรวมมิตรทะเล",
                    "ยำไข่ดาว","ยำปลาสลิด","น้ำดื่มคริสตัล","เอสเพลย์  โคล่า","เอสเพลย์ กลิ่นส้ม","เอสเพลย์ กลิ่นเกรปเบอร์รี่","เอสเพลย์ กลิ่นสตรอเบอร์รี่",
                    "เอสเพลย์ กลิ่นครีมโซดา","โออิชิ กรีนที รสดั้งเดิม","โออิชิ กรีนที รสน้ำผึ้งผสมมะนาว","โออิชิ กรีนที รสข้าวญี่ปุ่น","โออิชิ กรีนที รสแตงโม",
                    "โออิชิ กรีนที รสองุ่นเคียวโฮ","วี บูสท์ รสส้ม","วี บูสท์   รสเลมอน","ติ๊บน้องโบ้","ติ๊บจูจิ"]
                }

let mockMenulistData = [{name:"Promotion A หมูสามชั้นคั่วพริกกระเทียมไข่ดาว",id:"Promotion A หมูสามชั้นคั่วพริกกระเทียมไข่ดาว",thumbnailImage:"https://img.wongnai.com/p/100x100/2021/07/23/648ea50d691d407eb0cb96efab951b48.jpg",discountedPercent:0,fullPrice:158,sold:100,totalInStock:200},
                        {name:"Promotion B กะเพราหมูสับ ไข่ดาว",id:"Promotion B กะเพราหมูสับ ไข่ดาว",thumbnailImage:"https://img.wongnai.com/p/100x100/2021/07/23/29eacbe29c734379a8390963d3926d25.jpg",discountedPercent:0,fullPrice:128,sold:100,totalInStock:200},
                        {name:"Promotion C กะเพราเนื้อสับ ไข่ดาว",id:"Promotion C กะเพราเนื้อสับ ไข่ดาว",thumbnailImage:"https://img.wongnai.com/p/100x100/2021/07/23/45794e90d05a45c1afae9e752ee49e4a.jpg",discountedPercent:0,fullPrice:168,sold:100,totalInStock:200},
                        {name:"Promotion D ข้าวหมูกระเทียมไข่ดาว",id:"Promotion D ข้าวหมูกระเทียมไข่ดาว",thumbnailImage:"https://img.wongnai.com/p/100x100/2021/08/05/0e8439b537244c09a8669849c5fb995e.jpg",discountedPercent:0,fullPrice:128,sold:100,totalInStock:200}]

let mockMenuDetailData = {
    name: "Promotion A หมูสามชั้นคั่วพริกกระเทียมไข่ดาว",
    id: "Promotion A หมูสามชั้นคั่วพริกกระเทียมไข่ดาว",
    thumbnailImage: "https://img.wongnai.com/p/100x100/2021/07/23/648ea50d691d407eb0cb96efab951b48.jpg",
    discountedPercent: 0,
    sold: 100,
    fullPrice: 158,
    totalInStock: 200,
    options: [
        {
            label: "สามชั้นคั่วพริกกระเทียม",
            choices: {
                other: [
                    {
                        label: "Take Away ใส่กล่อง"
                    },
                    {
                        label: "ไม่ใส่กระเทียม No Garlic"
                    }
                ],
                spicy: [
                    {
                        label: "ไม่เผ็ด Non Spicy"
                    },
                    {
                        label: "เผ็ดน้อย Less Spicy"
                    },
                    {
                        label: "เผ็ดกลาง Normal Spicy"
                    },
                    {
                        label: "เพิ่มเผ็ด Extra Spicy"
                    }
                ],
                rice: [
                    {
                        label: "ไม่รับข้าว No Rice"
                    },
                    {
                        label: "ข้าวน้อย Less Rice"
                    }
                ],
                egg: [
                    {
                        label: "ไม่รับไข่ No Egg"
                    },
                    {
                        label: "ไข่ดาวไม่สุก Sunny Side Up Egg"
                    },
                    {
                        label: "ไข่ดาวสุก Fully Cooked Egg"
                    },
                    {
                        label: "เปลี่ยนเป็นไข่ข้น Half Cooked Egg"
                    },
                    {
                        label: "เปลี่ยนเป็นไข่เจียว Thai Style Omelette"
                    },
                    {
                        label: "เปลี่ยนเป็นไข่ออนเซ็น Onsen Egg"
                    }
                ]
            }
        }
    ],
    largeImage: "https://img.wongnai.com/p/1920x0/2021/07/23/648ea50d691d407eb0cb96efab951b48.jpg"
}

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Test with Mock Data', () =>{

    it('Test Restaurant Data', async () => {
        mockedAxios.get.mockResolvedValue({data :mockRestaurantData})
        const restaurantData = await getData(id2);  
        expect(restaurantData.data).toEqual(mockRestaurantData);
    })

    it('Test Menu List Data', async () => {
        mockedAxios.get.mockResolvedValue({data :mockMenulistData})
        const restaurantData = await getData(id1);  
        expect(restaurantData.data).toEqual(mockMenulistData);
    })

    it('Test Menu List Data', async () => {
        mockedAxios.get.mockResolvedValue({data :mockMenulistData})
        const restaurantData = await getData(id1);  
        expect(restaurantData.data).toEqual(mockMenulistData);
    })

})