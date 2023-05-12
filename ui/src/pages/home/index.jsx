import { Category } from "../../components/Category"
import { Container } from "../../components/Container"
import { Recommendations } from "../../components/Recommendations"
import { Search } from "../../components/Search"
export const Home = () => {
  return (
    <Container>
      <Search />
      <Category />
      <Recommendations />
    </Container>
  )
}
