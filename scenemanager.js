class SceneManager{
	constructor(game){
		this.game = game;
        this.game.camera = this;
        
		this.loadLevel();
	};

    clearEntities(){
        this.game.entities = [];
    };

    loadLevel(){
        // let ground = new Ground(this.game, 14 * PARAMS.BLOCKWIDTH, 69 * PARAMS.BLOCKWIDTH);
        // this.game.addEntity(ground);

        this.goku = new Goku(this.game, 0, 500);
        this.game.addEntity(this.goku);
    };

    update(){
        PARAMS.DEBUG = document.getElementById("debug").checked;
    };

    draw(ctx){
        if(PARAMS.DEBUG){

        };

    };


};