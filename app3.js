var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
function ValidateMobile() {
  var phone = document.getElementById('tel')
  console.log(phone.value)
  if (phone.value.match(phoneno)) {
    phone.style.color = 'black'
    phone.nextElementSibling.innerHTML = ' '
  } else {
    phone.style.color = 'red'
    console.log(phone.nextElementSibling)
    phone.nextElementSibling.innerHTML = 'Enter Valid Mobile No'
    let parentdata = phone.parentElement.children[4]
  }
}
