export const checkValidData = (email, password, fullname) => {
    const isFullNameValid = /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/.test(fullname);

    const isEmailValid = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,3}$/.test(email);

    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isFullNameValid) return "Enter valid full name"
    if(!isEmailValid) return "Email id is not valid"
    if(!isPasswordValid) return "Password is not valid"
    return null;
}