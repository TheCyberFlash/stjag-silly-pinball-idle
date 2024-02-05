class Game {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.ball = {
        x: this.canvas.width / 2,
        y: this.canvas.height - 30,
        radius: 10,
        dx: 2,
        dy: -2,
    };
  }

  start() {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
