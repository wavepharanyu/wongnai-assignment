import { useEffect, useState } from 'react'
import { useNavigate , useParams } from 'react-router-dom'
import Layout from '../../../components/Layout'
import ButtonGroup from '../../../components/buttonGroup/ButtonGroup'
import { MyMenuContext } from '../../../context/MenuContext';
import Loading from '../../../components/Loading/Loading';
import './MenuDetail.scss'

interface MenuContextType {
    menuDetail?: FullMenuType,
    fetchMenuDetail: (id: string, menuDetail: string) => void,
    isFetchingMenu: boolean,
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

const MenuDetail = () => {
    let { id } = useParams();
    const navigate = useNavigate();

    const { menuDetail, fetchMenuDetail, isFetchingMenu }:MenuContextType  = MyMenuContext() 

    useEffect(()=>{

        if(id){
            fetchMenuDetail('227018',id)
        }
    },[])

    function handleGoBack() {
        navigate(-1)
    }

    if(menuDetail && !isFetchingMenu){

        return (
            <Layout>
                <div className='detail-wrapper'>
                <button onClick={handleGoBack} className='back-button'><img className='image-button' src="/images/left-arrow.png"/></button>
                    <div className='detail-container'>
                        <div className='detail-image'>
                            <img src={`${menuDetail.largeImage !== undefined ? menuDetail.largeImage : '/images/cutlery.png'}`} className='image'/>
                        </div>
                        <div className='detail-description'>
                            <div className='detail-header'>
                                <h1 className='name'>{menuDetail.name}</h1>
                            </div>
                            <div className='detail-body'>
                                 {menuDetail.options.map((option, index) => {
                                    return (
                                        <div className="option-container" key={index}>
                                            <p className='option-title'>{option.label}</p>
                                            <ButtonGroup choices={option.choices} />
                                        </div>
                                    );
                                })}
                                
                            </div>
                            <div className='detail-footer'>
                                <div className="stock-container">
                                    <p className="stock-text">ขายไปแล้ว {menuDetail.sold} คงเหลือ {menuDetail.totalInStock}</p>
                                </div>
                                <div className='price-container'>
                                    <h1 className={`${menuDetail.discountedPercent > 0 ? 'price-line' : 'price'}`}>{menuDetail.fullPrice} ฿ </h1>
                                    {  menuDetail.discountedPercent > 0 && <p className='discount'>฿ {(menuDetail.fullPrice*(100-20))/100}</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
    else{
        return(
            <div>
                <Loading/>
            </div>
        )
    }
}

export default MenuDetail