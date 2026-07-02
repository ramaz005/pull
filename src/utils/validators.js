/**
 * Small composable validator functions, kept pure and side-effect free.
 * Each returns an error message string, or "" when the value is valid.
 */
export function isRequired(value, label = "This field") {
  return value && String(value).trim().length > 0 ? "" : `${label} is required.`;
}

export function isEmail(value) {
  if (!value) return "";
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(value) ? "" : "Enter a valid email address.";
}

export function isPhone(value) {
  if (!value) return "";
  const pattern = /^[\d\s()+.-]{7,20}$/;
  return pattern.test(value) ? "" : "Enter a valid phone number.";
}

export function minLength(value, n, label = "This field") {
  if (!value) return "";
  return String(value).trim().length >= n ? "" : `${label} must be at least ${n} characters.`;
}

/** Validates the Contact form values object; returns a { field: message } errors map. */
export function validateContactForm(values) {
  return {
    name: isRequired(values.name, "Name"),
    email: isRequired(values.email, "Email") || isEmail(values.email),
    phone: values.phone ? isPhone(values.phone) : "",
    message: isRequired(values.message, "Message") || minLength(values.message, 10, "Message"),
  };
}

/** Validates the Footer newsletter form values object. */
export function validateNewsletterForm(values) {
  return {
    email: isRequired(values.email, "Email") || isEmail(values.email),
  };
}
