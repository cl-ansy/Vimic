var ENGINE = (function(input) {
    var engine = {};

    engine.init = function() {
        console.log('engine init');
        input.init();
    };

    return engine;
}(INPUT));
