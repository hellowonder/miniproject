var passw = /^[A-Za-z]\w{7,14}$/
var checkpass = false
function ValidatePassword() {
  let pass = document.getElementById('tel')
  console.log(pass.value)
  var fillpass = document.getElementById('fillpass')
  if (pass.value.match(passw) || pass.value == '') {
    fillpass.innerHTML = ''
    if (pass.value.length) {
      checkpass = true
      // console.log(pass.value.length)
    }
  } else {
    fillpass.innerHTML = 'Enter valid password'
  }
}

var checkemail = false
var format = /^(?:[\w\.\-]+@([\w\-]+\.)+[a-zA-Z]+)?$/
function validateemail() {
  var email = document.getElementById('email')
  console.log(email.value)
  var fillemail = document.getElementById(fillemail)
  if (format.test(email.value)) {
    email.style.color = 'black'
    fillemail.innerText = ''
    checkemail = true
  } else {
    email.style.color = 'red'
    document.getElementById(fillemail).innerText = ' Enter valid Email-Id'
  }
}

async function validation() {
  // location.href = Register.html
  var e = document.getElementById('Profiledata')
  var strUser = e.options[e.selectedIndex].text
  // console.log(strUser)
  let value2 = document.getElementById('email')
  // console.log(value2.value)
  let value3 = document.getElementById('tel')
  // console.log(value3.value)

  const dat = {
    profile: strUser,
    email: value2.value,
    password: value3.value,
  }

  let url2 = 'http://localhost:4000/users'
  const fetchdata = await axios.get(url2)

  let check = true
  for (let item of fetchdata.data) {
    if (item.email == dat.email) {
      alert('Someone already registred with this email id')
      check = false
      break
    }
  }

  if (check ) {
  let url = 'http://localhost:4000/add-user'
  const data = await axios.post(url, dat)
  }
}
