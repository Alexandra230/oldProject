function validateForm (event) {
var p1 = document.getElementById('psw');
var p2 = document.getElementById('psw-repeat');
if (p1.value !== p2.value) {
alert('Password check!');
return false;
}
// check email
var email = document.getElementById('email');
// regex
var email_regexp = /[0-9a-zа-я_A-ZА-Я]+@[0-9a-zа-я_A-ZА-Я^.]+\.[a-zа-яА-ЯA-Z]{2,4}/i;
if (!email_regexp.test(email.value)) {
alert('Check email');
return false;
}
}