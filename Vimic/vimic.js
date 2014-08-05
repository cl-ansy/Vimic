var CONFIG = {
	gameEl: 'vimic-game',
	player: '@',
	dirt: '.',
	wall: '#'
};

(function() {
	var vimic = {};

	vimic.Maps = {
		demoMap: [
	        '............',
	        '............',
	        '............',
	        '............',
	        '............'
	    ]
	};

	vimic.Renderer = {
		init: function() {
			this.el = document.getElementById(CONFIG.gameEl);
			this.canvas = document.createElement("canvas");
			this.el.innerHTML = '';
			this.el.appendChild(this.canvas);

			this.render();

			console.log(this);
			console.log(this.el);
			console.log(vimic.Maps.demoMap);
		},

		render: function() {
			console.log('rendering');
		},

		createTile: function(char, r, g, b) {
			this.char = char || '.';
			this.r = r || 0;
			this.g = g || 0;
			this.b = b || 0;

			return {
				getChar: function() {
					return this.char;
				},
				setChar: function(char) {
					this.char = char;
				},
				setColor: function(r, g, b) {
					this.r = r;
					this.g = g;
					this.b = b;
				}
			};
		}
	};

	vimic.Engine = {
		init: function() {
			this.attachEvents();
		},

		attachEvents: function() {
            document.onkeydown = function(e) {
                console.log(e);
                switch(e.keyCode) {
                    case 'enterCode':
                        break;
                }
            };
		}
	};

	vimic.Engine.init();
	vimic.Renderer.init();

}());
