require('whatwg-fetch')

const input = document.querySelector('input[name=wow]')
const submit = document.querySelector('input[name=submit]')

submit.addEventListener('click', (ev) => {
  console.log(input.value)
  fetch('/user', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: input.value
    })
  })
})
