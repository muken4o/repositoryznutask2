document.getElementById('registerForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Отримуємо значення полів
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirm = document.getElementById('confirm').value;

  // Елементи для відображення помилок
  const errorName = document.getElementById('errorName');
  const errorEmail = document.getElementById('errorEmail');
  const errorPassword = document.getElementById('errorPassword');
  const errorConfirm = document.getElementById('errorConfirm');

  // Очищення попередніх повідомлень
  errorName.textContent = '';
  errorEmail.textContent = '';
  errorPassword.textContent = '';
  errorConfirm.textContent = '';

  let isValid = true;

  // Перевірка імені
  if (name === '') {
    errorName.textContent = 'Поле "Ім’я" не може бути порожнім.';
    isValid = false;
  }

  // Перевірка email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
  if (!email.match(emailPattern)) {
    errorEmail.textContent = 'Введіть коректну адресу електронної пошти.';
    isValid = false;
  }

  // Перевірка пароля
  if (password.length < 6) {
    errorPassword.textContent = 'Пароль має містити щонайменше 6 символів.';
    isValid = false;
  }

  // Перевірка повтору пароля
  if (password !== confirm) {
    errorConfirm.textContent = 'Паролі не співпадають.';
    isValid = false;
  }

  // Якщо всі дані коректні
  if (isValid) {
    alert('Форма успішно відправлена!');
    this.reset();
  }
});
