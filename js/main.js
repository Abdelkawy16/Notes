$(function () {

    $('.check').click(function () {
      var color='white';
      var id = Math.floor((Math.random() * 10000) + 1);
      if ($('input').val() && $('textarea').val()){
        var elems = ' <div class="note '+id+'" id="'+color+'"><div class="top"><input class="input '+id+'" type="text" placeholder="Type a title ..."><h2 class="'+id+'">'+$('input').val()+
        '</h2><small>'+todayData()+
        '</small></div><div class="bottom"><textarea class="textarea '+id+'" placeholder="Type a description..." class="txt"></textarea><p class="'+id+'">'+$('textarea').val()+'</p><div class="tools"><span onclick= "edit('+id+')" class="edit '+id+'"><i  class="fas fa-pencil-alt"></i></span><span onclick= "save('+id+')" class="save '+id+'"><i  class="fas fa-check"></i></span><span onclick= "changeColor('+id+')"><i class="fas fa-palette"></i></span><span onclick="del('+id+')"><i class="far fa-trash-alt"></i></a></div><div class="changeColor '+id+'"><div class="white Circle '+id+'"></div><div class="blue Circle '+id+'"></div><div class="yellow Circle '+id+'"></div><div class="red Circle '+id+
        '"></div><div class="purple Circle '+id+'"></div></div></div></div>';
        $('#notes').append(elems);
      }
      $('.save').hide();
      $('.input').hide();
      $('.textarea').hide();
      $('.mainInput').attr('value','');
      $('.maintxt').attr('value','');
    });
    $('.color').click(function(){
      var x = $('.changeColor.main').css('display');
      if(x=='none'){
        $('.changeColor.main').css('display','block');
        $('.Circle.main').click(function() {
          var color = this.className.split(' ')[0];
          $('.note.main').attr('id',color)
        })
      }else {
        $('.changeColor.main').css('display','none');
      }
    })
    $('.changeColor').click(function() {
      $('.changeColor').css('display','none');
    })
});
// todayData
function todayData() {
  var today = new Date();var dd = today.getDate();var mm = today.getMonth()+1;var yyyy = today.getFullYear();if(dd<10) {dd = '0'+dd}if(mm<10) {mm = '0'+mm}today = dd + '/' + mm + '/' + yyyy;return today;
}

// delete Note
function del(id) {
  var r = confirm('Do you want to delete that note?!');
  if (r) {
    $('.'+id).hide();
  }
}

//edit Note
function edit(id) {
  $('.input.'+id).attr('value',$('h2.'+id).html());
  $('.textarea.'+id).attr('value',$('p.'+id).html());
  $('.input.'+id).show();
  $('.textarea.'+id).show();
  $('h2.'+id).hide();
  $('p.'+id).hide();
  $('.save.'+id).show();
  $('.edit.'+id).hide();
}

// save edit
function save(id) {
  $('h2.'+id).html($('.input.'+id).val());
  $('p.'+id).html($('.textarea.'+id).val());
  $('.input.'+id).hide();
  $('.textarea.'+id).hide();
  $('h2.'+id).show();
  $('p.'+id).show();
  $('.save.'+id).hide();
  $('.edit.'+id).show();
}

//change Color
function changeColor(id) {
  var x = $('.changeColor.'+id).css('display');
  if(x=='none'){
    $('.changeColor.'+id).css('display','block');
    $('.Circle.'+id).click(function() {
      var color = this.className.split(' ')[0];
      $('.note.'+id).attr('id',color)
    })
  }else {
    $('.changeColor.'+id).css('display','none');
  }
}
