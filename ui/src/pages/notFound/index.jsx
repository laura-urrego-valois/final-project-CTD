import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { DetailedCard, SimpleCard } from "../../components/Card"
import Location from "../../assets/localizador.svg"
import Calendar from "../../assets/calendar.svg"
import Image from "../../assets/hermi.png"

export const NotFound = () => {
  return (
    <>
      <Input
        iconSrc={Location}
        type="text"
        placeholder="¿A dónde vamos?" />
      <Input
        iconSrc={Calendar}
        type="text"
        placeholder="Check in - Check out" />
      <Input
        label="Input contraseña"
        type="text"
        placeholder="Check in - Check out" />
      <Input
        label="Error input"
        errorMessage="campo obligatorio"
        type="calendar"
      />
      <Button type='primary'>Buscar</Button>
      <Button type='secondary'>Iniciar sesion</Button>

      <h2>Card Sencilla</h2>
      <SimpleCard
        imageSrc={Image}
        title="Hermitage Hotel" />
      <h2>Card Detallada</h2>
      <DetailedCard
        imageSrc={Image}
        title="Hermitage Hotel"
        category="HOTEL"
        rating="★★★★★"
        classification="Muy bueno"
        score="8"
        description="En el corazón de San Telmo,
        disfruta de un albergue inspirado en las pasiones de Buenos Aires.
        con 2 impresionantes piscinas, una en la terraza y otra al aire libre;
        habitaciones privadas." />
      <h1>prueb</h1>
    </>
  )
}
