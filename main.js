var array = [];

var svg = d3.select('.content').append('svg');

function getRandomValue(min, max) {
  return Math.random() * (max - min) + min;
}

function randomize() {
    for(var i = 0; i< 32; i ++) {array[i] = getRandomValue(0,40)}
}

function deactivateButtons() {
   var buttons = [].slice.apply(document.getElementsByTagName("input"));
   buttons.map(function(value) {value.setAttribute("disabled", true)})
}

function activateButtons() {
    var buttons = [].slice.apply(document.getElementsByTagName("input"));
    buttons.map(function(value) {value.disabled = false})
}

Array.prototype.drawArray = function () {
    var rect = svg.selectAll('rect');
    rect.remove();
    for (var i = 0; i < this[0].length; i++) {
        svg.append('rect')
            .attr('x', i*20)
            .attr('y', 480 - this[0][i]*10)
            .attr('width', 20)
            .attr('height', this[0][i]*10) 
        }
}

function callback(array) {
    return function () {JSON.parse(array).drawArray()}
}

var bubble = function() {
    randomize();
    deactivateButtons();
    setTimeout(activateButtons,array.bubbleSort()*50);
}

var shaker = function() {
    randomize();
    deactivateButtons();
    setTimeout(activateButtons,array.shakerSort()*50);
}

var selection = function() {
    randomize();
    deactivateButtons();
    setTimeout(activateButtons,array.selectionSort()*50);
}

var insertion = function() {
    randomize();
    deactivateButtons();
    setTimeout(activateButtons,array.insertionSort()*50);
}

var shell = function() {
    randomize();
    deactivateButtons();
    setTimeout(activateButtons,array.shellSort()*50);
}

var gnome = function() {
    randomize();
    deactivateButtons();
    setTimeout(activateButtons,array.gnomeSort()*50);
}

