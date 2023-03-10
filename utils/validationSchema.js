import Joi from "joi";

const signUpBodyValidation = (body) => {
  const schema = Joi.object({
    name: Joi.string().required().label("Name"),
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().min(6).required().label("Password"),
  });
  return schema.validate(body);
};

const logInBodyValidation = (body) => {
  const schema = Joi.object({
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().min(6).required().label("Password"),
  });
  return schema.validate(body);
};

const createTodoBodyValidation = (body) => {
  const schema = Joi.object({
    title: Joi.string().required().label("Title"),
    description: Joi.string().label("Description"),
  });
  return schema.validate(body);
};
const updateTodoBodyValidation = (body) => {
  const schema = Joi.object({
    title: Joi.string().label("Title"),
    description: Joi.string().label("Description"),
  });
  return schema.validate(body);
};

export {
  signUpBodyValidation,
  logInBodyValidation,
  createTodoBodyValidation,
  updateTodoBodyValidation,
};
