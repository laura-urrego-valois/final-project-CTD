import './Input.css'

/**
 * Componente de entrada reutilizable que incluye una etiqueta, un campo de entrada, un manejo de error y una imagen opcional.
 *
 * @param {string} props.imageSrc - La fuente de la imagen (opcional).
 * @param {string} props.label - La etiqueta del campo de entrada (opcional).
 * @param {string} props.errorMessage - El mensaje de error a mostrar (opcional).
 */

export const Input = ({ iconSrc, label, errorMessage, ...props }) => {
  const hasError = errorMessage !== undefined && errorMessage !== '';
  const hasImageSrc = iconSrc ? "" : "input--noImage"

  return (
    <label htmlFor={label} className={`input__label ${hasError ? 'error' : ''}`}>
      {label}
      <div className='input'>
        <input {...props} id={label} className={`input__field ${hasImageSrc} ${hasError && "error"}`} />
        <img src={iconSrc} alt="" className="input__image" onClick={() => document.getElementById(label).focus()} />
      </div>
      {hasError && <p className="input--error">{errorMessage}</p>}
    </label>
  )
}