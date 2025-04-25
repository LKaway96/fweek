let points = [[-3, 5], [3, 7], [1, 5],[2,4],[4,3],[5,2],[6,2],[8,4],[8,-1],[6,0],[0,-3],[2,-6],[-2,-3],[-4,-2],[-5,-1],[-6,1],[-6,2]];
let shapes = [];

function setup() {
  // 一個充滿視窗的畫布
  createCanvas(windowWidth, windowHeight);
  // 設定畫布的背景為灰色
  background('#cad2c5');
  
  // 初始化 10 個圖形物件
  for (let i = 0; i < 10; i++) {
    shapes.push(new MovingShape(points));
  }
}

function draw() {
  // 清除畫布
  background('#cad2c5');
  
  // 更新並繪製所有圖形
  for (let shape of shapes) {
    shape.update();
    shape.display();
  }
}

class MovingShape {
  constructor(points) {
    this.points = points;
    this.x = random(width);
    this.y = random(height);
    this.vx = random(-2, 2);
    this.vy = random(-2, 2);
    this.color = color(random(255), random(255), random(255)); // 隨機顏色
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    // 碰到邊緣反彈
    if (this.x < 0 || this.x > width) {
      this.vx *= -1;
    }
    if (this.y < 0 || this.y > height) {
      this.vy *= -1;
    }
  }

  display() {
    fill(this.color); // 使用隨機顏色填滿
    stroke(0); // 黑色框線
    strokeWeight(2);
    beginShape();
    for (let i = 0; i < this.points.length; i++) {
      let x = this.points[i][0] * 20 + this.x; // 調整比例和位置
      let y = this.points[i][1] * 20 + this.y; // 調整比例和位置
      vertex(x, y);
    }
    endShape(CLOSE);
  }
}