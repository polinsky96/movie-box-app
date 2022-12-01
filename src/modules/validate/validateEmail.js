export default function validateEmail(email) {
    let errors = [];
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i

    if (email === '' || email == null) {
        errors.push('To signup, please provide your email');
    }

    if (!emailRegex.test(email)) {
        errors.push('Unable to validate email address: invalid format');
    }

    return {
        success: errors.length === 0,
        errors
    }
}