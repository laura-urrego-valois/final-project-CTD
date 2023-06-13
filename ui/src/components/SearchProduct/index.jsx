import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";
import { MdOutlineLocationOn } from 'react-icons/md';
import './SearchProduct.css'

export const SearchProduct = ({ itemDetail }) => {
  return (
    <div className="detail__rating">
      <h3 className="detail__rating-title"><MdOutlineLocationOn /> Bogotá</h3>
      <div className="detail__rating-container">
        <div className="detail__rating-content">
          <p className="detail__rating-classification">
            {itemDetail?.tourClassification}
          </p>
          <p className="detail__rating-star">
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarHalf />
            <BsStar />
          </p>
        </div>
        <p className="detail__rating-score">{itemDetail.tourScore}</p>
      </div>
    </div>
  )
}
