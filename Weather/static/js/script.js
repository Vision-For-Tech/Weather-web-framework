document.addEventListener("DOMContentLoaded", function() {
    // Get the container for raindrops
    var rainContainer = document.querySelector('.rain');

    // Create thousands of raindrop elements and append them to the container
    for (var i = 0; i < 300; i++) {
        var drop = document.createElement('div');
        drop.classList.add('drop');
        drop.style.left = Math.random() * 100 + 'vw'; // Random left position within viewport width
        drop.style.animationDelay = Math.random() * 2 + 's'; // Random animation delay
        rainContainer.appendChild(drop);
    }
});



