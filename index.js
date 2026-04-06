const container = document.querySelector('.grid-container')
const buttons = document.querySelectorAll('.size-btn')
const remove = document.querySelector('.rmv-btn')

//main function (create field with particular size)
function createGrid(size) {
  container.innerHTML = ''; 
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');

    cell.addEventListener('mouseover', (e) => {
        if (e.buttons === 1) {
            cell.style.backgroundColor = 'black';
        }
    });

    container.appendChild(cell);
  };
};
// Size buttons logic (we take number from button id and then create field use this number for field size)
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const size = button.id
        createGrid(size)
    });
});
// Remove button logic (we just change all background color from all our cells)
remove.addEventListener('click', () => {
    const allCell = document.querySelectorAll('.cell')

    allCell.forEach(cell => {
        cell.style.backgroundColor = 'white'
    });
});
// If we open our web-page at the first time we see 16 x 16 fields instead of black square
createGrid(16)


