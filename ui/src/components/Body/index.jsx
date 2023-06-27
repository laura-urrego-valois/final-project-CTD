import { useGlobalState } from "../../context"
import { Product } from "../Product"
import { Recommendations } from "../Recommendations"
import { Search } from "../Search"
import './Body.css'

export const Body = () => {
  const { state } = useGlobalState()

  return (
    <main className="body">
      <Search />
      <Product />
      {state?.filterTours?.length > 0 ? (
        <Recommendations state={state}
          tours={state.filterTours}
          title={"Tours filtrado"} />
      ) : (
        <Recommendations state={state}
          tours={state.tours}
          title={"Tours"} />

      )}
    </main>
  )
}
