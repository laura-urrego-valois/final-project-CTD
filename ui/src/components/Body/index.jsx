import { Category } from "../Category"
import { Recommendations } from "../Recommendations"
import { Search } from "../Search"

export const Body = () => {
  return (
    <main className="body">
      <Search />
      <Category />
      <Recommendations />
    </main>
  )
}
