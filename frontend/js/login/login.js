// document.addEventListener("DOMContentLoaded", function () {

//   const form = document.querySelector('.login-form');

//   form.addEventListener('submit', function (e) {
//     e.preventDefault();

//     const email = document.getElementById('email').value.trim();
//     const password = document.getElementById('password').value;

//     if (email === 'admin@gmail.com' && password === 'admin123') {
//       window.location.href = './admin/index.html';
//     } 
//     else if (email === 'student@gmail.com' && password === 'student123') {
//       window.location.href = './student/dashboard.html';
//     } 
//     else if (email === 'teacher@gmail.com' && password === 'teacher123') {
//       window.location.href = './teacher/index.html';
//     } 
//     else {
//       alert('Invalid email or password!');
//     }
//   });

// });


// document.querySelector('.login-form').addEventListener('submit', function (e) {
//   e.preventDefault();
//   const email = document.getElementById('email').value.trim();
//   const password = document.getElementById('password').value;

//   if (email === 'admin@gmail.com' && password === 'admin123') {
//     window.location.href = '../../admin.html/index.html';
//   } else if (email === 'student@gmail.com' && password === 'student123') {
//     window.location.href = '../student/index.html';
//   } else if (email === 'teacher@gmail.com' && password === 'teacher123') {
//     window.location.href = '../teacher/index.html';
//   } else {
//     alert('Invalid email or password! Please check your credentials.');
//   }
// });

// const togglePassword = document.getElementById('togglePassword');
// const passwordInput = document.getElementById('password');
// const eyeIcon = document.getElementById('eyeIcon');

// togglePassword.addEventListener('click', function () {
//   const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
//   passwordInput.setAttribute('type', type);
//   if (type === 'text') {
//     eyeIcon.innerHTML = '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>';
//   } else {
//     eyeIcon.innerHTML = '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>';
//   }
// });








document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // Login Form Submit
    // =========================

    const form = document.querySelector(".login-form");

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        // Admin Login
        if (email === "admin@gmail.com" && password === "admin123") {

            window.location.href = "../Admin/index.html";

        }

        // Student Login
        else if (email === "student@gmail.com" && password === "student123") {

            window.location.href = "../Student/dashboard.html";

        }

        // Teacher Login
        else if (email === "teacher@gmail.com" && password === "teacher123") {

            window.location.href = "../Teacher/index.html";

        }

        // Invalid
        else {

            alert("Invalid email or password!");

        }

    });

    // =========================
    // Password Toggle
    // =========================

    const togglePassword = document.getElementById("togglePassword");
    const passwordInput = document.getElementById("password");
    const eyeIcon = document.getElementById("eyeIcon");

    // Eye Closed (password hidden)
    const eyeClosed = `
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
    `;

    // Eye Open / Slash (password visible)
    const eyeOpen = `
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"></path>

        <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"></path>

        <path d="M14.12 14.12a3 3 0 1 1-4.24-4.24"></path>

        <line x1="1" y1="1" x2="23" y2="23"></line>
    `;

    // Default icon
    eyeIcon.innerHTML = eyeClosed;

    // Toggle Password
    togglePassword.addEventListener("click", function () {

        const isPasswordHidden = passwordInput.type === "password";

        // Change input type
        passwordInput.type = isPasswordHidden ? "text" : "password";

        // Change icon
        eyeIcon.innerHTML = isPasswordHidden ? eyeOpen : eyeClosed;

    });

});