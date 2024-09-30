const button = document.getElementById('colorButton');

button.addEventListener('click', function() {
    // Change color on click
    const newColor = button.style.backgroundColor === 'red' ? '#3498db' : 'red';
    button.style.backgroundColor = newColor;
});
