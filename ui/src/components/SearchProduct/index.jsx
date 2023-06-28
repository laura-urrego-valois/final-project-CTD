import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs"
import { MdOutlineLocationOn } from "react-icons/md"
import { Fragment, useEffect, useState } from "react"
import { AiOutlineShareAlt } from "react-icons/ai"
import L from "leaflet"

import "leaflet/dist/leaflet.css"
import "./SearchProduct.css"
import { ModalShareProduct } from "../Modal/ModalShareProduct"

export const SearchProduct = ({ itemDetail, country }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleShare = () => {
    setIsModalOpen(true)
  }
  return (
    <Fragment>
      <ModalShareProduct
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        itemDetail={itemDetail}
      />

      <div className="detail__rating">
        <h3 className="detail__rating-title">
          <MdOutlineLocationOn /> {country?.countryName}
          <AiOutlineShareAlt onClick={handleShare} />
        </h3>
        <span>{`Lat: ${country?.latitude} Long: ${country?.longitude}`}</span>
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
          <p className="detail__rating-score">{itemDetail?.tourScore}</p>
        </div>
      </div>
    </Fragment>
  )
}

export const LocateProduct = ({ country, itemDetail }) => {
  console.log("country", country)
  useEffect(() => {
    const mapContainer = L.DomUtil.get("map")
    if (mapContainer != null) {
      mapContainer._leaflet_id = null
    }
    const osm = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "© OpenStreetMap",
    })

    const countryMarker = L.marker([country.latitude, country.longitude])
      .bindPopup(
        `<b>${itemDetail.tourName}</b><br>${itemDetail.tourDescription}`
      )
      .openPopup()
    const map = L.map("map", {
      center: [country.latitude, country.longitude],
      zoom: 2,
      layers: [osm, countryMarker],
    })
    return () => {
      map.remove()
    }
  }, [country])

  return (
    <section className="locate">
      <h2 className="locate__title">Ubicación tour</h2>
      <div className="locate__content">
        <div id="map" className="map-container"></div>
      </div>
    </section>
  )
}
