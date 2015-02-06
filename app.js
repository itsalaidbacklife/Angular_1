(function() {

	var app = angular.module('cuttleGame', []);


	var Card = function() {
		this.suit = null;
		this.rank = null;
		this.img = '';
		this.alt = '';
	};

	var Player = function(pNum) {
		this.hand = [];
		this.field = [];
		this.pNum = pNum;
	};
	var Game = function() {
		this.deck = [];
		this.p0 = new Player(0);
		this.p1 = new Player(1);
		var path = '';

	};

	var game = new Game();


	for (suit = 0; suit <= 3; suit++) {
		for (rank = 1; rank <= 13; rank++) {
			var card = new Card();
			card.suit = suit;
			card.rank = rank;
			path = "Images/cards/card_" + suit + "_" + rank + ".png";
			card.img = path;
			switch (suit) {
				case 0:
					card.alt = rank + ' of clubs';
					break;
				case 1:
					card.alt = rank + ' of diamonds';
					break;
				case 2:
					card.alt = rank + ' of hearts';
					break;
				case 3:
					card.alt = rank + ' of spades';
					break;
			}
			//assign new card to deck
			game.deck.splice(game.deck.length, [], card);


		}
	}

	app.controller('gameWrapController', function() {
		this.game = game;
		this.source_test = "http://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Omega-exp-omega-labeled.svg/832px-Omega-exp-omega-labeled.svg.png";

		this.drawP0 = function() {
			console.log("Drawing P0");
			this.game.p0.hand[this.game.p0.hand.length] = this.game.deck.shift();
		}

		this.drawP1 = function() {
			this.game.p1.hand[this.game.p1.hand.length] = this.game.deck.shift();
		}
	});
})();