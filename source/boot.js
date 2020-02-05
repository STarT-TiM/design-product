class BootState extends Phaser.Scene {
    preload() {
        this.load.image('loading_bar', 'assets/images/loading_bar.png');
    }
    create() {
        this.scene.add("studio", Studio, false);
        this.scene.start("studio");
    }
}