import routes from "./ar/routes.json";
import actions from "./ar/actions.json";
import subject from "./ar/subject.json";
import filter from "./ar/filter.json";
import config from "./ar/config.json";
import auth from "./ar/auth.json";
import validation from "./ar/validation.json";
import generalExam from "./ar/general-exam.json";
import QuestionReports from "./ar/QuestionReports.json";
import form from "./ar/form.json";
import fill from "./ar/fill.json";
import cart from "./ar/cart.json";
import hints from "./ar/hints.json";

const messages = {
  ...routes,
  ...actions,
  ...subject,
  ...filter,
  ...config,
  ...auth,
  ...validation,
  ...generalExam,
  ...QuestionReports,
  ...form,
  ...fill,
  ...cart,
  ...hints,
};

export default messages;
