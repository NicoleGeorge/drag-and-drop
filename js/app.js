const fill = document.querySelector('.fill');
const emptyBoxes = document.querySelectorAll('.empty');

// EVENT LISTENERS - FILL
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// DRAG FUNCTIONS

