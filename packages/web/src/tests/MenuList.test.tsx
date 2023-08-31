import { render, screen, fireEvent, waitFor} from "@testing-library/react";
import {MemoryRouter} from 'react-router-dom'

import SortSelection from "../components/sortSelection/SortSelection";

import '@testing-library/jest-dom'

import MenuList from "../components/menu/MenuList";


let mockMenuList = [
    {
        name: "Promotion A",
        id: "Promotion A",
        thumbnailImage: "https://img.wongnai.com/p/100x100/2021/07/23/648ea50d691d407eb0cb96efab951b48.jpg",
        discountedPercent: 0,
        fullPrice: 158,
        sold: 100,
        totalInStock: 200
    },
    {
        name: "Promotion B",
        id: "Promotion B",
        thumbnailImage: "https://img.wongnai.com/p/100x100/2021/07/23/29eacbe29c734379a8390963d3926d25.jpg",
        discountedPercent: 0,
        fullPrice: 100,
        sold: 100,
        totalInStock: 200
    },
    {
        name: "Promotion C",
        id: "Promotion C",
        thumbnailImage: "https://img.wongnai.com/p/100x100/2021/07/23/45794e90d05a45c1afae9e752ee49e4a.jpg",
        discountedPercent: 0,
        fullPrice: 168,
        sold: 100,
        totalInStock: 200
    },
    {
        name: "Promotion D",
        id: "Promotion D",
        thumbnailImage: "https://img.wongnai.com/p/100x100/2021/08/05/0e8439b537244c09a8669849c5fb995e.jpg",
        discountedPercent: 0,
        fullPrice: 128,
        sold: 100,
        totalInStock: 200
    }
]

let sortResult = [
    {
        name: "Promotion C",
        id: "Promotion C",
        thumbnailImage: "https://img.wongnai.com/p/100x100/2021/07/23/45794e90d05a45c1afae9e752ee49e4a.jpg",
        discountedPercent: 0,
        fullPrice: 168,
        sold: 100,
        totalInStock: 200
    },
    {
        name: "Promotion A",
        id: "Promotion A",
        thumbnailImage: "https://img.wongnai.com/p/100x100/2021/07/23/648ea50d691d407eb0cb96efab951b48.jpg",
        discountedPercent: 0,
        fullPrice: 158,
        sold: 100,
        totalInStock: 200
    },
    {
        name: "Promotion D",
        id: "Promotion D",
        thumbnailImage: "https://img.wongnai.com/p/100x100/2021/08/05/0e8439b537244c09a8669849c5fb995e.jpg",
        discountedPercent: 0,
        fullPrice: 128,
        sold: 100,
        totalInStock: 200
    },
    {
        name: "Promotion B",
        id: "Promotion B",
        thumbnailImage: "https://img.wongnai.com/p/100x100/2021/07/23/29eacbe29c734379a8390963d3926d25.jpg",
        discountedPercent: 0,
        fullPrice: 100,
        sold: 100,
        totalInStock: 200
    },
]


describe('Menu List', () =>{
    it('Test Menu List Render', () => {
        render(<MemoryRouter><MenuList checked={false} menus={mockMenuList}/></MemoryRouter>)

        const menuItem = screen.getAllByTestId('menu-item')

        expect(menuItem).toHaveLength(mockMenuList.length)
    })

    it('Test Sort Selection Click', async() => {
        render(<MemoryRouter><SortSelection menus={mockMenuList}/></MemoryRouter>)

        fireEvent.mouseDown(screen.getByLabelText("เรียงตาม"));
        fireEvent.mouseDown(screen.getByText("ราคามาก-น้อย"));
       
        //expect(screen.getByText("ราคามาก-น้อย")).toBeInTheDocument()

    })

    it('Test Discount Mockup', () => { 
        render(<MemoryRouter><MenuList checked={true} menus={mockMenuList}/></MemoryRouter>)

        const discountPrice = screen.getAllByTestId('menu-item-discount')

        expect(discountPrice).toHaveLength(mockMenuList.length)
    })

    it('Test Click Menu Item to Menu Detail Page', () => {
        render(<MemoryRouter><MenuList checked={false} menus={mockMenuList}/></MemoryRouter>)

        const menuItem = screen.getAllByTestId('menu-item-button')

        expect(menuItem).toHaveLength(mockMenuList.length)

        fireEvent.click(menuItem[0])

        const element_nextPage = screen.getByText(mockMenuList[0].name)

        expect(element_nextPage).toBeInTheDocument()
    })
})