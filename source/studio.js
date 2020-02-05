class Studio extends Phaser.Scene {
    init() {
        this.listItem = [];
    }

    preload() {
        this.load.image('product', 'assets/products/jpg/800x800/AA2007_1_WHT.jpg');
    }
    create() {
        this.add.sprite(400,400, 'product').setOrigin(0.5);
    }

    loadItem(name, imageLink) {
        var that = this;
        this.load.once('complete', function () {
            that.showItem(name);
        }, this);

        this.load.image(name, imageLink);
        this.load.image('aaa', 'assets/templates/cat/field-day.png');

        this.load.start();
    }

    showItem(name) {

        let item = this.add.sprite(0, 0, name).setOrigin(0.5);
        item.diagonalDistant = Math.sqrt( Math.pow(item.width,2) + Math.pow(item.height,2)) / 2;

        let btnScale = this.add.sprite(item.width/2, -item.height/2, '').setOrigin(0.5).setInteractive();
        btnScale.type = 'btnScale';

        let btnDelete = this.add.sprite(-item.width/2, item.height/2, '').setOrigin(0.5).setInteractive();
        btnDelete.on('pointerup', function (pointer) {
            this.parentContainer.destroy();
        });


        var rect = new Phaser.Geom.Rectangle(200, 200, 50, 50);

        this.add.sprite(0,0, rect);


        var itemContainer = this.add.container(400,400, [item, btnScale, btnDelete]);
        itemContainer.setSize(item.width, item.height);
        itemContainer.setInteractive();

        this.input.setDraggable(itemContainer);
        this.input.setDraggable(btnScale);

        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX;
            gameObject.y = dragY;
            if(gameObject.type === 'btnScale') {
                let scaleFactor = Math.sqrt(Math.pow(dragX - item.x, 2) + Math.pow(dragY - item.y, 2))/ item.diagonalDistant;
                item.setScale(scaleFactor);
                console.log(item.width, item.height);
                btnDelete.x = -item.width/2 * scaleFactor;
                btnDelete.y = item.height/2 * scaleFactor;
            }
        });
    }
}