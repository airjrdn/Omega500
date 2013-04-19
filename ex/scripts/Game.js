(function (Ω) {

	"use strict";

	var TestGame = Ω.Game.extend({

		canvas: "#board",

		init: function () {

			this._super();

			Ω.input.bind(Ω.input.KEYS.space, "fire");
			Ω.input.bind(Ω.input.KEYS.escape, "escape");
			Ω.input.bind(Ω.input.KEYS.left, "left");
			Ω.input.bind(Ω.input.KEYS.right, "right");

			this.setScreen(new TitleScreen());

		}

	});

	window.TestGame = TestGame;

}(Ω));