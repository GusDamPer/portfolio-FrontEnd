const toggleMenuElement = document.getElementById('toggle-menu');
const listGroupElement = document.getElementById('list-group');

toggleMenuElement.addEventListener('click', () =>{
    listGroupElement.classList.toggle('list-group--show');
});