var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./sprites/GokuSpriteSheet.png");
ASSET_MANAGER.queueDownload("./sprites/GokuSpriteSheetReverse.png");
ASSET_MANAGER.queueDownload("./sprites/dbz_sprites_backgrounds.png");




ASSET_MANAGER.downloadAll(function () {
	var canvas = document.getElementById('gameWorld');
	var ctx = canvas.getContext('2d');

	gameEngine.init(ctx);
	gameEngine.addEntity(new SceneManager(gameEngine));
	gameEngine.start();
});
