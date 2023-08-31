import React from 'react'
import ButtonGroup from '../../buttonGroup/ButtonGroup'
import './Detail.scss'

const Detail = (props: {menuDetail :ImportFullMenuType}) => {
    let {menuDetail} = props
    if(menuDetail){
        return (
            <div className="detail-container">
                <div className="detail-image">
                <img
                    src={`${
                    menuDetail.largeImage !== undefined
                        ? menuDetail.largeImage
                        : "/images/cutlery.png"
                    }`}
                    alt="detailImage"
                    className="image"
                    data-testid="detail-image"
                />
                </div>
                <div className="detail-description">
                <div className="detail-header">
                    <h1 className="name"  data-testid="detail-name">{menuDetail.name}</h1>
                </div>
                <div className="detail-body">
                    {menuDetail.options.map((option, index) => {
                    return (
                        <div className="option-container" key={index}>
                        <p className="option-title">{option.label}</p>
                        <ButtonGroup choices={option.choices} />
                        </div>
                    );
                    })}
                </div>
                <div className="detail-footer">
                    <div className="stock-container">
                    <p className="stock-text">
                        ขายไปแล้ว {menuDetail.sold} คงเหลือ {menuDetail.totalInStock}
                    </p>
                    </div>
                    <div className="price-container" data-testid="detail-price">
                    <h1
                        className={`${
                        menuDetail.discountedPercent > 0 ? "price-line" : "price"
                        }`}
                    >
                        {menuDetail.fullPrice} ฿{" "}
                    </h1>
                    {menuDetail.discountedPercent > 0 && (
                        <p className="discount">
                        ฿ {(menuDetail.fullPrice * (100 - 20)) / 100}
                        </p>
                    )}
                    </div>
                </div>
                </div>
            </div>
        )
    }
    else{
        return (
            <div>

            </div>
        )
    }
}

export default Detail