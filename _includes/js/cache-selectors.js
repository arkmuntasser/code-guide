// Bad example
var root = $('[data-widget]');

root
  .find('.slider')
  .on('init', function() { ... });
root
  .find('.slider')
  .slick({ ... });

// Good example
var root = $('[data-widget]');
var slider = root.find('.slider');

slider.on('init', function() { ... });
slider.slick({ ... });
