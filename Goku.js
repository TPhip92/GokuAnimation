class Goku{


    constructor(game, x, y){
        Object.assign(this, {game, x, y});
        this.game.goku = this;

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/Goku_SpriteSheet.png");
        this.spritesheetreverse = ASSET_MANAGER.getAsset("./sprites/Goku_SpriteSheetReverse");

        // this.spritesheet = ASSET_MANAGER.getAsset("./sprites/Goku_SpriteSheet_trans.png");
        // this.spritesheetreverse = ASSET_MANAGER.getAsset("./sprites/Goku_SpriteSheetReverse_trans");
      
      

        this.STATE = {
            WALK: 0,
            IDLE: 1,
            PUNCH: 2,
            KICK: 3,
            DUCK:  4,
            JUMP:  5,
            POWER: 6,
            BLAST: 7
        };
    
        this.FACING = {
            RIGHT:  0,
            LEFT: 1
        };
        
        this.facing = this.FACING.RIGHT;
        this.state = this.STATE.IDLE;
       
        this.animations = [];
  
        this.loadAnimations();
        
    };



    loadAnimations(){

        for(var i = 0; i < 8; i++){
            this.animations.push([]);
            for(var j = 0; j < 2; j++){
                this.animations[i].push([]);
            }
        }

        //****** IDLE LEFT & RIGHT *********
        this.animations[this.STATE.IDLE][this.FACING.RIGHT]
            = new Animator(this.spritesheet, 695,150, 50, 65,2, 0.5, 20,false, true);
        this.animations[this.STATE.IDLE][this.FACING.LEFT]
            = new Animator(this.spritesheetreverse, 270,150, 50, 65 ,2, 0.5, 20, true, true);
    
        //******* WALK LEFT & RIGHT *********
        this.animations[this.STATE.WALK][this.FACING.RIGHT]
            = new Animator(this.spritesheet, 60,320, this.width,this.height ,6,0.2,10,false, true);
        this.animations[this.STATE.WALK][this.FACING.LEFT]
            = new Animator(this.spritesheetreverse, 670,320, this.width,this.height ,6,0.2,10,true, true);
    
         //******* Punch Right & LEFT ********
         this.animations[this.STATE.PUNCH][this.FACING.RIGHT] 
             = new Animator(this.spritesheet, 60,555, this.width,this.height ,3,0.2,20,false, true);
         this.animations[this.STATE.PUNCH][this.FACING.LEFT]
             = new Animator(this.spritesheetreverse, 875,555, this.width,this.height ,3,0.2,20,true, true);
    
         //******* Kick Right & Left *******
         this.animations[this.STATE.KICK][this.FACING.RIGHT]
             = new Animator(this.spritesheet, 60,645, this.width,this.height ,4,0.08,10,false, true);
         this.animations[this.STATE.KICK][this.FACING.LEFT]
             = new Animator(this.spritesheetreverse, 835,645, this.width,this.height ,4,0.08,10,true, true);
    
         //****** Duck Left & Right ******
         this.animations[this.STATE.DUCK][this.FACING.RIGHT]
             = new Animator(this.spritesheet, 60,245, this.width,this.height ,3,0.15,20,false, true);
         this.animations[this.STATE.DUCK][this.FACING.LEFT]
             = new Animator(this.spritesheetreverse, 900,245, this.width,this.height ,3,0.15,20,true, true);
    
         //****** Jump Right & Left ******
         this.animations[this.STATE.JUMP][this.FACING.RIGHT]
             = new Animator(this.spritesheet, 60,405, this.width,this.height ,6,0.15,10,false, true);
         this.animations[this.STATE.JUMP][this.FACING.LEFT]
             = new Animator(this.spritesheetreverse, 765,405, this.width,this.height ,6,0.15,10,true, true);

             //****** Blast Right & Left ******
         this.animations[this.STATE.BLAST][this.FACING.RIGHT]
             = new Animator(this.spritesheet, 60, 820, this.width,this.height ,4, 0.15,10,false, true);
         this.animations[this.STATE.BLAST][this.FACING.LEFT]
             = new Animator(this.spritesheetreverse, 770,820, this.width,this.height ,4, 0.15,10,true, true);

             //****** Power-Up Right & Left ******
         this.animations[this.STATE.POWER][this.FACING.RIGHT]
             = new Animator(this.spritesheet, 60,895, this.width,this.height ,4,0.15,10,false, true);
         this.animations[this.STATE.POWER][this.FACING.LEFT]
             = new Animator(this.spritesheetreverse, 635,895, this.width,this.height ,4,0.15,10,true, true);
             
       
    };


    update(){

        let action = false;
        
        //Jump
        if(this.game.W){
            this.state = this.STATE.JUMP;
            action = true;
        } 
        //Duck
        if (this.game.S){
            this.state = this.STATE.DUCK;
            action = true;
        }
        //Walk 
        if(this.game.D){
            this.facing = this.FACING.RIGHT;
            this.state = this.STATE.WALK;
            this.x += 5;
            action = true;
        } else if(this.game.A){
            this.facing = this.FACING.LEFT;
            this.state = this.STATE.WALK;
            this.x -= 5;
            action = true;
        }
        //Kick
        if(this.game.P && (this.facing === this.FACING.RIGHT)){
            this.facing = this.FACING.RIGHT;
            this.state = this.STATE.KICK;
            this.y -= 3;
            this.y += 3;
            action = true;
        } else if (this.game.P && (this.facing === this.FACING.LEFT)){
            this.facing = this.FACING.LEFT;
            this.state = this.STATE.KICK;
            this.y -= 3;
            this.y += 3;
            action = true;
        }
        //Punch
        if(this.game.C && this.facing === this.FACING.RIGHT){
            this.facing = this.FACING.RIGHT;
            this.state = this.STATE.PUNCH;
            action = true;
        } else if(this.game.C && this.facing === this.FACING.LEFT){
            this.facing = this.FACING.LEFT;
            this.state = this.STATE.PUNCH;
            action = true;
        }
        //Blast
        if(this.game.SPACE && this.facing === this.FACING.RIGHT){
            this.facing = this.FACING.RIGHT;
            this.state = this.STATE.BLAST;
            action = true;
        } else if(this.game.SPACE && this.facing === this.FACING.LEFT){
            this.facing = this.FACING.LEFT;
            this.state = this.STATE.BLAST;
            action = true;
        }
        //Power
        if(this.game.E && this.facing === this.FACING.RIGHT){
            this.facing = this.FACING.RIGHT;
            this.state = this.STATE.POWER;
            action = true;
        } else if(this.game.E && this.facing === this.FACING.LEFT){
            this.facing = this.FACING.LEFT;
            this.state = this.STATE.POWER;
            action = true;
        }
        //If character is not performing an action, he will be idle.
        if(!action? this.state = this.STATE.IDLE: action =false);

    };


    draw(ctx){

        if(PARAMS.DEBUG){
            ctx.strokeStyle = "Red";
            ctx.strokeRect(this.x, this.y, this.width*2, this.height*2);
        };
        if(this.state === this.STATE.JUMP){
            this.animations[this.state][this.facing].drawFrame(this.game.clockTick,ctx, this.x, this.y-8, 2);
        } else if(this.state === this.STATE.FLIP){
            this.animations[this.state][this.facing].drawFrame(this.game.clockTick,ctx, this.x, this.y-18, 2);
        } else {
            this.animations[this.state][this.facing].drawFrame(this.game.clockTick,ctx, this.x, this.y, 2);
        }
     };
};