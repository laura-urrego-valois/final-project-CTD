/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { Container } from "../../components/Container"

import "./User.css"
import { Button } from "../../components/Button"

export const User = () => {
    const [userInfo, setUserInfo] = useState({})

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            setUserInfo(user);
        }
    }, []);

    return (
        <Container>
            <h1>Profile</h1>
            <section className="user__section">
                <div>
                    <img src="https://img.freepik.com/free-icon/user_318-159711.jpg?w=2000" alt="user" />
                </div>
                <span>
                    <ion-icon name="person-outline" size="small"></ion-icon>
                    <h3>Nombre:</h3>
                    <p>{userInfo.name}</p>
                    <p>{userInfo.lastName}</p>
                </span>
                <span>
                    <ion-icon name="at-circle-outline" size="small"></ion-icon>
                    <h3>Email:</h3>
                    <p>{userInfo.email}</p>
                </span>
                <span>
                    <ion-icon name="at-circle-outline" size="small"></ion-icon>
                    <h3>Rol:</h3>
                    <p>{userInfo.id_role == 1 ? "Cliente" : "Administrador"}</p>
                </span>
                <Button type="primary">Reservas</Button>
            </section>
        </Container>
    )
}
