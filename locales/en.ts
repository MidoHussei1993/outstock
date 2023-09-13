import routes from "./en/routes.json";
import actions from "./en/actions.json";
import subject from "./en/subject.json";
import filter from "./en/filter.json";
import config from "./en/config.json";
import auth from "./en/auth.json";
import validation from "./en/validation.json";
import generalExam from "./en/general-exam.json";
import QuestionReports from "./en/QuestionReports.json";
import form from "./en/form.json";
import fill from "./en/fill.json";
import cart from "./en/cart.json";
import hints from "./en/hints.json";

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
