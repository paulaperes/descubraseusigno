document.getElementById('signo-form').addEventListener('submit', function() {
    const button = document.querySelector('.btn-primary');
    button.classList.add('pulse');

    setTimeout(function() {
        button.classList.remove('pulse');
    }, 1000);
});
