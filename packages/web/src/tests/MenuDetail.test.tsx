import { render, screen, cleanup, within } from "@testing-library/react";
import {MemoryRouter} from 'react-router-dom'

import '@testing-library/jest-dom'

import Detail from "../components/menu/menuDetail/Detail";

let mockMenu = {name:"Promotion A หมูสามชั้นคั่วพริกกระเทียมไข่ดาว",
id:"Promotion A หมูสามชั้นคั่วพริกกระเทียมไข่ดาว",
thumbnailImage:"https://img.wongnai.com/p/100x100/2021/07/23/648ea50d691d407eb0cb96efab951b48.jpg",
discountedPercent:0,
sold:100,fullPrice:158,
totalInStock:200,
options:[],
largeImage:"https://img.wongnai.com/p/1920x0/2021/07/23/648ea50d691d407eb0cb96efab951b48.jpg"}

describe('Menu Detail', () =>{
    it('Test Detail Name', () => {
        render(<MemoryRouter><Detail menuDetail={mockMenu}/></MemoryRouter>)
        const name = screen.getByTestId( 'detail-name' );
        expect( name ).toHaveTextContent( mockMenu.name );

    })

    it('Test Detail Image', () => {
        render(<MemoryRouter><Detail menuDetail={mockMenu}/></MemoryRouter>)
        const testImage = document.querySelector("img") as HTMLImageElement;
        expect(testImage.alt).toContain("detailImage")

    })

    
    it('Test Detail Price', () => {
        render(<MemoryRouter><Detail menuDetail={mockMenu}/></MemoryRouter>)
        const price = screen.getByTestId( 'detail-price' );
        expect(price).toBeInTheDocument()
    })
})