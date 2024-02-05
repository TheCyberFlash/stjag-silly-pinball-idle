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
    this.draw();
    this.update();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawBall();
  }

  drawBall() {
    this.ctx.beginPath();
    this.ctx.arc(this.ball.x, this.ball.y, this.ball.radius, 0, Math.PI * 2);
    this.ctx.fillStyle = '#0095DD';
    this.ctx.fill();
    this.ctx.closePath();
  }

    update() {
        this.ball.x += this.ball.dx;
        this.ball.y += this.ball.dy;
    
        if (this.ball.x + this.ball.dx > this.canvas.width - this.ball.radius || this.ball.x + this.ball.dx < this.ball.radius) {
        this.ball.dx = -this.ball.dx;
        }
    
        if (this.ball.y + this.ball.dy > this.canvas.height - this.ball.radius || this.ball.y + this.ball.dy < this.ball.radius) {
        this.ball.dy = -this.ball.dy;
        }
    
        this.draw();
        requestAnimationFrame(this.update.bind(this));
    }
}
