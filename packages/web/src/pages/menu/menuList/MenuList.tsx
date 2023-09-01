import { useEffect, useState } from 'react'
// import Layout from '../../../components/Layout'
import { useParams, useNavigate, Link } from 'react-router-dom';
import MenuList from '../../../components/menu/MenuList';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import './MenuList.scss'
import SearchBar from '../../../components/searchBar/SearchBar';
import SortSelection from '../../../components/sortSelection/SortSelection';
import { MyMenuContext } from '../../../context/MenuContext';
import Loading from '../../../components/Loading/Loading';


const Menu = () => {
    let { category } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [word, setWord] = useState<string>("")

    const [checked, setChecked] = useState(false)

    const { fullMenu, fetchMenuList, isFetchingMenu }:ImportMenuContextType  = MyMenuContext() 
  
    useEffect(()=>{

        if(category === "promotion"){
            setTitle('Promotions')
            // fetchMenuList(import.meta.env.VITE_RESTAURANT_ID, category)
            fetchMenuList('227018', category)
        }
        else if(category === "set"){
            setTitle('Set & Duo')
            fetchMenuList('227018', category)
        }
        else if(category === "food"){
            setTitle('Foods & Beverages')
            fetchMenuList('227018', category)
        }
        else{
            navigate('/404')
        }
    },[])
    
    if(fullMenu && !isFetchingMenu){
        const searchMenus = fullMenu.filter((item) => {
            return item.name.toString().toLowerCase().indexOf(word.toLowerCase())>-1
        });

     return (
            <div className='menu-wrapper'>
                <div className='menu-container'>
                    <div className='menu-header'>
                        <Link to='/category' className='link-button'><button className='back-button'><img className='image-button' src="/images/left-arrow.png"/></button></Link>
                        <h1 className='menu-title'>{title}</h1>
                    </div>
                    <div className='menu-search'>
                        <SearchBar word={word} setWord={setWord}/>
                        <SortSelection menus={searchMenus}/>
                    </div>
                    <div className='mockup-container'>
                        {category === "promotion" &&
                            <FormControlLabel
                                    sx={{
                                        //display: 'block',
                                        textAlign: 'center'
                                    }}
                                    control={
                                    <Switch
                                        checked={checked}
                                        onChange={() => setChecked(!checked)}
                                        name="mockupDiscount"
                                        color="primary"
                                    />
                                    }
                                    label={`${checked ? 'ปิด Mock Up Discount': 'เปิด Mock Up Discount'}`}
                            />
                        }
                    </div>
                    <MenuList menus={searchMenus} checked={checked}/>
                </div>
            </div>
    )
}
    else{
        return(
                <Loading />
        )
    }
}

export default Menu