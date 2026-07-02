import { useCallback, useState } from "react";

/**
 * Small controlled-form hook with real-time validation.
 *
 * @param {object} initialValues
 * @param {(values: object) => object} validate - returns { field: errorMessage }
 * @param {(values: object) => Promise<void>} onSubmit - the (simulated) submit handler
 */
export function useForm({ initialValues, validate, onSubmit }) {
  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const errors = validate(values);

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleBlur = useCallback((event) => {
    const { name } = event.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  }, []);

  const resetForm = useCallback(() => {
    setValues(initialValues);
    setTouched({});
    setStatus("idle");
  }, [initialValues]);

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      const currentErrors = validate(values);
      const hasErrors = Object.values(currentErrors).some(Boolean);

      if (hasErrors) {
        setTouched(Object.keys(values).reduce((acc, key) => ({ ...acc, [key]: true }), {}));
        return;
      }

      setStatus("submitting");
      try {
        await onSubmit(values);
        setStatus("success");
      } catch {
        setStatus("error");
      }
    },
    [values, validate, onSubmit]
  );

  return { values, errors, touched, status, handleChange, handleBlur, handleSubmit, resetForm };
}
