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
		this.pNum= pNum;
	};
	var Game = function(){
		console.log("Making Game!");
		this.deck =  [];
		this.p0 = new Player(0);
		this.p1 = new Player(1);
		var path = '';

	};

	var game = new Game();
	var card = new Card();


	console.log("Game made");


	//This line executes
	console.log("After first loop");


    for (suit = 0; suit <= 3; suit++) {
    	console.log(suit);
			for (rank = 1; rank <= 13; rank++) {
				card.suit = suit;
				card.rank = rank;
				path = 'Images/card_' + suit + '_'+ rank;
				card.img = path;
				switch(suit) {
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
				console.log("loggging card: ");
				console.log(card);
				console.log(game);
				console.log(game.deck);
				//assign new card to deck
				game.deck[game.deck.length] = card;

				//game.deck.append(card);

			}
    	}
	//Log newly populated game
	console.log(game);
	console.log(card);

	console.log("After loops");
	app.controller('gameWrap', function(){
		this.game = game;
	});
})();