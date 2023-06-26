/* eslint-disable no-unused-vars */
import { Container } from "../../components/Container"

import "./User.css"
import { useGlobalState } from "../../context"
import { MdAlternateEmail } from "react-icons/md"
import { HiIdentification } from "react-icons/hi"
import { LuUser } from "react-icons/lu"
import { Button } from "../../components/Button"
import { useNavigate } from "react-router-dom";

export const User = () => {
  const { user } = useGlobalState()
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/admin");
  };

  return (
    <Container>
      <h1>Perfil</h1>

      {user && (
        <section className="user__section">
          <div>
            <img
              src="https://img.freepik.com/free-icon/user_318-159711.jpg?w=2000"
              alt="user"
            />
          </div>
          <span>
            <HiIdentification />
            <h5>Nombre:</h5>
            <p>{user?.userFirstName}</p>
          </span>
          <span>
            <HiIdentification />
            <h5>Apellido:</h5>
            <p>{user?.userLastName}</p>
          </span>
          <span>
            <MdAlternateEmail />
            <h5>Email:</h5>
            <p>{user?.username}</p>
          </span>
          <span>
            <LuUser />
            <h5>Role:</h5>
            <p>{user?.role}</p>
          </span>
          <Button onClick={handleButtonClick}>Ir a Panel</Button>
        </section>
      )}
    </Container>
  )
}
