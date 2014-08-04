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
