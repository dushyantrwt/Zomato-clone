// Optional: Add animation or focus interaction
document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('main input');
    
    input.addEventListener('focus', () => {
        input.style.border = "2px solid #e23744";
    });

    input.addEventListener('blur', () => {
        input.style.border = "none";
    });

    // Greeting message in console
    console.log("Welcome to Zomato styled clone 🍕🍔🍜");
});
