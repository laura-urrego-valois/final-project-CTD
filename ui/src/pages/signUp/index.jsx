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
        errors.name = "Nombre formato Inválido"
    }
    if (!form.lastName.trim()) {
        errors.lastName = "Apellido es requerido"
    }
    if (form.lastName.length < 3) {
        errors.lastName = "Apellido formato Inválido"
    }
    let regex = new RegExp(
        "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
    );
    if (!form.email.trim()) {
        errors.email = "Email es requerido"
    }
    if (!form.confirmPassword.trim()) {
        errors.confirmPassword = "Confirmacion es requerido"
    }
    if (!form.password.trim()) {
        errors.password = "Contraseña es requerido"
    }
    if (!regex.test(form.email)) {
        errors.email = "Email Inválido"
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
            <form className="admin__form" onSubmit={handleSubmit}>
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
                    displayLabel="Correo Electrónico"
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
                <Input
                    displayLabel="Confirmar Contraseña"
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
