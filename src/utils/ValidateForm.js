export const checkEmailValidate = (email) => {
    // below test() will return true inside isEmailValid or false
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email); 

    if(!isEmailValid) return "Email ID is not valid";

    return null;

}


export const checkPasswordValidate = (password) => {
    // below test() will return true inside isPasswordValid or false
    const  isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    if(!isPasswordValid) return "Password must contain numbers, uppercase, lowercase and at least 8 or more characters";

    return null;

}


export const checkNameValidate = (name) => {
    // below test() will return true inside isNameValid or false
    // const isNameValid = /^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/.test(name)
    const isNameValid = /^([a-zA-Zà-úÀ-Ú]{2,})+\s+([a-zA-Zà-úÀ-Ú\s]{2,})+$/.test(name)

    if(!isNameValid) return "Invalid full Name, numbers not allowed";

    return null;
}