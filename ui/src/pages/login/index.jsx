/* eslint-disable no-control-regex */
// import Swal from "sweetalert2";

import { useForm } from "../../hooks/useForm";

import { Container } from "../../components/Container";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import "./Login.css";

const initialState = {
    email: "",
    password: "",
};

const validationsForm = async (form) => {
    const errors = {};

    if (!form.email.trim()) {
        errors.email = "Correo es requerido";
    }

    let regex = new RegExp(
        "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
    );

    if (!regex.test(form.email)) {
        errors.email = "Correo no válido"
    }

    if (!form.password.trim()) {
        errors.password = "Contraseña es requerida";
    }
    return errors
};

export const Login = () => {
    const { form, errors, handleChange, handleLogin } = useForm(
        initialState,
        validationsForm
    );

    return (
        <Container>
            <h1 className="form_title">Iniciar Sesión</h1>
            <form
                className="login__form"
                onSubmit={handleLogin}>
                <Input
                    displayLabel="Correo electrónico"
                    label="email"
                    type="text"
                    onChange={handleChange}
                    value={form.email}
                    errorMessage={errors.email}
                />
                <Input
                    displayLabel="Contraseña"
                    label="password"
                    type="password"
                    onChange={handleChange}
                    value={form.password}
                    errorMessage={errors.password}
                />
                <Button type="primary">Ingresar</Button>
            </form>
        </Container>
    );
};
