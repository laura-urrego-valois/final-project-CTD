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
                    <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80" alt="user" />
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
                <Button type="primary">Reservas</Button>
            </section>
        </Container>
    )
}
