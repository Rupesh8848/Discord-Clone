export const validateLoginForm = (formData) => {
  const isMailValid = validateMail(formData.email);
  const isPasswordValid = validatePassword(formData.password);
  return isMailValid && isPasswordValid;
};

export const validateRegisterForm = (formData) => {
  const isUserNameValid = validateUserName(formData.userName);
  return validateLoginForm(formData) && isUserNameValid;
};

const validatePassword = (password) => {
  return password?.length > 6 && password?.length < 12;
};

export const validateMail = (email) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
};

const validateUserName = (userName) => {
  const userNamePattern = /^[a-zA-Z0-9]+$/;
  return (
    userName?.length > 4 &&
    userName?.length < 20 &&
    userNamePattern.test(userName)
  );
};
