document.getElementById('showSkills').addEventListener('click', function() {
    var skillsList = document.getElementById('skillsList');
    var image = document.querySelector('.skills-image');
    if (skillsList.style.display === 'none') {
        skillsList.style.display = 'block';
        image.classList.remove('hidden');
    } else {
        skillsList.style.display = 'none';
        image.classList.add('hidden');
    }
});