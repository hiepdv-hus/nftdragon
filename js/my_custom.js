$(document).ready(function(){

if($('.brands_slider_desktop').length)
{
var brandsSlider = $('.brands_slider_desktop');

brandsSlider.owlCarousel(
{
loop:false,
autoplay:false,
autoplayTimeout:5000,
nav:false,
dots:false,
autoWidth:true,
items:9,
margin:13
});

if($('.brands_prev').length)
{
var prev = $('.brands_prev');
prev.on('click', function()
{
brandsSlider.trigger('prev.owl.carousel');
});
}

if($('.brands_next').length)
{
var next = $('.brands_next');
next.on('click', function()
{
brandsSlider.trigger('next.owl.carousel');
});
}
}


});
$(document).ready(function(){

if($('.brands_slider_mobile').length)
{
var brandsSlider = $('.brands_slider_mobile');

brandsSlider.owlCarousel(
{
loop:false,
autoplay:false,
autoplayTimeout:5000,
nav:false,
dots:false,
autoWidth:true,
items:3,
margin:2
});

if($('.brands_prev').length)
{
var prev = $('.brands_prev');
prev.on('click', function()
{
brandsSlider.trigger('prev.owl.carousel');
});
}

if($('.brands_next').length)
{
var next = $('.brands_next');
next.on('click', function()
{
brandsSlider.trigger('next.owl.carousel');
});
}
}


});
$(document).ready(function(){

if($('.brands_slider1').length)
{
var brandsSlider = $('.brands_slider1');

brandsSlider.owlCarousel(
{
loop:false,
autoplay:false,
autoplayTimeout:5000,
nav:true,
dots:false,
autoWidth:true,
items:1,
margin:14
});

if($('.brands_prev').length)
{
var prev = $('.brands_prev');
prev.on('click', function()
{
brandsSlider.trigger('prev.owl.carousel');
});
}

if($('.brands_next').length)
{
var next = $('.brands_next');
next.on('click', function()
{
brandsSlider.trigger('next.owl.carousel');
});
}
}


});

 
 $('.myPopover').popover({
         html : true,
         content: function() {
          var elementId = $(this).attr("data-popover-content");
          return $(elementId).html();
         }
         });