import { Product } from "../Product"
import { Recommendations } from "../Recommendations"
import { Search } from "../Search"

export const Body = () => {
  return (
    <main className="body">
      <Search />
      <Product />
      <Recommendations />
    </main>
  )
}
