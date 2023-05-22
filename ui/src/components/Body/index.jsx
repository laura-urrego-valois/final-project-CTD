import { Product } from "../Product"
import { Recommendations } from "../Recommendations"
import { Search } from "../Search"
//import { Tours } from "../Tours"
import './Body.css'

export const Body = () => {
  return (
    <main className="body">
      <Search />
      <Product />
      {/* <Tours /> */}
      <Recommendations />
    </main>
  )
}
