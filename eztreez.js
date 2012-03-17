(function ($) {
  $.fn.ezTreez = function (options) {
    return this.each(function () {
      var children = $(this).find('> tbody > tr, > li, > div'),
          hierarchy = options.hierarchy,
          click_element_selector = options.click_element_selector;

      $.each(hierarchy, function (index) {
        var stop_elements_selector = '.' + hierarchy.slice(0, index + 1).join(',.'),
            current_class = hierarchy[index];

        children.filter('.' + current_class).each(function () {
          var branch = $(this);
          branch.find(click_element_selector).click(function (e) {
            branch.nextUntil(stop_elements_selector).toggle();
          });
        });
        
      });
    
    });
  };
})(jQuery);