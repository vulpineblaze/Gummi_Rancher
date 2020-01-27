if(GR === undefined) { 
  var GR = {};
}

GR.Globals = {
	game: 0,

	gameWidth: 800,
	gameHeight: 600,

	deadlockTimeDelay: 1,

	randomNumber: function (min, max) {  
	    var min = Math.ceil(min); 
	    var max = Math.floor(max); 
	    return Math.floor(Math.random() * (max - min + 1)) + min; 
	}, 

	randomFloat: function (min, max) {
        return Math.random() * (max - min) + min;
	},

    randomSpawn: function(x, y){
        var spawn = {x:0,y:0};
        spawn.x = GR.Globals.randomNumber(x,GR.Globals.gameWidth*0.95);
        spawn.y = GR.Globals.randomNumber(y,GR.Globals.gameHeight*0.95);
        return spawn;
    }


};




GR.Globals.squarePxHalf = GR.Globals.squarePx/2;

GR.Globals.horizontalOffset = GR.Globals.squarePxHalf 
				+ (GR.Globals.gameWidth - (GR.Globals.squarePx * GR.Globals.squareWidth))/2;

// finds the number of px on each side of play area, sans alloted openspace at top
GR.Globals.verticalOffset = GR.Globals.squarePxHalf 
				+ ((GR.Globals.gameHeight - GR.Globals.verticalOpenSpace) 
				- (GR.Globals.squarePx * GR.Globals.squareHeight))/2;

GR.Globals.verticalOffsetTop = GR.Globals.verticalOpenSpace + GR.Globals.verticalOffset;

GR.Globals.vertOneThird = GR.Globals.gameHeight / 3;	
GR.Globals.horzCenter = GR.Globals.gameWidth / 2;	



