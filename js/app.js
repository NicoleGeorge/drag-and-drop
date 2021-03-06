const fill = document.querySelector('.fill');
const emptyBoxes = document.querySelectorAll('.empty');

// EVENT LISTENERS - FILL
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// LOOP THROUGH EMPTY BOXES + CALL DRAG EVENTS

for (const empty of emptyBoxes) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

// DRAG FUNCTIONS
function dragStart() {
  this.className += ' hold'; //appending the hold class
  setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
  this.className = 'fill';
}

function dragOver(e) {
  e.preventDefault();
  //   console.log('over')
}

function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered'; //appends the hover class
  // console.log('enter')
}

function dragLeave() {
  this.className = 'empty';
  // console.log('leave')
}

function dragDrop() {
  this.className = 'empty';
  this.append(fill);
  // console.log('drop')
}
