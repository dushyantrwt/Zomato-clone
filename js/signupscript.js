document.addEventListener('DOMContentLoaded', () => {
  const signupBtn = document.getElementById('signupBtn');
  const loginBtn = document.getElementById('loginBtn');
  const popupContainer = document.getElementById('popupContainer');

  // Handle Signup popup
  signupBtn?.addEventListener('click', function (e) {
    e.preventDefault();

    fetch('signup.html')
      .then(res => res.text())
      .then(html => {
        popupContainer.innerHTML = html;

        const popup = document.getElementById('signupPopup');
        const closeBtn = document.getElementById('closePopup');
        const signupForm = document.getElementById('signupForm');

        popup.style.display = 'flex';

        closeBtn.addEventListener('click', () => popup.style.display = 'none');
        window.addEventListener('click', (e) => {
          if (e.target === popup) popup.style.display = 'none';
        });

        signupForm.addEventListener('submit', function (e) {
          e.preventDefault();
          alert('Account Created!');
          popup.style.display = 'none';
        });
      })
      .catch(err => console.error('Failed to load signup.html:', err));
  });

  // Handle Login popup
  loginBtn?.addEventListener('click', function (e) {
    e.preventDefault();

    fetch('login.html')
      .then(res => res.text())
      .then(html => {
        popupContainer.innerHTML = html;

        const loginPopup = document.getElementById('loginPopup');
        const closeLogin = document.getElementById('closeLoginPopup');
        const loginForm = document.getElementById('loginForm');

        loginPopup.style.display = 'flex';

        closeLogin.addEventListener('click', () => loginPopup.style.display = 'none');
        window.addEventListener('click', (e) => {
          if (e.target === loginPopup) loginPopup.style.display = 'none';
        });

        loginForm.addEventListener('submit', function (e) {
          e.preventDefault();
          alert('OTP sent to your number/email!');
          loginPopup.style.display = 'none';
        });

        // Link from login to signup
        document.getElementById('openSignupFromLogin')?.addEventListener('click', function (e) {
          e.preventDefault();
          loginPopup.style.display = 'none';
          signupBtn?.click(); // Simulate signup button click
        });
      })
      .catch(err => console.error('Failed to load login.html:', err));
  });
});
