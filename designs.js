function makeGrid(height, width) {
  var table = document.getElementById("pixelCanvas");
  var grid = '';

// loop for rows
  for (i = 0; i < height; i++){
    grid += '<tr>';

// loop for columns
   for (j = 0; j < width; j++){
     grid += '<td class="cell" id="row-' + i + '_cell-' + j + '"></td>';
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
    for (i = 0; i < box.length; i++) {
      box[i].addEventListener("click",  function(event) {
        var selectedBox = event.target;
        selectedBox.style.backgroundColor = selectedColor;
    });
  }
}

//submit
document.getElementById('sizePicker').onsubmit = function() {
  formSubmission();
};

