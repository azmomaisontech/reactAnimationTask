function validateInput(user) {
  let error = [];
  const { firstname, surname, email, number, gender, dob } = user;

  if (firstname.trim().length === 0) {
    error.push("First Name cannot be empty");
  }

  if (surname.trim().length === 0) {
    error.push("Surname cannot be empty");
  }

  if (gender.trim().length === 0) {
    error.push("Gender cannot be empty");
  }

  if (dob.trim().length === 0) {
    error.push("Date of Birth cannot be empty");
  }

  // eslint-disable-next-line
  const phoneRegex = /^07\d{9}$/;
  const phoneLength = number.trim().length;
  if (!phoneRegex.test(String(email).toLowerCase()) || phoneLength === 0) {
    error.push("Enter a valid UK Mobile Phone Number");
  }

  // eslint-disable-next-line
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const emailLength = email.trim().length;
  if (!emailRegex.test(String(email).toLowerCase()) || emailLength === 0) {
    error.push("Enter a valid email address");
  }

  return error;
}

export default validateInput;
