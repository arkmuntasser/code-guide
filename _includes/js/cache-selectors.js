// Bad example
var root = $('[data-widget="{{guid}}"]');

root
    .find('.slider')
    .on('init', function() { /*...*/ });
root
    .find('.slider')
    .slick({ /*...*/ });

// Good example
var root = $('[data-widget="{{guid}}"]');
var slider = root.find('.slider');

slider.on('init', function() { /*...*/ });
slider.slick({ /*...*/ });
