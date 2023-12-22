function validateForm() {
    var username = document.getElementById('username').value;
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var phonenum = document.getElementById('phonenum').value;
    var mail = document.getElementById('mail').value;
    var password = document.getElementById('password').value;
    var dob = document.getElementById('dob').value;

    if (!username || username.length < 4 || username.length > 30) {
        alert('Username need to be between 4 and 30 characters.');
        return false;
    }
    if (!firstname || firstname.length < 5 || firstname.length > 50) {
        alert('Firstname need to be between 5 and 50 characters.');
        return false;
    }
    if (!lastname || lastname.length < 5 || lastname.length > 50) {
        alert('Lastname need to be between 5 and 50 characters.');
        return false;
    }
    if (!phonenum || phonenum.length < 7 || phonenum.length > 15) {
        alert('Phone number need to be between 7 and 15 characters.');
        return false;
    }
    if (!password || password.length < 8 || password.length > 72) {
        alert('Password need to be between 8 and 72 characters.');
        return false;
    }
    if (!mail || mail.length < 9 || mail.length > 100) {
        alert('Mail need to be between 9 and 100 characters.');
        return false;
    }
    if (!mail.includes('@') || mail.length < 9 || mail.length > 100) {
        alert('Please enter a valid email address.');
        return false;
    }
    if (!isLegalAge(dob)) {
        alert('Must be at least 18 years old.');
        return false;
    }

    return true; 
}

function isLegalAge(dob) {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age >= 18;
}
