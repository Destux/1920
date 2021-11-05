let points = [];
let bgcanvas;

class point {
  constructor() {
    this.angle = random(0, TWO_PI);
    this.radius = random(100, dist(0, 0, width, height));
    this.arcLength = random(0, 1);
    this.lengthrn = 0.1;
    this.width = random(0, 3);
    this.movementSpeed = random(0.005, 0.015);
  }
  show() {
    strokeWeight(this.width);
    arc(
      width / 2,
      height / 2,
      this.radius,
      this.radius,
      this.angle,
      this.angle + this.lengthrn
    );
  }
  increase() {
    if (
      mouseIsPressed &&
      (mouseX > 0.9 * windowWidth || mouseX < 0.1 * windowWidth)
    ) {
      if (this.lengthrn >= this.arcLength) {
        this.lengthrn = this.arcLength;
        this.angle += this.movementSpeed;
      } else {
        this.lengthrn += 0.001;
      }
    }
  }
}

function setup() {
  bgcanvas = createCanvas(windowWidth-20, windowHeight);
  bgcanvas.position(0, 0);
  bgcanvas.style('z-index','-1');
  // canvas.style('position','absolute');
  // canvas.style('overflow','scroll');
  bgcanvas.style('repeat','no-repeat');
  bgcanvas.style('attachment','fixed');
  // document.body.style.background = "url(" + bgcanvas.toDataURL() + ")";
  translate(width / 2, height / 2);

  for (let i = 0; i < 255; i++) {
    points.push(new point());
  }
  stroke("#ed225d");
  noFill();
}

function draw() {
  background("#1c1c1c");
  for (let i = 0; i < points.length; i++) {
    points[i].show();
    points[i].increase();
  }
}
