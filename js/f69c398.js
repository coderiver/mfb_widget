$(document).ready(function() {
    var searchForm = $('#search-form');
    if (searchForm.attr('action').indexOf("?") >= 0) {
        return;
    }
    $.urlParam = function(name){
        var results = new RegExp('[\\?&amp;]' + name + '=([^&amp;#]*)').exec(window.location.href);
        return results[1] || 0;
    }

    // /widgets/index?from=1&to=10&utm_campaign=Berlin&utm_source=BERLIN_DE&utm_medium=WIDGET
    var campaign = $.urlParam('utm_campaign');
    var source = $.urlParam('utm_source');
    searchForm.append('<input type="hidden" name="utm_campaign" value="' + campaign  + '" />');
    searchForm.append('<input type="hidden" name="utm_source" value="' + source  + '" />');
    searchForm.append('<input type="hidden" name="utm_medium" value="widget_button" />');
});