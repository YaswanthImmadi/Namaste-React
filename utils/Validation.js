export const Validate = (email, password, name = "") => {
    const isEmailId = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  
    const isPasswordValid =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isNameValid = /^[a-zA-Z]{3,15}$/.test(name);
  
    if (name !== "") {
      if (!isNameValid) {
        return "Name should have atleast 3 charecters and 15 charecters maximum";
      }
    }
  
    if (!isEmailId) return "Please Enter Valid Email address";
    if (!isPasswordValid)
      return "Password should have atleast 8 charecters, 1 UpperCase, 1 LowerCase, 1 Number and 1 Special Charecter";
  
    return null;
  };
  