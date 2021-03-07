const fill = document.querySelector('.fill');
const emptyBoxes = document.querySelectorAll('.empty');

// EVENT LISTENERS - FILL
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// DRAG FUNCTIONS
function dragStart() {
  this.className += ' hold'; //appending the hold class
  setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
  this.className = 'fill';
}
