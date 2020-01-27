if(GR === undefined) {
  var GR = {};
}

GR.Scenes = {};


GR.Scenes.Intro = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Intro ()
    {
        Phaser.Scene.call(this, { key: 'intro' });
    },

    init: function (data)
    {
        // console.log('init', data);

        this.imageID = data.id;
        this.imageFile = data.image;

        thisGame = this;
        GR.Globals.game = this;
        // GR.Globals.initKeys(this);
    },

    preload: function ()
    {
        this.load.image('black_center', '../assets/bg.png');

        
        // GR.Sounds.preload(this);


    },

    create: function ()
    {

        // GR.Sounds.create(this);

    	var black_center = this.add.sprite(0,0, 'black_center');
	    black_center.setDisplayOrigin(0);

        // GR.Messages.introText = this.add.text(160, 80, 
        //                             GR.Messages.introTextMsg , 
        //                             { fontFamily: 'Anton', fontSize: '48px', fill: '#fff' });
        // GR.Messages.introText.setStroke('#000', 5); 
        // GR.Messages.introText.setX( (GR.Globals.gameWidth - GR.Messages.introText.width)/2 ); 

        this.input.once('pointerdown', function () {
            // GR.Sounds.myPlay('Arabela');
            this.scene.start('intro2');
        }, this);
    },

    update: function () {
        // if(GR.Sounds.Arabela.isPlaying){
        //     console.log("intro audio loaded!");
        //     var deadlockTimer = this.time.delayedCall(GR.Globals.deadlockTimeDelay, 
        //                                         function(){this.scene.start('intro2')}, 
        //                                         [], this); 
        // }
    }

});



// GR.Scenes.Intro2 = new Phaser.Class({

//     Extends: Phaser.Scene,

//     initialize:

//     function Intro2 ()
//     {
//         Phaser.Scene.call(this, { key: 'intro2' });
//     },

//     init: function (data)
//     {
//         // console.log('init', data);

//         this.imageID = data.id;
//         this.imageFile = data.image;

//         thisGame = this;
//         GR.Globals.game = this;
//         // GR.Globals.initKeys(this);
//     },

//     preload: function ()
//     {
//         this.load.image('fireplace', 'img/assets/fireplace.png');
//     },

//     create: function ()
//     {


//         var fireplace = this.add.sprite(0,0, 'fireplace');
//         fireplace.setDisplayOrigin(0);

//         GR.Messages.introText2 = this.add.text(160, 80, 
//                                     GR.Messages.introTextMsg2 , 
//                                     { fontFamily: 'Anton', fontSize: '48px', fill: '#fff' });
//         GR.Messages.introText2.setStroke('#000', 5); 
//         GR.Messages.introText2.setX( (GR.Globals.gameWidth - GR.Messages.introText2.width)/2 ); 

//         this.input.once('pointerdown', function () {
//             GR.Sounds.myStop('Arabela');
//             GR.Sounds.myPlay('november');
//         }, this);

//     },

//     update: function () {
//         if(GR.Sounds.november.isPlaying){
//             console.log("intro2 audio loaded!");
//             var deadlockTimer = this.time.delayedCall(GR.Globals.deadlockTimeDelay, 
//                                                 function(){this.scene.start('play')}, 
//                                                 [], this); 
//         }
//     }

// });













// GR.Scenes.WinLose = new Phaser.Class({

//     Extends: Phaser.Scene,

//     initialize:

//     function WinLose ()
//     {
//         Phaser.Scene.call(this, { key: 'winlose' });
//     },

//     init: function (data)
//     {
//         this.inText = data.text;
//         this.inImg = data.img;
//     },

//     preload: function ()
//     {
// 	    // this.load.image('teal_border', 'img/backgrounds_teal_border.png');
// 	    this.load.image('show_image', '../assets/'+this.inImg+'.png');

//     },

//     create: function ()
//     {
//     	// var teal_border = this.add.image(0, 0, 'teal_border');
// 	    // teal_border.setDisplayOrigin(0);
//         // GR.Sounds.emptySound.play();


//     	var black_center = this.add.sprite(0,0, 'show_image').setInteractive();
// 	    black_center.setDisplayOrigin(0);

//         // console.log("seconds ",GR.Messages.savedTimeFormatted());
//         // GR.Messages.timeText = this.add.text(40, GR.Globals.vertOneThird*2.8, 
//         //                             GR.Messages.timeTextPrefix + GR.Messages.savedTimeFormatted() , 
//         //                             { fontFamily: 'Anton', fontSize: '36px', fill: '#fff' });
//         // GR.Messages.timeText.setStroke('#000', 5);        


