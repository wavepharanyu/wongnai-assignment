import { render, screen, cleanup, within } from "@testing-library/react";
import {MemoryRouter} from 'react-router-dom'

import '@testing-library/jest-dom'

import Header from "../components/header/Header";
import { calIsOpen } from "../components/header/Header";

let mockName = "Test"
let mockOpenTime = "09:00"
let mockCloseTime = "18:00"


describe('Header', () =>{
    it('Test Header Name', () => {
        render(<MemoryRouter><Header name={mockName} open={mockOpenTime} close={mockCloseTime} /></MemoryRouter>)
        const element = screen.getByText(mockName);
        expect(element).toBeInTheDocument();
    })

    it('Test function Calculate Open/Close status', () => {

        render(<MemoryRouter><Header name={mockName} open={mockOpenTime} close={mockCloseTime} /></MemoryRouter>)
        const activeComponent = screen.getByTestId( 'header-status' );
        const status = calIsOpen(mockOpenTime , mockCloseTime)

        if(status === true){
            expect( activeComponent ).toHaveTextContent( 'เปิด' );
        }
        else{
            expect( activeComponent ).toHaveTextContent( /^ปิด/ );
        }         
    })
})