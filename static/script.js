window.onload = () => {
  let form = document.getElementById('form');

  console.log(form)

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    let author = document.getElementById('author').value
    let message = document.getElementById('message').value

    let data = {
      author,
      message
    }

    fetch('http://26.86.130.217:80', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  })
}