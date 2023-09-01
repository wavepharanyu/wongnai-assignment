import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ButtonGroup from "../../../components/buttonGroup/ButtonGroup";
import { MyMenuContext } from "../../../context/MenuContext";
import Loading from "../../../components/Loading/Loading";
import Detail from "../../../components/menu/menuDetail/Detail";
import "./MenuDetail.scss";

const MenuDetail = () => {
  let { id } = useParams();
  const navigate = useNavigate();

  const { menuDetail, fetchMenuDetail, isFetchingMenu }: ImportMenuContextType = MyMenuContext();

  useEffect(() => {
    if (id) {
      fetchMenuDetail(import.meta.env.VITE_RESTAURANT_ID, id);
    }
  }, []);

  function handleGoBack() {
    navigate(-1);
  }

  if (menuDetail && !isFetchingMenu) {
    console.log(menuDetail)
    return (
      <div className="detail-wrapper">
        <button onClick={handleGoBack} className="back-button">
          <img className="image-button" src="/images/left-arrow.png" />
        </button>
        <Detail menuDetail={menuDetail} />
      </div>
    );
  } else {
    return (
      <div>
        <Loading />
      </div>
    );
  }
};

export default MenuDetail;
