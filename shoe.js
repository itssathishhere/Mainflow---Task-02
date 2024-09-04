let currentSlide = 0; // Track the current slide index
const slides = document.querySelectorAll('.slides'); // Select all slides

// Show the first slide initially
slides[currentSlide].style.display = 'block';

// Event listener for the "Next" button
document.getElementById('nextBtn').addEventListener('click', function() {
    slides[currentSlide].style.display = 'none'; // Hide current slide
    currentSlide = (currentSlide + 1) % slides.length; // Move to the next slide
    slides[currentSlide].style.display = 'block'; // Show the new slide
});

// Event listener for the "Previous" button
document.getElementById('prevBtn').addEventListener('click', function() {
    slides[currentSlide].style.display = 'none'; // Hide current slide
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Move to the previous slide
    slides[currentSlide].style.display = 'block'; // Show the new slide
});



document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting the default way

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Form Validation: Ensure all fields are filled
    if (name === "" || email === "" || message === "") {
        let feedback = document.getElementById("formFeedback");
        feedback.innerText = "All fields are required!";
        feedback.style.display = "block";
    } else {
        document.getElementById("formFeedback").style.display = "none";
        alert("Form submitted successfully!");
        // You can add additional form submission logic here
    }
});