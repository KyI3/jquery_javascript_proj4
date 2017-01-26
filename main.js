$(document).ready(function(){

  openModal();

  $('#make_grid').click(function(){
    clearGrid();
    createGrid();
    closeModal();
    $('.square').hover(function(){
      $(this).css({"background-color": "black"});
    });
  });

  for(i = 0; i < 256; i++){
      $('.container').append("<div class='square'></div>");
  }
  $('.square').hover(function(){
    $(this).css({"background-color": "black"});
  });
});


var modal = $('#modal');
var clear = $('#clear');
var create = $('#grid');

function openModal(){
  $(clear).click(function(){
    $(modal).fadeIn(1000);
  });
}
function closeModal(){
    $(modal).fadeOut(1000);
}
function createGrid(){
  var size = $('#grid_value').val();
  console.log(size);
  var widthHeight = 600 / size;
  console.log(widthHeight);
  var tiles = size * size;
  console.log(tiles);

  for(i = 0; i < tiles; i++){
      $('.container').append("<div class='square'></div>");
      $('.square').css({
        'width': widthHeight + "px",
        'height': widthHeight + "px",
      });
  }
}
function clearGrid(){
  var grid = $('.square');
  grid.detach();
}