//         var specificMessage = this.inText;
//         // var specificMessage = "you lost bruh";
// 		var winloseText = this.add.text(GR.Globals.horizontalOffset, 80, 
// 	    	GR.Messages.winloseTextMsg + "\n" + specificMessage, 
// 	    	{ align: 'center', 
// 	    		font: '48px Anton', 
// 	    		fill: '#fff', 
// 	    		wordWrap: {width: GR.Globals.gameWidth - (GR.Globals.horizontalOffset*2)} 
// 	    	});
//         winloseText.setStroke('#000', 5);	    
//         winloseText.setX( (GR.Globals.gameWidth - winloseText.width)/2 ); 

//         var restartText = this.add.text(60, GR.Globals.vertOneThird*2.5, 
//             GR.Messages.restartTextMsg, 
//             { align: 'center', font: '48px Anton', fill: '#fff' });
//         restartText.setStroke('#000', 5);
//         restartText.setX( (GR.Globals.gameWidth - restartText.width)/2 ); 

// 	    var fullClick = false;

//         this.input.once('pointerup', function () {

//             fullClick = true;
//             // console.log("pointerup , click!");
//             var deadlockTimer = this.time.delayedCall(GR.Globals.deadlockTimeDelay, 
//                                                     function(){this.scene.start('play')}, 
//                                                     [], this); 

//         }, this);

//         this.input.once('pointerdown', function () {

//             // console.log("pointerdown , click!");
//             if(fullClick){
//                 console.log("fullClick! , select");
//                 this.scene.start('play');
//             }

//         }, this);

//     }

// });






// GR.Scenes.Play = new Phaser.Class({

//     Extends: Phaser.Scene,

//     initialize:

//     function Play ()
//     {
//         // console.log("Play Scene Play()");
//         Phaser.Scene.call(this, 'play');
//     },


//     preload: function ()
//     {

//         // this.load.image('tileset1', 'img/assets/winter_outdoorsTileSheet.png');
//         // this.load.image('tileset2', 'img/assets/cabin.png');
//         // this.load.tilemapTiledJSON('forestcabin', 'json/forestcabin.json');
        
//         // this.load.image('star', 'img/sprites/wood.png');
//         // this.load.image('bomb', 'img/sprites/baddies.png');
//         // this.load.image('sword2', 'img/sprites/sword2.png');
//         // this.load.spritesheet('boy', 'img/sprites/boy.png', { frameWidth: 30, frameHeight: 52 });
//         // this.load.spritesheet('nothing', 'img/sprites/nothing.png', { frameWidth: 38, frameHeight: 44 });
//         // this.load.spritesheet('baddie', 'img/sprites/baddies.png', { frameWidth: 48, frameHeight: 48 });
//         // this.load.spritesheet('shadow', 'img/sprites/shadow.png', { frameWidth: 16, frameHeight: 6 });  
//         // this.load.spritesheet('void', 'img/sprites/void.png', { frameWidth: 9, frameHeight: 9 });

        

//     },

//     create: function ()
//     {
//         console.log("Play Scene create()");
//         thisGame = this;
//         GR.Globals.game = this;

//         GR.Globals.gameOver = false;
//         // GR.Globals.initKeys(this);

        

      
//         var map = GR.Maps.create(this);
//         var player = GR.Player.createPlayer();
//         var monsters = GR.Monsters.createMonsters();
//         var voids = GR.Player.voids;

//         // this.physics.world.setBounds(0, 0, 720, 720, true, true, true, true);
//         this.physics.world.setBounds(0, 0, 
//                         GR.Maps.map.widthInPixels, 
//                         GR.Maps.map.heightInPixels, 
//                         true, true, true, true);
// // /

//         // do once


//         // GR.Messages.healthBarFullRect = new Phaser.Geom.Rectangle(250, 200, 300, 40);
//         // GR.Messages.healthBarFullGraphics = this.add.graphics({ fillStyle: { color: 0x0000ff } });
//         // GR.Messages.healthBarFullGraphics.fillRectShape(GR.Messages.healthBarFullRect);
        
//         // GR.Messages.healthBarCurrentRect = new Phaser.Geom.Rectangle(250, 200, 280, 40);
//         // GR.Messages.healthBarCurrentGraphics = this.add.graphics({ fillStyle: { color: 0xFF0000 } });
//         // GR.Messages.healthBarCurrentGraphics.fillRectShape(GR.Messages.healthBarCurrentRect);
        
//         GR.Messages.healthBarFullRect = this.add.rectangle(200, 200, 
//                                                         GR.Messages.hpBarSize.width, 
//                                                         GR.Messages.hpBarSize.height, 
//                                                         0xff0000);
//         GR.Messages.healthBarCurrentRect = this.add.rectangle(200, 200, 
//                                                         GR.Messages.hpBarSize.width, 
//                                                         GR.Messages.hpBarSize.height, 
//                                                         0x0000ff);

//         GR.Messages.healthBarFullRect.setZ(2);
//         GR.Messages.healthBarCurrentRect.setZ(3);

