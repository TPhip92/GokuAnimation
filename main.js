var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./sprites/Goku_SpriteSheet.png");
ASSET_MANAGER.queueDownload("./sprites/Goku_SpriteSheet.png");
ASSET_MANAGER.queueDownload("./sprites/Goku_SpriteSheetReverse.png");
ASSET_MANAGER.queueDownload("./sprites/Goku_SpriteSheetReverse_trans.png");
ASSET_MANAGER.queueDownload("./sprites/dbz_sprites_backgrounds.png");




ASSET_MANAGER.downloadAll(function () {
	var canvas = document.getElementById('gameWorld');
	var ctx = canvas.getContext('2d');

	gameEngine.init(ctx);
	gameEngine.addEntity(new SceneManager(gameEngine));
	gameEngine.start();
});
