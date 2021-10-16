$(document).ready(function(){
  $('.icon-aside').click(function () {
    $('.aside').toggleClass('hide-aside');
    $('.dash-board').toggleClass('dash-board-fullScreen');
    $(this).find('i').toggleClass('fa-align-left');
    $(this).find('i').toggleClass('fa-align-right');
  });
  $('.aside li').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    var DataValue = $(this).attr('data-value');
    //-$('.operation').addClass('show').siblings().not('.filter-container').slideUp(500).removeClass('show');
    $('#content').load(DataValue);
    console.log(DataValue);
    
  });
  $('.catagory a').click(function () {
    $(this).addClass('active').parent().siblings().find("a").removeClass('active');
  });
});