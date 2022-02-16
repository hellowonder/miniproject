var format = /^(?:[\w\.\-]+@([\w\-]+\.)+[a-zA-Z]+)?$/
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
  if (pass.value.match(passw) || pass.value == '') {
    pass.nextElementSibling.innerHTML = ''
    console.log(pass.nextElementSibling.innerText)
  } else {
    pass.nextElementSibling.innerHTML = 'Enter valid password'
  }
}

async function loginValidation() {
  let parent1 = document.getElementById('email')
  let check1 = parent1.value
  let parent2 = document.getElementById('password')
  let check2 = parent2.value

  console.log(check1)
  console.log(check2)
  let url2 = 'http://localhost:4000/add-user'
  let url = 'http://localhost:4000/users'

  const userdata = await axios.get(url)
  let userlist = userdata.data

  let flag = false

  for (let item of userlist) {
    if (item.email == check1 && item.password == check2) {
      alert('Sign in Successfully')
      flag = true
      location.href = './Feedback_form.html'
      break
    }
  }

  if (flag == false) {
    alert('Please enter correct email and password')
  }
  // location.href = './Feedback_form.html'
}
