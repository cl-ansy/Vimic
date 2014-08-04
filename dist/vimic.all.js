var INPUT = (function() {
    var input = {};

    input.init = function() {
        console.log('input init');
        document.onkeydown = function(e) {
            console.log(e);
        };
    };

    return input;
}());

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

var MAPS = (function() {
    var maps = {};

    maps.demoMap = [
        '............',
        '............',
        '............',
        '............',
        '............'
    ];

    return maps;
}());

var RENDERER = (function(maps) {
    var renderer = {
        player: '@',
        dirt: '.',
        wall: '#'
    };

    renderer.init = function() {
        console.log('renderer init');
    };

    return renderer;
}(MAPS));

var VIMIC = (function(engine) {
    var vimic = {};

    engine.init();

    return vimic;
}(ENGINE));
