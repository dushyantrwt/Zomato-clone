/* Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: #f0f8ff;
    color: #333;
}

/* Header */
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #0077cc;
    color: white;
    padding: 20px 50px;
}

.logo img {
    height: 50px;
}

header ul {
    list-style: none;
    display: flex;
    gap: 20px;
}

header ul li a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s;
}

header ul li a:hover {
    color: #cce9ff;
}

/* Hero Section */
.hero {
    position: relative;
    text-align: center;
}

.hero img {
    width: 100%;
    max-height: 400px;
    object-fit: cover;
    filter: brightness(70%);
}

.hero-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    animation: fadeIn 1.5s ease-in;
}

.hero-content h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
}

.hero-content p {
    font-size: 1.2rem;
    margin-bottom: 20px;
}

.hero-content button {
    padding: 12px 25px;
    font-size: 1rem;
    background-color: #005fa3;
    border: none;
    color: white;
    border-radius: 25px;
    cursor: pointer;
    transition: background 0.3s ease;
}

.hero-content button:hover {
    background-color: #004a80;
}

/* Benefits Section */
.benefits {
    padding: 50px 20px;
    background-color: #e6f2ff;
    text-align: center;
}

.benefits h2 {
    color: #0077cc;
    margin-bottom: 40px;
}

.cards {
    display: flex;
    gap: 30px;
    justify-content: center;
    flex-wrap: wrap;
}

.card {
    background: white;
    padding: 20px;
    width: 280px;
    border-radius: 15px;
    box-shadow: 0 4px 20px rgba(0, 119, 204, 0.1);
    transition: transform 0.3s;
}

.card:hover {
    transform: translateY(-10px);
}

.card h3 {
    color: #005fa3;
    margin-bottom: 10px;
}

/* FAQ Section */
.faq {
    padding: 40px 20px;
    background-color: #f0faff;
}

.faq h2 {
    color: #0077cc;
    margin-bottom: 20px;
    text-align: center;
}

details {
    background: #fff;
    margin: 10px auto;
    max-width: 600px;
    padding: 15px 20px;
    border-radius: 10px;
    border-left: 5px solid #0077cc;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

summary {
    font-weight: bold;
    cursor: pointer;
}

/* Footer */
footer {
    background-color: #0077cc;
    color: white;
    padding: 20px;
    text-align: center;
}

footer a {
    color: #cce9ff;
    text-decoration: underline;
}

/* Animations */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Responsive */
@media (max-width: 768px) {
    .cards {
        flex-direction: column;
        align-items: center;
    }

    .hero-content h1 {
        font-size: 1.8rem;
    }

    .hero-content p {
        font-size: 1rem;
    }

    .hero-content button {
        padding: 10px 20px;
    }
}
