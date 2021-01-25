// This game shell was happily modified from Googler Seth Ladd's "Bad Aliens" game and his Google IO talk in 2011

class GameEngine {
    constructor() {
        this.entities = [];
        this.showOutlines = false;
        this.ctx = null;
        this.click = null;
        this.mouse = null;
        this.wheel = null;
        this.surfaceWidth = null;
        this.surfaceHeight = null;

        this.W = false;
        this.A = false;
        this.S = false;
        this.D = false;

        this.P = false;
        this.C = false;
        this.E = false;
        this.SPACE = false;
    };

    init(ctx) {
        this.ctx = ctx;
        this.surfaceWidth = this.ctx.canvas.width;
        this.surfaceHeight = this.ctx.canvas.height;
        this.startInput();
        this.timer = new Timer();
    };

    start() {
        var that = this;
        (function gameLoop() {
            that.loop();
            requestAnimFrame(gameLoop, that.ctx.canvas);
        })();
    };

    startInput() {
        var that = this;
        this.ctx.canvas.addEventListener("keydown", function (e) {
            switch (e.code) {
                case "ArrowLeft":
                case "KeyA":
                    that.A = true;
                    break;
                case "ArrowRight":
                case "KeyD":
                    that.D = true;
                    break;
                case "ArrowUp":
                case "KeyW":
                    that.W = true;
                    break;
                case "ArrowDown":
                case "KeyS":
                    that.S = true;
                    break;
                case "Comma":
                    that.C = true;
                    break;
                case "Period":
                    that.P = true;
                    break;
                case "Space":
                    that.SPACE = true;
                    break;
                case "KeyE":
                    that.E = true;
                    break;
            }
        }, false);

        this.ctx.canvas.addEventListener("keyup", function (e) {
            switch (e.code) {
                case "ArrowLeft":
                case "KeyA":
                    that.A = false;
                    break;
                case "ArrowRight":
                case "KeyD":
                    that.D = false;
                    break;
                case "ArrowUp":
                case "KeyW":
                    that.W = false;
                    break;
                case "ArrowDown":
                case "KeyS":
                    that.S = false;
                    break;
                case "Comma":
                    that.C = false;
                    break;
                case "Period":
                    that.P = false;
                    break;
                case "Space":
                    that.SPACE = false;
                    break;
                case "KeyE":
                    that.E = false;
                    break;
            }
        }, false);

        var getXandY = function (e) {
            var x = e.clientX - that.ctx.canvas.getBoundingClientRect().left;
            var y = e.clientY - that.ctx.canvas.getBoundingClientRect().top;

            return { x: x, y: y };
        }

        this.ctx.canvas.addEventListener("mousemove", function (e) {
            //console.log(getXandY(e));
            that.mouse = getXandY(e);
        }, false);

        this.ctx.canvas.addEventListener("click", function (e) {
            //console.log(getXandY(e));
            that.click = getXandY(e);
        }, false);

        this.ctx.canvas.addEventListener("wheel", function (e) {
            //console.log(getXandY(e));
            that.wheel = e;
            //       console.log(e.wheelDelta);
            e.preventDefault();
        }, false);

        this.ctx.canvas.addEventListener("contextmenu", function (e) {
            //console.log(getXandY(e));
            that.rightclick = getXandY(e);
            e.preventDefault();
        }, false);
    };

    addEntity(entity) {
        this.entities.push(entity);
    };

    draw() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.ctx.save();
        for (var i = 0; i < this.entities.length; i++) {
            this.entities[i].draw(this.ctx);
        }
    };

    update() {
        var entitiesCount = this.entities.length;

        for (var i = 0; i < entitiesCount; i++) {
            var entity = this.entities[i];

            if (!entity.removeFromWorld) {
                entity.update();
            }
        }

        for (var i = this.entities.length - 1; i >= 0; --i) {
            if (this.entities[i].removeFromWorld) {
                this.entities.splice(i, 1);
            }
        }
    };

    loop() {
        this.clockTick = this.timer.tick();
        this.update();
        this.draw();
    };
};