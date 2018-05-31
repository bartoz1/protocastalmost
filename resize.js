var pageWidth, pageHeight, hoverWidth;

var basePage = {
  width: 1366,
  height: 662,
  scale: 1,
  scaleX: 1,
  scaleY: 1
};

$(function(){
    getHoverWidth();
    setFirstTxtPos();

    
    $(window).on('resize', function(){
//    getPageSize();  
//    $(window).resize(_.debounce(function () {
//    getPageSize();
    getHoverWidth();
//    scalePages($page, pageWidth, pageHeight);
    setFirstTxtPos();
  });
  

function getPageSize() {
  pageHeight = $('#konstrukce').height();
  pageWidth = $('#konstrukce').width();
}
function getHoverWidth(){
 hoverWidth = $('.hoverover').width();
}
function setFirstTxtPos(){
 $('.textinfo').attr('style', 'left:' + hoverWidth + 'px')
}

function scalePages(page, maxWidth, maxHeight) {            
  var scaleX = 1, scaleY = 1;                      
  scaleX = maxWidth / basePage.width;
  scaleY = maxHeight / basePage.height;
  basePage.scaleX = scaleX;
  basePage.scaleY = scaleY;
  basePage.scale = (scaleX > scaleY) ? scaleY : scaleX;

  var newLeftPos = Math.abs(Math.floor(((basePage.width * basePage.scale) - maxWidth)/2));
  var newTopPos = Math.abs(Math.floor(((basePage.height * basePage.scale) - maxHeight)/2));

  page.attr('style', '-webkit-transform:scale(' + basePage.scale + ')'
           )
}});



        
