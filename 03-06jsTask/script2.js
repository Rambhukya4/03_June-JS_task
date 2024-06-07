document.addEventListener("DOMContentLoaded", function() {
    var countdownDiv = document.getElementById('countdown'); // Select the countdown div by its ID
    var count = 5; // Initialize the countdown number

    // Function to generate a random hexadecimal color
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Function to handle the countdown
    var countdown = setInterval(function() {
        if (count > 1) {
            count--; // Decrement the count
            document.getElementById('countdown').textContent = count; // Update the countdown div's text
        } else {
            clearInterval(countdown); // Stop the countdown when it reaches 1
            document.getElementById('countdown').textContent = 'Time\'s up!';
        }
    }, 1000); // Execute this function every 1 second (1000 milliseconds)

    // Function to change the background color every 2 seconds
    var changeColor = setInterval(function() {
        document.getElementById('countdown').style.backgroundColor = getRandomColor();
    }, 2000); // Execute this function every 2 seconds (2000 milliseconds)
});
