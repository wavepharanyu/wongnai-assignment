import { useEffect, useState } from 'react'
import Layout from '../../../components/Layout'
import { useParams, useNavigate, Link } from 'react-router-dom';
import MenuList from '../../../components/menu/MenuList';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import './MenuList.scss'
import SearchBar from '../../../components/searchBar/SearchBar';
import SortSelection from '../../../components/sortSelection/SortSelection';
import { MyMenuContext } from '../../../context/MenuContext';
import Loading from '../../../components/Loading/Loading';


interface MenuContextType {
    fullMenu?: FullMenuType[],
    fetchFullMenu: (id: string, category: string) => void,
    isFetchingMenu: boolean,
    sortMenu: (fullMenu: FullMenuType[], choice: string) => void,
}


interface FullMenuType {
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
    totalInStock: number,
    largeImage: string,
    options: {
      label: string
      choices: {
        label: string
      }[]
    }[]
}

const Menu = () => {
    let { category } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [word, setWord] = useState<string>("")

    const [menus, setMenu] = useState<FullMenuType[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [checked, setChecked] = useState(false)

    const { fullMenu, fetchFullMenu, isFetchingMenu }:MenuContextType  = MyMenuContext() 
  
    useEffect(()=>{

        if(category === "promotion"){
            setTitle('Promotions')
            fetchFullMenu('227018', category)
        }
        else if(category === "set"){
            setTitle('Set & Duo')
            fetchFullMenu('227018', category)
        }
        else if(category === "food"){
            setTitle('Foods & Beverages')
            fetchFullMenu('227018', category)
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
        <Layout>
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
                    {category === "promotion" &&
                        <FormControlLabel
                                sx={{
                                    display: 'block',
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
                    <MenuList categoryName={title} menus={searchMenus} isLoading={isLoading} checked={checked}/>
                </div>
            </div>
        </Layout>
    )
}
    else{
        return(
            <Layout>
                <Loading />
            </Layout>
        )
    }
}

export default Menu