import { AlertCircle } from "lucide-react";
import styles from "./FormField.module.css";

/** Shared label + input/textarea/select + error message, used by Contact and Newsletter forms. */
export default function FormField({
  label,
  name,
  type = "text",
  as = "input",
  value,
  onChange,
  onBlur,
  error,
  touched,
  required = false,
  options,
  className = "",
  ...rest
}) {
  const showError = Boolean(touched && error);
  const fieldId = `field-${name}`;
  const errorId = `${fieldId}-error`;

  const sharedProps = {
    id: fieldId,
    name,
    value,
    onChange,
    onBlur,
    required,
    "aria-invalid": showError,
    "aria-describedby": showError ? errorId : undefined,
    className: [styles.control, showError && styles.controlError].filter(Boolean).join(" "),
    ...rest,
  };

  return (
    <div className={[styles.field, className].join(" ").trim()}>
      <label htmlFor={fieldId} className={styles.label}>
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>

      {as === "textarea" && <textarea rows={5} {...sharedProps} />}

      {as === "select" && (
        <select {...sharedProps}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}

      {as === "input" && <input type={type} {...sharedProps} />}

      {showError && (
        <p id={errorId} className={styles.error} role="alert">
          <AlertCircle size={14} aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  );
}
