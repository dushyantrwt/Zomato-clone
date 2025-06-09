document.addEventListener('DOMContentLoaded', () => {
    const signupBtn = document.getElementById('signupBtn');
    const popupContainer = document.getElementById('popupContainer');

    signupBtn.addEventListener('click', (e) => {
        e.preventDefault();

        // Load signup.html into the container
        fetch('signup.html')
            .then(response => response.text())
            .then(html => {
                popupContainer.innerHTML = html;

                const closePopup = document.getElementById('closePopup');
                const popup = document.getElementById('signupPopup');

                // Show popup
                popup.style.display = 'flex';

                // Close handlers
                closePopup.addEventListener('click', () => {
                    popup.style.display = 'none';
                });

                window.addEventListener('click', (e) => {
                    if (e.target === popup) {
                        popup.style.display = 'none';
                    }
                });

                // Optional: Form submission
                document.getElementById('signupForm')?.addEventListener('submit', function(e) {
                    e.preventDefault();
                    alert('Account created!');
                    popup.style.display = 'none';
                });
            })
            .catch(err => {
                console.error('Failed to load signup form:', err);
            });
    });
});
