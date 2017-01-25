$(document).ready(function(){

  openModal();
  closeModal();

  $('#make_grid').click(function(){
    $('.titles').remove();
    createGrid();
  });

  for(i = 0; i < 576; i++){
      $('.container').append("<div class='tiles'></div>");
  }
  $('.tiles').mouseenter(function(){
    $(this).css({"background-color": "black"});
  })
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
  $(window).click(function(event){
    if(event.target === modal){
      $(modal).fadeOut(1000);
      console.log('cleared');
    }
  });
}
function createGrid(){
  var size = $('#grid').val();
  for(i = 0; i < size; i++){
      $('.container').append("<div class='tiles'></div>");
  }
}
