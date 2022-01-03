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
