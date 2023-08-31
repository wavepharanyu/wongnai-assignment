import React, { useEffect } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { MyMenuContext } from '../../context/MenuContext';
import './SortSelection.scss'

interface MyComponentProps { 
    menus : ImportShortMenuType[]
}


const SortSelection = ({ menus }:MyComponentProps) => {
    const [sort, setSort] = React.useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setSort(event.target.value);
    };
  
    const { sortMenu }:ImportMenuContextType  = MyMenuContext() 

    useEffect(()=>{
        if(sort){
            sortMenu(menus, sort)
        }
    },[sort])

    return (
        <div>
            <FormControl sx={{ m: 1,width: 150 }} size="small">
                <InputLabel id="demo-simple-select-helper-label">เรียงตาม</InputLabel>
                <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={sort}
                label="เรียงตาม"
                onChange={handleChange}
                data-testid="select"
                >
                <MenuItem value="bestSell">ขายดีที่สุด</MenuItem>
                <MenuItem value="priceDesc">ราคามาก-น้อย</MenuItem>
                <MenuItem value="priceAsc">ราคาน้อย-มาก</MenuItem>
                </Select>
            </FormControl>
        </div>
  )
}

export default SortSelection