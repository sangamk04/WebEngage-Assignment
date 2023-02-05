document.querySelector('form').addEventListener('submit', formValidate)
let phoneInputField = document.querySelector('#phone')
let phoneInput = window.intlTelInput(phoneInputField, {
  utilsScript:
    'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js',
})

function formValidate(event) {
  event.preventDefault()

  let data = []
  let email = document.getElementById('email').value
  let mobile = document.getElementById('phone').value

  var user = {
    email: email,
    mobile: mobile,
    Dialcode: phoneInput,
  }
  data.push(user)

  if (!email.includes('@') && email !== '') {
    document.getElementById('validEmail').innerHTML =
      'You have entered an invalid Email address'
  }


  if (email === '') {
    document.getElementById('emailErr').innerHTML = 'Required field '
    document.getElementById('mErr').innerHTML = 'Required field '
    return false

  } else if (mobile === '') {
    document.getElementById('mErr').innerHTML = 'Required field'
    return false

  } else if (mobile.length > 10 || mobile.length < 10) {
    document.getElementById('numberLength').innerHTML =
      'You have entered an invalid Mobile number'
    return false

  } else {

    localStorage.setItem('myData', JSON.stringify(data))
    alert('Thank You')
    location.href = 'ThankYou.html'
  }
}
