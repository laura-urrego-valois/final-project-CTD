import Swal from "sweetalert2";

import { useForm } from "../../hooks/useForm";

import { Container } from "../../components/Container";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import "./Login.css";

export const Login = () => {
    const { data, setData, handleChange } = useForm();
    // const createItem = async (tour) => {
    //     await axios
    //         .post(`${BASE_URL}/tours`, tour)
    //         .then((response) => {
    //             dispatch({
    //                 type: actions.CREATE_TOUR,
    //                 payload: response.data,
    //             });
    //         }).catch((err) => { console.log(err) })
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // await createItem(data)
        Swal.fire("Login");
        setData({});
        // navigate("/");
    };
    return (
        <Container>
            <h1 className="form_title">Iniciar Sesion</h1>
            <form
                className="login__form"
                onSubmit={handleSubmit}>
                <Input
                    displayLabel="Correo Electronico"
                    label="name"
                    type="text"
                    onChange={handleChange}
                    value={data?.name}
                    required
                />
                <Input
                    displayLabel="Contrasena"
                    label="description"
                    type="password"
                    onChange={handleChange}
                    value={data?.description}
                    required
                />
                <Button type="primary">Ingresar</Button>
            </form>
        </Container>
    );
};
