function makeGrid(height, width) {
  var table = document.getElementById("pixelCanvas");
  var grid = '';

//loop for rows
  for (x = 0; x < height; x++){
    grid += '<tr>';

//loop for columns
   for (y = 0; y < width; y++){
     grid += '<td class="cell" id="row-' + x + '_cell-' + y + '"></td>';
    }
    grid += '</tr>';
  }

//height and width values 
  table.innerHTML = grid;
  addClickEventToCells();
}
  function formSubmission() {
    event.preventDefault();
    var height = document.getElementById('inputHeight').value;
    var width = document.getElementById('inputWeight').value;
    makeGrid(height, width);
    }

//color
var color = document.getElementById("colorPicker");
var selectedColor = colorPicker.value;
colorPicker.addEventListener("input", function() {
  selectedColor = colorPicker.value;
  }, false);

//click events to box
  function addClickEventToCells() {
    var box = document.getElementsByClassName('cell');
    for (x = 0; x < box.length; x++) {
      box[x].addEventListener("click",  function(event) {
        var selectedBox = event.target;
        selectedBox.style.backgroundColor = selectedColor;
    });
  }
}

//submit
document.getElementById('sizePicker').onsubmit = function() {
  formSubmission();
};

