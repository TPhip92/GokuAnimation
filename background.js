class background {
    constructor(gameEngine, x, y) {
        Object.assign(this, {gameEngine, x, y});
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/dbz_sprites_backgrounds.png");
        this.animation = new Animator(this.spritesheet, 645, 265, 1155, 490, 1, 0.15, 0, false, false);
    };


    draw(ctx) {
       
        this.animation.drawFrame(this.gameEngine.clockTick, ctx, this.x, this.y, 1);
    }

    update() {

    }

}