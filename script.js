//your JS code here. If required.
const gridItems = document.querySelectorAll('.grid-item');
  const colorForm = document.getElementById('color-form');
  const changeButton = document.getElementById('change_button');
  const resetButton = document.getElementById('reset_button');
  
  changeButton.addEventListener('click', function(event) {
    event.preventDefault();
    const blockId = document.getElementById('block_id').value;
    const color = document.getElementById('colour_id').value;
    
    gridItems.forEach(item => {
      if (item.id === blockId) {
        item.style.backgroundColor = color;
      } else {
        item.style.backgroundColor = 'transparent';
      }
    });
  });
  
  resetButton.addEventListener('click', function(event) {
    event.preventDefault();
    gridItems.forEach(item => {
      item.style.backgroundColor = 'transparent';
    });
  });