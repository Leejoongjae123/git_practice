const loginForm = document.querySelector('#login-form')
const loginInput = document.querySelector('#login-form input')
const link=document.querySelector('a')
const greeting=document.querySelector('#greeting');
const HIDDEN_CLASSNAME='hidden';
const USERNAME_KEY='username'

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username)
    loginForm.classList.add(HIDDEN_CLASSNAME)
    paintGreetings(username)
}

const savedusername=localStorage.getItem(USERNAME_KEY)

function paintGreetings(username){
    greeting.classList.remove(HIDDEN_CLASSNAME)
    greeting.innerHTML="Hello "+username;
}

if (savedusername===null){
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener('submit',onLoginSubmit)
    //show the form
} else{
    paintGreetings(savedusername)
    //show the greetings
}

number="1"
changed_number="1".padStart(2,"0")
console.log(changed_number)

