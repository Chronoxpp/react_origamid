import styles from "./Input.module.css";

export default function Input({name, label, type, value, onChange, erro, onBlur})
{
  return (
    <div className={styles.Container}>
      <label
        htmlFor={name}
        className={styles.Label}
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        className={styles.Input}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />

      <p className={styles.Erro}>{erro ? erro : ""}</p>
    </div>
  );
}