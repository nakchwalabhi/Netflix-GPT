export const isFormValid = (email, password) => {

    const isEmailValid =
        /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

    const isPassValid =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);

    if (!isEmailValid) return "Invalid Email";

    if (!isPassValid) return "Invalid Password";

    return null;
};