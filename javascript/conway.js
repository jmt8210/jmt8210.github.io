var rows;
var cols;
var cellWidth;
var cellHeight;

var vals;
var drawing = true;

function setup(){
  createCanvas(501,501);
  cols = width/10;
  rows = height/10;
  cellWidth = 10;
  cellHeight = 10;
  vals = newArr(rows, cols);
  for(var i = 0; i < rows; i++){
    for(var j = 0; j < cols; j++){
      vals[i][j] = 0;
    }
  }
}

var delay = false;

function draw(){
  if(!delay){
    var newVals = newArr(rows, cols);
    for(var i = 0; i < rows; i++){
      for(var j = 0; j < cols; j++){
        var x = j*cellWidth;
        var y = i*cellHeight;
        if(!drawing){
          if(vals[i][j] == 1){
            var numNeighbors = neighbors(vals, i, j); 
            if(numNeighbors == 2 || numNeighbors == 3){
              newVals[i][j] = 1;
            }else newVals[i][j] = 0;
          }else{
            if(neighbors(vals, i, j) == 3) newVals[i][j] = 1;
          }
        }
        
        // 255 indicates white (an dead cell) and 0 indacates black (an alive cell)
        var colorNum = 255;
        if(vals[i][j] == 1) colorNum = 0; 
        fill(colorNum);
        rect(x, y, x+cellWidth, y+cellHeight);
      }
    }
    if(!drawing) vals = newVals;
    delay = true;
    if(!drawing) setTimeout(() => delay = false, 1000 - document.getElementById('speed').value);
  }
}

function reset(){
  drawing = true;
  vals = newArr(rows, cols);
}

function newArr(rs, cs){
    var arr = [];
    for(var i = 0; i < rs; i++){
        arr.push([]);
        for(var j = 0; j< cs; j++){
            arr[i].push(0);
        }
    }

    return arr;
}

function mouseDragged(event){
  if(drawing){
    if(!event.ctrlKey) vals[(int)(mouseY/cellHeight)][(int)(mouseX/cellWidth)] = 1;
    else vals[(int)(mouseY/cellHeight)][(int)(mouseX/cellWidth)] = 0;
  }
}

function mouseClicked(event){
  if(drawing){
    if(!event.ctrlKey) vals[(int)(mouseY/cellHeight)][(int)(mouseX/cellWidth)] = 1;
    else vals[(int)(mouseY/cellHeight)][(int)(mouseX/cellWidth)] = 0;
  }
}

function keyReleased(){
  if(keyCode == ENTER) drawing = false;
}

function go(){
  drawing = false;
}

function neighbors(vals, i, j){
  var topLeft = 0, topRight = 0, bottomLeft = 0, bottomRight = 0;
  var top = 0, left = 0, right = 0, bottom = 0;
  var rightExists = j+1 < cols;
  var leftExists = j-1 > -1;
  var topExists = i-1 > -1;
  var bottomExists = i+1 < rows;
  
  // Check if we are at the edge, if we are, consider its neighbors all dead cells
  if(topExists) top = vals[i-1][j];
  
  if(leftExists){
    if(topExists) topLeft = vals[i-1][j-1];
    if(bottomExists) bottomLeft = vals[i+1][j-1];
    left = vals[i][j-1];
  }
  
  if(bottomExists) bottom = vals[i+1][j];
  
  if(rightExists){
    if(topExists) topRight = vals[i-1][j+1];
    if(bottomExists) bottomRight = vals[i+1][j+1];
    right = vals[i][j+1];
  }
  
  // Returns the sum of the values, which gives the total number of alive neighboring cells
  
  return topLeft + topRight + bottomLeft + bottomRight + top + left + right + bottom;
}