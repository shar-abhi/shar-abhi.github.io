// Job title slideshow
document.addEventListener('DOMContentLoaded', function() {
    const jobTitles = document.querySelectorAll('.job-title');
    let currentIndex = 0;

    function showNextTitle() {
        // Remove active class from current title
        jobTitles[currentIndex].classList.remove('active');
        
        // Move to next title
        currentIndex = (currentIndex + 1) % jobTitles.length;
        
        // Add active class to new title
        jobTitles[currentIndex].classList.add('active');
    }

    // Change title every 3 seconds
    setInterval(showNextTitle, 3000);
});
