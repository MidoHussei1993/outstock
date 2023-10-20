import actions from "./ar/actions.json";
import config from "./ar/config.json";
import auth from "./ar/auth.json";
import validation from "./ar/validation.json";
import form from "./ar/form.json";
import cart from "./ar/cart.json";
import profile from "./ar/profile.json";

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
