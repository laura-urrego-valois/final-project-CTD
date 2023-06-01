import { Button } from "../../components/Button"
import { Container } from "../../components/Container"
import { useNavigate } from 'react-router-dom';

export const Admin = () => {
  const navigate = useNavigate();

  const redirectToProductList = () => {
    navigate('/product-list');
  };

  const redirectToRegister = () => {
    navigate('/register');
  };
  return (
    <Container>
      <h1>Zona Admin</h1>
      <Button onClick={redirectToProductList}>Lista de producto</Button>
      <Button onClick={redirectToRegister}>Registrar</Button>
    </Container>
  )
}
