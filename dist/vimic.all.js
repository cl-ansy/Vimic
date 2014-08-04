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

var ENGINE = (function(input) {
    var engine = {};

    engine.init = function() {
        console.log('engine init');
        input.init();
    };

    return engine;
}(INPUT));

var MAPS = (function() {
    var maps = {};

    return maps;
}());

var RENDERER = (function(maps) {
    var renderer = {};

    renderer.init = function() {
        console.log('renderer init');
    };

    return renderer;
}(MAPS));

var VIMIC = (function(engine, renderer) {
    var vimic = {};

    engine.init();
    renderer.init();

    return vimic;
}(ENGINE, RENDERER));
