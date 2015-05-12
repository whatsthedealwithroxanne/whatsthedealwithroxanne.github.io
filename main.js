$(document).ready(function(){

!function($){

  $.fn.blurit = function() {
    return this.each(function(){
    var $this = $(this);
    var image = $this.children('.image');
    var text = $this.children('.blurry');
    var title = $this.children('h5');
      $this.on("mouseenter", function(){
        text.css('text-shadow', 'rgba(0, 0, 0, 0.5) 0px 0px 1px')
        image.toggleClass('blur');
        title.animate({
          opacity:1
        },"slow");
      });

      $this.on("mouseleave", function(){
        text.css('text-shadow', 'rgba(0, 0, 0, 0.5) 0px 0px 5px')
        image.toggleClass('blur');
        title.animate({
          opacity:0
        },"slow");
      });
  });
 };
}(window.jQuery);


  $(".link").blurit();

})

  // .on("mouseenter", ".civ-item:not(.gigante)", function() {
  //   $(this).addClass("colorise");
  // })
  // .on("mouseleave", ".civ-item:not(.gigante)", function() {
  //   $(this).removeClass("colorise");
  // })
