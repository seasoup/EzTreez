(function ($) {
  $.fn.ezTreez = function (options) {
    var hierarchy = options.hierarchy,
        hierarchy_classes = '.' + hierarchy.join(',.'),
        click_element_selector   = options.click_element_selector,
        expandable_rows_selector = '.' + hierarchy.slice(0, hierarchy.length-1).join(',.'),
        stop_elements_selector   = $.map(hierarchy, function (a, index) {
          return '.' + hierarchy.slice(0, index + 1).join(',.');
        });
        
    return this.each(function () {
      var children = $(this).find('> tbody > tr, > li, > div').filter(expandable_rows_selector);
          
      $.each(hierarchy, function (index) {
        var current_class = hierarchy[index],
            index = index;
            
        children.filter('.' + current_class).on('click', click_element_selector, function () {
          $(this).closest(hierarchy_classes).nextUntil(stop_elements_selector[index]).toggle();
        });
        
      });
    });
  };
})(jQuery);