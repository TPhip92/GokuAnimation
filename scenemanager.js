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

        this.bground = new background(this.game, 0, 0);
        this.game.addEntity(this.bkground);
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