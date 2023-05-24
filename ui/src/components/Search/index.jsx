import { Input } from "../../components/Input"
import { Button } from '../Button'
import Location from '../../assets/localizador.svg'
import Calendar from '../../assets/calendar.svg'
import './Search.css'

export const Search = () => {
  return (
    <section className="search">
      <h1 className='search__title'>Busca ofertas de experiencia turística</h1>
      <form action="" className='search-form'>
        <Input
          className="input-location"
          iconSrc={Location}
          type="text"
          placeholder="¿A dónde vamos?" />
        <Input
          className="input-calendar"
          iconSrc={Calendar}
          type="date"
          placeholder="Check in - Check out" />
        <Button type="primary">Buscar</Button>
      </form>
    </section>
  )
}
