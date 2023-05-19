import Select from "react-select";

export const SelectInput = ({ label, value }) => {
	return (
		<Select
			id={label}
			name={label}
			// options={options}
			// onChange={onChange}
			value={{ label: value }}
			autoFocus={true}
		/>
	);
};
