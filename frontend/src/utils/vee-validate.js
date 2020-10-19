import { extend } from "vee-validate";
import { required, email } from "vee-validate/dist/rules";
import { configure } from "vee-validate";

extend("required", {
  ...required,
  message: "This field is required"
});

extend("email", email);

extend("password", {
  params: ["target"],
  validate(value, { target }) {
    return value === target;
  },
  message: "Password confirmation does not match"
});

configure({
  classes: {
    valid: "is-valid",
    invalid: "is-invalid"
  }
});