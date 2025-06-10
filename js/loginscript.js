document.addEventListener('DOMContentLoaded', () => {
  const loginBtn = document.getElementById('loginBtn');
  const popupContainer = document.getElementById('popupContainer');

  // Load login popup when login link clicked
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

        closeLogin.addEventListener('click', () => {
          loginPopup.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
          if (e.target === loginPopup) {
            loginPopup.style.display = 'none';
          }
        });

        loginForm.addEventListener('submit', function (e) {
          e.preventDefault();
          alert('OTP sent to your number/email!');
          loginPopup.style.display = 'none';
        });

        // Optional: Handle "Create Account" link to open signup
        document.getElementById('openSignupFromLogin')?.addEventListener('click', function (e) {
          e.preventDefault();
          loginPopup.style.display = 'none';
          document.getElementById('signupBtn')?.click(); // Reuses signup trigger
        });
      })
      .catch(err => console.error('Failed to load login popup:', err));
  });
});
