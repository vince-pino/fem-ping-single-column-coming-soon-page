const inputEl = document.querySelector('input');
const btnEl = document.querySelector('button');

btnEl.addEventListener('click', () => {
  const email = inputEl.value;

  if (email === '' || !checkEmail(email)) {
    document.querySelector('.error-message').style.display = 'block';
    inputEl.classList.add('error-email');
  }
  else {
    document.querySelector('.error-message').style.display = 'none';
    inputEl.classList.remove('error-email');
  }
});

function checkEmail(input) {
  const emailRegEx = /[^\s@]+@[^\s@]+\.[^\s@]/;

  return emailRegEx.test(input);  
}