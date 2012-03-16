(function ($) {
  $.fn.ezTreez = function (options) {
    return this.each(function () {
      var children = $(this).find('> tbody > tr, > li, > div');

      $.each(options, function (index) {
        var stop_elements_selector = '.' + options.slice(0, index + 1).join(',.'),
            current_class = options[index];

        children.filter('.' + current_class).click(function (e) {
          $(this).nextUntil(stop_elements_selector).toggle();
        });
      });
    
    });
  };
})(jQuery);