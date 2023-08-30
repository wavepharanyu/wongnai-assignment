import React, {ReactNode} from 'react'
import { RestaurantProvider } from './RestaurantContext' 
import { MenuProvider } from './MenuContext'

interface Props {
    children?: ReactNode
}


const AppProvider = ({children}:Props) => {
  return (
        <RestaurantProvider>
            <MenuProvider>
                {children}
            </MenuProvider>
        </RestaurantProvider>        
  )
}

export default AppProvider