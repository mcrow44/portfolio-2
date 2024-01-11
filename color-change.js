document.addEventListener('DOMContentLoaded', function () {
    // Get references to the buttons
    var whiteButton = document.getElementById('whiteButton');
    var redButton = document.getElementById('redButton');
    var greenButton = document.getElementById('greenButton');
    var blueButton = document.getElementById('blueButton');

    // Add click event listeners to the buttons
    if (whiteButton) {
      whiteButton.addEventListener('click', function () {
        console.log("CLICKING WHITE BUTTON")
          setMode('white-theme');
      });
    }

    if (redButton) {
      redButton.addEventListener('click', function () {
          setMode('red-theme');
      });
    }
    

    if (greenButton) {
      greenButton.addEventListener('click', function () {
          setMode('green-theme');
      });
    }
    
    if (blueButton) {
      blueButton.addEventListener('click', function () {
          setMode('blue-theme');
      });
    }

    // On page load, check for a saved theme in localStorage
    var savedTheme = localStorage.getItem('selectedTheme');

    console.log("SAVED THEME", savedTheme);
    if (savedTheme) {
        setMode(savedTheme);
    }

    function setMode(mode) {
        // Get a reference to the body element
        var body = document.body;

        // Remove all existing color classes from the body
        body.classList.remove('white-theme', 'red-theme', 'green-theme', 'blue-theme');

        // Add the selected color class to the body
        body.classList.add(mode);

        // Save the selected theme in localStorage
        localStorage.setItem('selectedTheme', mode);
    }
});
