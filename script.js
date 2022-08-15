const Fname = document.getElementById('FirstName');
const Lname = document.getElementById('LastName');
const Email = document.getElementById('Email');
const Password = document.getElementById('Password');
const Form = document.getElementById('Form');
const Error = document.getElementById('Error');

Form.addEventListener('submit', (e) => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const FnameValue = Fname.value.trim();
    const LnameValue = Lname.value.trim();
    const EmailValue = Email.value.trim();
    const PasswordValue = Password.value.trim();


    if (FnameValue === '') {
        setError(Fname, 'First Name is required');
    } else{
        setSuccess(Fname);
    }

    if (LnameValue === '') {
        setError(Lname, 'Last Name is required');
    } else{
        setSuccess(Lname);
    }

    if(EmailValue === '') {
        setError(Email, 'Email is required');
    } else if (!isValidEmail(EmailValue)) {
        setError(Email, 'Provide a valid email address');
    } else {
        setSuccess(Email);
    }

    if(PasswordValue === '') {
        setError(Password, 'Password is required');
    } else if (PasswordValue.length < 8 ) {
        setError(Password, 'Password must be at least 8 character.')
    } else {
        setSuccess(Password);
    }
};
