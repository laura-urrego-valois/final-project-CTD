import { Input } from '../Input'
import './Search.css'
import Location from '../../assets/localizador.svg'
import Calendar from '../../assets/calendar.svg'

export const Search = () => {
  return (
    <section className="search">
      <h1>Busca ofertas de experiencia turística</h1>
      <form action="" className='search-form'>
        <Input
          imageSrc={Location}
          type="text"
          placeholder="¿A dónde vamos?" />
        <Input
          imageSrc={Calendar}
          type="text"
          placeholder="Check in - Check out" />
      </form>
    </section>
  )
}
