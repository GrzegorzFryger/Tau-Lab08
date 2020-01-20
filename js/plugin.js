(function($){
        $.fn.validate = function(regex) {
            return this.each(function() {
            
                $(this).keyup(function() {
                    if (regex.test($(this).val())) {
                        $(this).removeClass("invalid");
                        $(this).addClass("valid");
                        console.log("valid");
                    } else {
                        $(this).removeClass("valid");
                        $(this).addClass("invalid");
                        console.log("invalid");
                    }
            
                  });
            });
            
        }

    })(jQuery);

    
(function($){
        $.fn.mark = function() {
            return this.each(function() {
            $(this).keyup(function() {
                $(this)[0].className.split(' ').map(x => {
                    if(x.localeCompare('invalid')){
                        $(this).css( "background-color", "green" );
                } else if(x.localeCompare('valid')) {
                    $(this).css( "background-color", "red" );
                } 
           })
        });
    });
        
        }
})(jQuery);








