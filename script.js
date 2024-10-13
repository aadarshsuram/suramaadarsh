// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  // Auto-scroll the certificates section
    const scrollingWrapper = document.querySelector('.scrolling-wrapper');
    let scrollAmount = 0;

    function autoScroll() {
      scrollAmount += 200;
      if (scrollAmount >= scrollingWrapper.scrollWidth) {
        scrollAmount = 0; // Reset scroll when it reaches the end
      }
      scrollingWrapper.scrollTo({
        top: 0,
        left: scrollAmount,
        behavior: 'smooth'
      });
    }

    // Auto-scroll every 3 seconds
    setInterval(autoScroll, 3000);

  
  // Simple form validation
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
  
    if (name === "" || email === "" || message === "") {
      alert("All fields are required!");
    } else {
      alert("Message sent successfully!");
    }
  });
  