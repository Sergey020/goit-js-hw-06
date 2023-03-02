const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // остановить отправку формы

  const formData = new FormData(loginForm);

  if (!formData.get('email') || !formData.get('password')) {
    alert('All fields must be filled in!');
  } else {
    const userData = {
      email: formData.get('email'),
      password: formData.get('password')
    };

    console.log(userData);
    loginForm.reset();
  }
});