//         GR.Globals.cursors = this.input.keyboard.createCursorKeys();
//         var cursors = GR.Globals.cursors;

//         GR.Globals.myKeys = this.input.keyboard.addKeys(
//             {
//                 W:Phaser.Input.Keyboard.KeyCodes.W,
//                 S:Phaser.Input.Keyboard.KeyCodes.S,
//                 A:Phaser.Input.Keyboard.KeyCodes.A,
//                 D:Phaser.Input.Keyboard.KeyCodes.D,
//                 SPACE:Phaser.Input.Keyboard.KeyCodes.SPACE
//             }
//         );

        
//         stars = this.physics.add.group({
//             key: 'star',
//             repeat: 12
//             // setXY: { x: 10, y: 5, stepX: 70 }
//         });

//         stars.children.iterate(function (child) {

//             var x = GR.Globals.randomNumber(10, GR.Maps.map.widthInPixels-10);
//             var y = GR.Globals.randomNumber(10,GR.Maps.map.heightInPixels-10);
//             child.setPosition(x,y);
//             child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
//             child.setName("star");

//         });

//         bombs = this.physics.add.group();

        
//         // GR.Messages.woodText = this.add.text(16, 16, 
//         //                             GR.Messages.woodTextPrefix
//         //                             + "0"
//         //                             +GR.Messages.woodTextSuffix, 
//         //                             { fontSize: '32px', fill: '#000' });

//         GR.Messages.woodText = this.add.text(16, 16, 
//                                     GR.Messages.woodTextPrefix
//                                     + "0"
//                                     +GR.Messages.woodTextSuffix,  
//                                     { fontFamily: 'Anton', fontSize: '48px', fill: '#fff' });
//         GR.Messages.woodText.setStroke('#000', 5); 

//         GR.Messages.nothingText = this.add.text(16, 64, 
//                                     GR.Messages.nothingTextPrefix
//                                     + "0"
//                                     +GR.Messages.nothingTextSuffix,  
//                                     { fontFamily: 'Anton', fontSize: '48px', fill: '#fff' });
//         GR.Messages.nothingText.setStroke('#000', 5); 

//         // NT.Messages.woodText.setX( (NT.Globals.gameWidth - NT.Messages.introText.width)/2 ); 

//         var layer1 = GR.Maps.layer1;

//         // this.physics.add.collider(player, layer1);
//         // this.physics.add.collider(stars, layer1);
//         // this.physics.add.collider(bombs, layer1);
//         // this.physics.add.collider(monsters, layer1);
        
//         this.physics.add.overlap(player, stars, this.collectStar, null, this);

//         this.physics.add.collider(player, bombs, this.hitBomb, null, this);

//         this.physics.add.collider(player, monsters, this.hitMonsters, null, this);
//         this.physics.add.collider(GR.Player.sword, monsters, this.hitSword, null, this);
        
//         this.physics.add.overlap(voids, monsters, this.hitVoid, null, this);
//         this.physics.add.overlap(voids, stars, this.hitVoid, null, this);


        



//     },

//     update: function ()
//     {

        

//         var player = GR.Player.updatePlayer();
//         GR.Monsters.updateMonsters();
        
//         var hpRatio =  GR.Messages.hpBarSize.width * (GR.Player.currentHP / GR.Player.totalHP);
//         GR.Messages.healthBarCurrentRect.setSize(hpRatio,20);

//         if(GR.Player.currentHP <= 0){
//             thisGame.scene.start('winlose', { id: 2, 
//                                             text:  GR.Messages.winloseTexts.zeroHP ,
//                                             img: "bg"   });
//         }

        

//         GR.Monsters.monsters.children.iterate(function (child) {
//             if(child.active){
//                 if(child.health <= 0){
//                     // GR.Monsters.activateChild();
//                     // GR.Monsters.activateChild();
//                     // child.destroy();
//                     GR.Monsters.killBaddie(child);
//                 }
//             }
//         });
//     },


//     collectStar: function (player, star){
//         star.disableBody(true, true);

        
//         GR.Player.score += 1;
//         // GR.Messages.scoreText.setText('Score: ' + GR.Player.score);


//         GR.Messages.woodText.setText(GR.Messages.woodTextPrefix
//                                     + GR.Player.score
//                                     +GR.Messages.woodTextSuffix);

        


//         if(GR.Player.score >= 9){
//             // Phaser.Scene.call(this, 'lose');
//             // thisGame.scene.start('winlose', { id: 2, 
//             //                                 text:  "you got all wood heh",
//             //                                 img: "bg"  });
//             GR.Player.hasSword = true;

//             GR.Messages.woodText.setText(GR.Messages.gotSwordText);

//         }




//         if (stars.countActive(true) === 0)
//         {
            
//             stars.children.iterate(function (child) {

