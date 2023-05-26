/* eslint-disable no-control-regex */
import { Container } from "../../components/Container"
import { Input, Select } from "../../components/Input";
import { Button } from "../../components/Button";
import { useForm } from "../../hooks/useForm";

const initialState = {
    id: Date.now(),
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    id_role: 0
};

const validationsForm = async (form) => {
    const errors = {}
    if (!form.name.trim()) {
        errors.name = "Nombre es requerido"
    }
    if (form.name.length < 3) {
        errors.name = "Nombre Formato Invalido"
    }
    if (!form.lastName.trim()) {
        errors.lastName = "Apellido es requerido"
    }
    if (form.lastName.length < 3) {
        errors.lastName = "Apellido Formato Invalido"
    }
    let regex = new RegExp(
        "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
    );
    if (!form.email.trim()) {
        errors.email = "Email es requerido"
    }
    if (!regex.test(form.email)) {
        errors.email = "Email Invalido"
    }
    if (form.password != form.confirmPassword) {
        errors.confirmPassword = "Contraseñas no coinciden"
    }
    if (Number.isInteger(form.id_role)) {
        errors.id_role = "Debes seleccionar un rol"
    }
    return errors
}

const options = [
    { label: "Cliente", value: 1 },
    { label: "Administrador", value: 2 }
];

const urlParam = "users"
const redirectTo = "/"

export const SignUp = () => {

    const
        {
            form,
            errors,
            handleChange,
            handleBlur,
            handleSubmit
        } = useForm(
            initialState,
            validationsForm,
            urlParam,
            redirectTo
        );


    return (
        <Container>
            <h1 className='form_title'>Crear Cuenta</h1>
            <form className="login__form" onSubmit={handleSubmit}>
                <Input
                    displayLabel="Nombre"
                    label="name"
                    type="text"
                    onChange={handleChange}
                    value={form.name}
                    errorMessage={errors.name}
                />
                <Input
                    displayLabel="Apellido"
                    label="lastName"
                    type="text"
                    onChange={handleChange}
                    value={form.lastName}
                    errorMessage={errors.lastName}
                />
                <Input
                    displayLabel="Correo Electronico"
                    label="email"
                    type="text"
                    onChange={handleChange}
                    value={form.email}
                    errorMessage={errors.email}
                />
                <Input
                    displayLabel="Contrasena"
                    label="password"
                    type="password"
                    onChange={handleChange}
                    value={form.password}
                    errorMessage={errors.password}
                    required
                />
                <Input
                    displayLabel="Confirmar Contrasena"
                    label="confirmPassword"
                    type="password"
                    onChange={handleChange}
                    value={form.confirmPassword}
                    errorMessage={errors.confirmPassword}

                />
                <Select
                    options={options}
                    displayLabel="Rol de Usuario"
                    label="id_role"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={parseInt(form.id_role)}
                    errorMessage={errors.id_role}
                />
                <Button type="primary">Registrarse</Button>
            </form>
        </Container>
    )
}
