export const validateLoginForm = (formData) => {
  const isMailValid = validateMail(formData.email);
  const isPasswordValid = validatePassword(formData.password);
  return isMailValid && isPasswordValid;
};

const validatePassword = (password) => {
  return password?.length > 6 && password?.length < 12;
};

const validateMail = (email) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
};
