const body = document.body;
const main = document.createElement('main');
body.append(main);

const form = document.createElement('form');
form.setAttribute('action', 'submit.html');
form.setAttribute('method', 'GET')
main.append(form);

const USERNAME = 'username';
const PASSWORD = 'password';

const userLabel = document.createElement('label');
const userInput = document.createElement('input');

userLabel.setAttribute('for', USERNAME);
userLabel.innerHTML = 'Username: '
userInput.setAttribute('id', USERNAME);
userInput.setAttribute('name', USERNAME);
userInput.setAttribute('type', 'text');

form.append(userLabel, userInput);

const passLabel = document.createElement('label');
const passInput = document.createElement('input');

passLabel.setAttribute('for', PASSWORD);
passLabel.innerHTML = 'Password: '
passInput.setAttribute('id', PASSWORD);
passInput.setAttribute('name', PASSWORD);
passInput.setAttribute('type', 'password');

form.append(passLabel, passInput);

const submitBtn = document.createElement('input');
const resetBtn = document.createElement('input');

submitBtn.setAttribute('type', 'submit');
submitBtn.setAttribute('value', 'Submit');
resetBtn.setAttribute('type', 'reset');
resetBtn.setAttribute('value', 'Reset');

form.append(submitBtn, resetBtn);

let fields = document.getElementsByTagName('input');

for(let field of fields) {
    field.classList.add('block');
}


