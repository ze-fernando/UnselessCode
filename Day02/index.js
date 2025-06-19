const signin = document.getElementById("signin")
const signup = document.getElementById("signup")

function toggleForm(){
    if(signin.classList.contains('hidden')){
        signin.classList.remove('hidden')
        signup.classList.add('hidden')
    } else {
        signup.classList.remove('hidden')
        signin.classList.add('hidden')
    }
}