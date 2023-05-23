import { Container } from "../../components/Container"
import { ListProduct } from "../../components/ListProduct"

export const ProductList = () => {
  return (
    <>
      <Container>
        <h1>Lista de productos</h1>
        <ListProduct />
      </Container>
    </>
  )
}
