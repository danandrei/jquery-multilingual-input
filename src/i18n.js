(function ( $ ) {
    $.fn.i18n = function(options) {

        var settings = $.extend({
            // default no locales, and therefore the input must remain unchanged
            locales: [],
            // if no attribute option is given, this is the default
            attribute: 'data-field'
        }, options);

        var localesBackup = settings.locales;

        this.each(function(index, obj) {
            var localesData = $(obj).attr('data-i18n');
            var locales = localesData ? localesData.split(',') : settings.locales;
            var type = $(obj).attr('type');

            if (!locales.length || type != "text") {
                return;
            }
            
            $(obj).wrap('<span class="input-prepend input-append">');
            $(obj).before('<button class="btn" type="button">' + locales[0].toUpperCase() + '</button>');
            
            for (i = locales.length - 1; i > 0; i--) {
                $(obj).after('<input  style="display: none;" class="span2" type="text">');
                $(obj).after('<button class="btn" type="button">' + locales[i].toUpperCase() + '</button>');
            }
            
            var $parent = $(obj).parent(); 
            var attrVal = $(obj).attr(settings.attribute);
            $parent.children('input').each(function(i, object) {
                if (attrVal) {
                    $(object).attr(settings.attribute, attrVal + '.' + settings.locales[i]);
                } else {
                    $(object).attr(settings.attribute, settings.locales[i]);
                }
            });
            
            var $elems = $parent.children('.btn');
            var width = $(obj).width();
            $elems.on('click', function(e) {
                var i = $elems.index(this);
                i+= 1;
                var display = $parent.children('input:nth-of-type(' + i + ')').css('display');
                if(display == 'none'){
                    $parent.children('input').animate({"width": "0"}, 200).promise().done(function () {
                        $parent.children('input').hide();
                        $parent.children('input:nth-of-type(' + i + ')').show().animate({"width": width}, 200);
                    });
                }
                        
            });
        });
        return this;
    };
}( jQuery ));