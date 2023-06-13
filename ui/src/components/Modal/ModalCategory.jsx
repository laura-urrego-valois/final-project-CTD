import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../Button";
import { GrFormClose } from "react-icons/gr";
import "./Modal.css";

export const ModalCategory = ({
	onClose,
	editMode,
	categorie,
	handleFormSubmit,
	categoryForm,
}) => {
	const { register, handleSubmit, setValue } = useForm();

	useEffect(() => {
		if (editMode && categoryForm) {
			setValue("name", categoryForm.name);
			setValue("image_url", categoryForm.image_url);
			setValue("description", categoryForm.description);
		} else {
			setValue("name", "");
			setValue("image_url", "");
			setValue("description", "");
		}
	}, [editMode, categoryForm, setValue]);

	return (
		<section className="modal__overlay">
			<div className="modal__content">
				<h3>{editMode ? "Editar Categoría" : "Agregar Categoría"}</h3>
				{editMode ? (
					<img
						className="modal__image"
						src={categoryForm?.image_url}
						alt=""
					/>
				) : (
					""
				)}
				<form
					className="modal__form"
					onSubmit={handleSubmit(handleFormSubmit)}>
					<label htmlFor="name">Nombre de la categoría:</label>
					<input
						type="text"
						id="name"
						placeholder="Nombre de la categoría"
						defaultValue={categorie?.name || ""}
						{...register("name")}
					/>
					<label htmlFor="image_url">URL de la imagen:</label>
					<input
						type="text"
						id="image_url"
						placeholder="URL de la imagen"
						defaultValue={categorie?.image_url || ""}
						{...register("image_url")}
					/>
					<label htmlFor="description">Descripción:</label>
					<textarea
						type="text"
						id="description"
						rows="5"
						placeholder="Descripción"
						defaultValue={categorie?.description || ""}
						{...register("description")}
					/>
					<Button type="submit">{editMode ? "Guardar" : "Agregar"}</Button>
				</form>
				<span
					className="modal__close"
					onClick={onClose}>
					<GrFormClose />
				</span>
			</div>
		</section>
	);
};
