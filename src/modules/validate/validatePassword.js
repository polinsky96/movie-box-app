export default function validatePassword(password) {
    let errors = [];

    if (password === '' || password == null) {
        errors.push('Signup requires a valid password');
    }

    if (password.length < 6) {
        errors.push('Password should be at least 6 characters');
    }

    if (password.length > 25) {
        errors.push('The password must be no longer than 25 characters');
    }

    return {
        success: errors.length === 0,
        errors
    }
}