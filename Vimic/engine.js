var ENGINE = (function(renderer) {
    var engine = {
        init: function() {
            console.log('engine init');
            this._attachEvents();
            renderer.init();
            // input.init();
        },

        _attachEvents: function() {
            document.onkeydown = function(e) {
                console.log(e);
                switch(e.keyCode) {
                    case 'enterCode':
                        break;
                }
            };
        }
    };
    return engine;
}(RENDERER));
