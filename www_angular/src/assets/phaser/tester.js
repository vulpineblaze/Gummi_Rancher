function tester (gummi, updateGummi){


    var config = {
        type: Phaser.WEBGL,
        scale: {
            mode: Phaser.Scale.FIT,
            parent: 'tester',
            autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
            width: 200,
            height: 200
        },
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    };

    var game = new Phaser.Game(config);
    // game.gummi = gummi;

    console.log("deep gummi", gummi, updateGummi);

    var clickCount = 0;

    function preload ()
    {
        this.load.image('gummiSprite', '../assets/'
                                    +gummi.GummiPrimary
                                    +'_'
                                    +gummi.GummiSecondary
                                    +'.png');
    }

    function create ()
    {
        // var slay = document.getElementById("tester");
        // console.log(slay);

        // console.log("test", document.getElementById("lonelyaf"));

        // console.log("test2", document.getElementsByClassName("lonelyaf"));

        console.log("gummi", gummi);

        // let lonelyaf = document.getElementsByClassName("lonelyaf");
        // for (let laf of lonelyaf) {
        //     console.log( "laf", laf );
        // }
        // var injected =[];
        // if(lonelyaf && lonelyaf.length){
        //     injected = lonelyaf[0].innerHTML;
        // }
        // console.log("injected",injected,"|", lonelyaf, lonelyaf.length, lonelyaf[0]);

        fullRect = new Phaser.Geom.Rectangle(0, 0, 200, 200);
        fullGraphics = this.add.graphics({ fillStyle: { color: 0xffffff } });
        fullGraphics.fillRectShape(fullRect);

        woodText = this.add.text(16, 16, 
                                // "{{gummi.GummiPrimary}}", 
                                gummi.GummiName, 
                                { fontSize: '24px', fill: '#eee' });
        woodText.setStroke('#111', 2); 


        clickCountText = this.add.text(160, 160, 
                                clickCount, 
                                { fontSize: '24px', fill: '#eee' });
        clickCountText.setStroke('#111', 2); 

        var sprite = this.add.sprite(100, 100, 'gummiSprite').setInteractive();

        sprite.on('pointerdown', function (pointer) {

            this.setTint(0xff0000);
            clickCount += 1;
            clickCountText.setText(clickCount);

        });

        sprite.on('pointerout', function (pointer) {

            this.clearTint();

        });

        sprite.on('pointerup', function (pointer) {

            this.clearTint();

        });
    }


    function update ()
    {
        if(clickCount > 10){
            console.log("clickCount", clickCount);
            clickCount = 0;
            // if(!gummi.GummiName){
            //     gummi.GummiName = "tester";
            // }
            updateGummi.ps.updateGummi(gummi.GummiName, gummi._id);
        }
    }



}
