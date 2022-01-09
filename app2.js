var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
function Validate() {
  var email = document.getElementById('email')
  console.log(email.value)
  if (format.test(email.value)) {
    email.style.color = 'black'
  } else {
    email.style.color = 'red'
  }
}

function forgotvalid() {
  var email = document.getElementById('email')
  if ((email.value = '')) {
    email.nextElementSibling.innerHTML = 'Enter Valid Email-ID'
    console.log(email.nextElementSibling)
  }
}
