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
