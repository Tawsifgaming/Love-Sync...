const correctUsername = "tawsif's_nabila";
const correctPassword = "love_you";

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === correctUsername && password === correctPassword) {
    alert('Login Successful!');
    document.getElementById('user-buttons').classList.remove('hidden');
  } else {
    alert('Incorrect Username or Password');
  }
}

function toggleMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');
}

function navigateTo(user) {
  alert(`Navigating to ${user}'s interface`);
  document.getElementById('interface').classList.remove('hidden');
  showButtons();
}

function showButtons() {
  const buttons = document.querySelectorAll('.action-button');
  buttons.forEach((button, index) => {
    setTimeout(() => {
      button.classList.add('show');
    }, index * 200);
  });
}

function addContent(type) {
  alert(`Adding content: ${type}`);
  // Here you would implement the logic to add content
}

function showAbout() {
  alert('About the App');
  // Here you would implement the logic to show about information
}