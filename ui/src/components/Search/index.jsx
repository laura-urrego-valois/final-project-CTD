import { Input } from '../Input'
import './Search.css'
import Location from '../../assets/localizador.svg'
import Calendar from '../../assets/calendar.svg'
import { Button } from '../Button'
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
        <Input
          label="Error input"
          errorMessage="campo obligatorio"
          type="text"
        />
        <Button type='primary'>Buscar</Button>
        <Button type='secondary'>Iniciar sesion</Button>
      </form>
    </section>
  )
}
