import styles from "./Form.module.css";

const FormInput = ({ type, placeholder, name, value, onChange }) => {
  return (
    <input
      className={styles.FormInput}
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default FormInput;
