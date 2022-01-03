var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
function Validate() {
  var email = document.getElementById('email')
  console.log(email.value)
  if (format.test(email.value)) {
    email.style.color = 'black'
    email.nextElementSibling.innerHTML = ' '
  } else {
    email.style.color = 'red'
    email.nextElementSibling.innerHTML = ' Enter valid Email-Id'
  }
}

var passw = /^[A-Za-z]\w{7,14}$/

function ValidatePassword() {
  var pass = document.getElementById('password')
  console.log(pass.nextElementSibling)
  // console.log(pass)
  if (pass.value.match(passw)) {
    pass.nextElementSibling.innerHTML = ''
    console.log(pass.nextElementSibling.innerText)
  } else {
    pass.nextElementSibling.innerHTML = 'Enter valid password'
  }
}
