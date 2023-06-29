import { Link, useParams } from "react-router-dom"
import { useGlobalState } from "../../context"
import { Gallery } from "../../components/Gallery"
import { Feature } from "../../components/Feature"
import { BsFillArrowLeftCircleFill } from "react-icons/bs"
import { Politics } from "../../components/Politics"
import "./detail.css"
import { Container } from "../../components/Container"
import { LocateProduct, SearchProduct } from "../../components/SearchProduct"
import { DatesPicker } from "../../components/DatesPicker"
//import { useEffect } from "react"

const Detail = () => {
  let { id } = useParams()
  const { state } = useGlobalState()
  const { categories, tours } = state

  const itemDetail = tours?.find((item) => item.id == id)
  /*   useEffect(() => {
      if (id !== undefined) {
        fetchByTours(id);
      }
    }, [id]); */

  const getCategoryName = (categoryId) => {
    const category = categories?.find((cat) => cat.id === categoryId)
    return category ? category.categoryName : ""
  }
  const dataCountry = state.countries.find((country) => country.id === itemDetail.countryId)

  const dataCountry = state.countries.find((country) => country.id === itemDetail.countryId)

  return (
    <Container>
      <div className="detail">
        <div>
          <h1 className="detail__title">{itemDetail.tourName}</h1>
        </div>
        <Link className="detail__icon" to="/">
          <BsFillArrowLeftCircleFill />
        </Link>
      </div>
      <SearchProduct country={dataCountry} itemDetail={itemDetail} />
      {/* //Layout component Gallery */}
      <Gallery dataImage={itemDetail?.images} />

      <section className="detail__content">
        <div className="detail__info">
          <div className="detail-value">
            <h3 className="detail__price">{`Precio: ${itemDetail.tourPrice} USD`}</h3>
            <p className="detail__category">
              {getCategoryName(itemDetail.categoryId)}
            </p>
          </div>
          <p className="detail__description">{itemDetail.tourDescription}</p>
        </div>
      </section>
      <Feature feature={itemDetail?.features} />
      <DatesPicker />
      <LocateProduct
        country={dataCountry}
        itemDetail={itemDetail}
      />
      <Politics />
    </Container>
  )
}

export default Detail
