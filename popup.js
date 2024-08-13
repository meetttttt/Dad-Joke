// Function to fetch a joke from the icanhazdadjoke API
function fetchJoke() {
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        const jokeText = document.getElementById('jokeText');
        jokeText.textContent = data.joke;
    })
    .catch(error => {
        console.error('Error fetching joke:', error);
    });
}

// Call fetchJoke() when the popup is loaded
document.addEventListener('DOMContentLoaded', fetchJoke);
