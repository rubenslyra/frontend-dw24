document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('mouseover', function () {
            button.style.backgroundColor = "555";
        });

        button.addEventListener('mouseout', function () {
            button.style.backgroundColor = ''; // Volta à cor original
        });
    });
});