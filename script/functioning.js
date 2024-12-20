// Twinkling Stars Effect
const starsContainer = document.getElementById('stars');
const numberOfStars = 100;

for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDuration = `${Math.random() * 4 + 2}s`;
    starsContainer.appendChild(star);
}

// Dropdown Menu Logic
function toggleDropdown() {
    const dropdownMenu = document.getElementById('dropdown-menu');
    dropdownMenu.classList.toggle('show');
}

// Close dropdown if clicking outside
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName('dropdown-content');
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

// Timer Variables
let timeLeft = 20 * 60; // 20 minutes in seconds
let timerInterval = null; // To store the timer interval
const timerElement = document.getElementById('timer');

// Function to format time (MM:SS)
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Function to update the timer display
function updateTimerDisplay() {
    timerElement.textContent = formatTime(timeLeft);
}

// Function to start the timer
function startTimer() {
    if (timerInterval) return; // Prevent starting multiple timers
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval); // Stop the timer
            timerInterval = null; // Reset the interval
            alert('Time is up!');
        } else {
            timeLeft -= 1; // Decrement the time
            updateTimerDisplay(); // Update the display
        }
    }, 1000); // Run every second
}

// Function to pause the timer
function pauseTimer() {
    clearInterval(timerInterval); // Stop the timer
    timerInterval = null; // Reset the interval variable
}

// Function to reset the timer
function resetTimer() {
    pauseTimer(); // Stop the timer if running
    timeLeft = 20 * 60; // Reset time to 20 minutes
    updateTimerDisplay(); // Update the display
}

// Attach event listeners when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('start-timer-btn').addEventListener('click', startTimer);
    document.getElementById('pause-timer-btn').addEventListener('click', pauseTimer);
    document.getElementById('reset-timer-btn').addEventListener('click', resetTimer);
    updateTimerDisplay(); // Initialize the timer display
});

// Back Button Functionality
document.getElementById('back-btn').addEventListener('click', function() {
    window.history.back(); // Go back to the previous page
});


