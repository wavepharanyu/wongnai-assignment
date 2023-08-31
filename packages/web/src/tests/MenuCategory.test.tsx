import { render, screen, cleanup, within, fireEvent } from "@testing-library/react";
import {MemoryRouter} from 'react-router-dom'

import '@testing-library/jest-dom'

import MenuCategory from "../pages/menu/menuCategory/MenuCategory";
let mockName = "Test"
let mockOpenTime = "09:00"
let mockCloseTime = "18:00"


describe('Menu Category', () =>{
    it('Test Button Click to Next Page', () => {
        render(<MemoryRouter><MenuCategory/></MemoryRouter>)

        const element = screen.getAllByTestId('category-button')

        expect(element).toHaveLength(3)

        fireEvent.click(element[0])

        const element_nextPage = screen.getByText('Promotions')

        expect(element_nextPage).toBeInTheDocument()

    })

})