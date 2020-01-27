
function main(){
    
	// location.reload(true);

	var config = {
	    type: Phaser.WEBGL,
// 	    width: 600,
// 	    height: 850,
		scale: {
            mode: Phaser.Scale.FIT,
            parent: 'clicker',
            autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
            width: GR.Globals.gameWidth,
            height: GR.Globals.gameHeight
        },
	    physics: {
	        default: 'arcade',
	        arcade: {
	            debug: false
	        }
	    },
	    audio: {
	        disableWebAudio: true,
	        noAudio: false
	    },
	    scene: [GR.Scenes.Intro, 
	    	// GR.Scenes.Intro2, 
	    	// GR.Scenes.WinLose,
	    	GR.Scenes.Play]
	};

	var game = new Phaser.Game(config);

}

