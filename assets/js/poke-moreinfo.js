const showOverlayButton = document.querySelector('.open-pokeinfo');
const overlay = document.getElementById('pokemonList');
const closeOverlayButton = document.querySelector('.close-pokeinfo');

showOverlayButton.addEventListener('click', () => {
    overlay.classList.add('show'); 
});

closeOverlayButton.addEventListener('click', () => {
    overlay.classList.remove('show'); 
});