//                 child.enableBody(true, child.x, 0, true, true);

//             });

//             var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

//             var bomb = bombs.create(x, 16, 'bomb');
//             bomb.setBounce(1);
//             bomb.setCollideWorldBounds(true);
//             bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
//             bomb.allowGravity = false;

//         }
//     },

//     hitBomb: function (player, bomb)
//     {
//         this.physics.pause();

//         player.setTint(0xff0000);

//         player.anims.play('down');

//         GR.Globals.gameOver = true;
//     },

//     hitMonsters: function (player, monster)
//     {
//         // this.physics.pause();

//         player.setTint(0xff0000);

//         // player.anims.play('boydown');

//         GR.Player.currentHP -= GR.Monsters.attackDamage;

//         // thisGame.scene.start('lose', { id: 2, text:  "you lost lol"  });
//     },

//     hitSword: function (sword, monster)
//     {
//         // this.physics.pause();

//         // player.setTint(0xff0000);

//         // player.anims.play('boydown');

//         monster.health -= GR.Player.attackDamage;

//         // thisGame.scene.start('lose', { id: 2, text:  "you lost lol"  });
//     },

//     hitVoid: function (b1, b2)
//     {
//         console.log(b1,b2);

//         if(b1.active && b2.active){
//             GR.Player.nothingTally +=1;

//             if(GR.Player.nothingTally >= GR.Player.nothingTallyMax){
//                 thisGame.scene.start('winlose', { id: 2, 
//                                             text:  GR.Messages.winloseTexts.nothingMaxed ,
//                                             img: "bg"   });

//             }

//             var nothingScale = GR.Player.nothingScaleMax * (GR.Player.nothingTally / GR.Player.nothingTallyMax)
//             GR.Player.nothing.setScale(nothingScale);

//             //kill victim
//             if(b1.name == "void"){
//                 var victim = b2;
//             }else{
//                 var victim = b1;
//             }
//             if(b1.name == "baddie"){
//                 GR.Monsters.killBaddie(b1);
//             }else if(b2.name == "baddie"){
//                 GR.Monsters.killBaddie(b2);
//             }else{
//                 victim.setActive(false).setVisible(false);
//                 victim.body.enable = false;
//             }
            

//             GR.Messages.nothingText.setText(GR.Messages.nothingTextPrefix
//                                         + GR.Player.nothingTally
//                                         +GR.Messages.nothingTextSuffix);
//         }
//         //nothing++
        

//     }
    

// });


GR.Scenes.Play = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Play ()
    {
        // console.log("Play Scene Play()");
        Phaser.Scene.call(this, 'play');
    },


    preload: function ()
    {

        // this.load.image('tileset1', 'img/assets/winter_outdoorsTileSheet.png');
        // this.load.image('tileset2', 'img/assets/cabin.png');
        // this.load.tilemapTiledJSON('forestcabin', 'json/forestcabin.json');
        
        // this.load.image('star', 'img/sprites/wood.png');
        // this.load.image('bomb', 'img/sprites/baddies.png');
        // this.load.image('sword2', 'img/sprites/sword2.png');
        // this.load.spritesheet('boy', 'img/sprites/boy.png', { frameWidth: 30, frameHeight: 52 });
        // this.load.spritesheet('nothing', 'img/sprites/nothing.png', { frameWidth: 38, frameHeight: 44 });
        // this.load.spritesheet('baddie', 'img/sprites/baddies.png', { frameWidth: 48, frameHeight: 48 });
        // this.load.spritesheet('shadow', 'img/sprites/shadow.png', { frameWidth: 16, frameHeight: 6 });  
        // this.load.spritesheet('void', 'img/sprites/void.png', { frameWidth: 9, frameHeight: 9 });

        

    },

    create: function ()
    {
        console.log("Play Scene create()");
        thisGame = this;
        GR.Globals.game = this;

        GR.Globals.gameOver = false;
        // GR.Globals.initKeys(this);

        


        GR.Messages.woodText = this.add.text(16, 16, 
                                    GR.Messages.woodTextPrefix
                                    + "0"
                                    +GR.Messages.woodTextSuffix,  
                                    { fontFamily: 'Anton', fontSize: '48px', fill: '#fff' });
        GR.Messages.woodText.setStroke('#000', 5); 


 

        

        
        this.physics.add.overlap(player, stars, this.collectStar, null, this);

        this.physics.add.collider(player, bombs, this.hitBomb, null, this);

        this.physics.add.collider(player, monsters, this.hitMonsters, null, this);
        this.physics.add.collider(GR.Player.sword, monsters, this.hitSword, null, this);
        
        this.physics.add.overlap(voids, monsters, this.hitVoid, null, this);
        this.physics.add.overlap(voids, stars, this.hitVoid, null, this);


        



    },

    update: function ()
    {

        

  
    },


    
    

});







