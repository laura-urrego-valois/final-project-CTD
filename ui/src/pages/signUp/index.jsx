import Swal from "sweetalert2";
import { useState } from "react";


import { Container } from "../../components/Container"
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export const SignUp = () => {
    const [dataForm, setDataForm] = useState({
        id: new Date().getTime()
    });

    const handleChange = ({ target }) => {
        setDataForm({
            ...dataForm,
            [target.name]: target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // await createItem(data)
        // setData({});
        // navigate("/");
        console.log(dataForm)
        Swal.fire("Login");

    };

    return (
        <Container>
            <h1 className='form_title'>Crear Cuenta</h1>
            <form className="login__form" onSubmit={handleSubmit}>
                <Input
                    displayLabel="Nombre"
                    label="name"
                    type="text"
                    onChange={handleChange}
                    value={dataForm?.name}
                    errorMessage="no se"
                    required
                />
                <Input
                    displayLabel="Apellido"
                    label="lastName"
                    type="text"
                    onChange={handleChange}
                    value={dataForm?.lastName}
                    required
                />
                <Input
                    displayLabel="Correo Electronico"
                    label="email"
                    type="email"
                    onChange={handleChange}
                    value={dataForm?.email}
                    required
                />
                <Input
                    displayLabel="Contrasena"
                    label="password"
                    type="password"
                    onChange={handleChange}
                    value={dataForm?.password}
                    required
                />
                <Input
                    displayLabel="Confirmar Contrasena"
                    label="confirmPassword"
                    type="password"
                    onChange={handleChange}
                    value={dataForm?.confirmPassword}
                    required
                />
                <label htmlFor="role">
                    Rol
                    <select
                        value={dataForm?.role}
                        onChange={handleChange}
                        id="role"
                        name="role">
                        <option disabled hidden>Seleccione</option>
                        <option
                            value={1}
                        >
                            Cliente
                        </option>
                        <option value={2}>Administrador</option>
                    </select>
                </label>
                <Button type="primary">Registrarse</Button>
            </form>
        </Container>
    )
}
