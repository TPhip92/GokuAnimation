class background {
    constructor(gameEngine, x, y) {
        Object.assign(this, {gameEngine, x, y});
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/dbz_sprites_backgrounds.png");
    //    this.animation = new Animator(this.spritesheet, 645, 265, 510, 225, 1, 1, 0, false, true);
    };


    draw(ctx) {
       
        ctx.drawImage(this.spritesheet, 645, 265, 510, 225,0,0,1024,790);
    }

    update() {

    }

}