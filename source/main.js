window.onload = function () {
    let config = {
        type: Phaser.AUTO,
        scale: {
            mode: Phaser.Scale.FIT,
            parent: 'canvas-game',
            autoCenter: Phaser.Scale.CENTER_BOTH,
            width: 800,
            height: 800
        },
        scene: Studio
    };
    var game = new Phaser.Game(config);

    $('#test-btn').click(function () {
        game.scene.keys.default.loadItem('4th-of-july', 'assets/templates/cat/4th-of-july.png');
    })
};