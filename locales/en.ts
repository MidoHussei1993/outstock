import actions from "./en/actions.json";
import config from "./en/config.json";
import auth from "./en/auth.json";
import validation from "./en/validation.json";
import form from "./en/form.json";
import cart from "./en/cart.json";
import profile from "./en/profile.json";

const messages = {
  ...actions,
  ...config,
  ...auth,
  ...validation,
  ...form,
  ...cart,
  ...profile,
};

export default messages;
