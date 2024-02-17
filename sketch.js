let numFormas = 0;

function setup() {
  createCanvas(505, 799);
}

function draw() {
  background(220);
  
  // Dibuja una forma cada vez que se ha hecho clic en el mouse
  if (numFormas >= 1) {
    //borde
    strokeWeight(9);
    stroke(73,69,64);

    // Círculos 
    fill (228,185,33); // amarillo
    ellipse(204, 416, 243); 
    if (numFormas >= 2) {
      fill (255,0,0); // rojo
      ellipse(300, 149, 64);
      if (numFormas >= 3) {
        //triángulo
        fill (79,133,184); //azul
        triangle(78,314,215,136,359,244);
        if (numFormas >= 4) {
  
    //rectángulos
          fill (171,94,97);// bordó
          quad(171,92,189,69,267,129,249,151);
          if (numFormas >= 5) {
            fill('#466F48');
            quad(301,267,363,251,406,422,344,439);
            if (numFormas >= 6) {
              stroke('#211B16');
              fill('#1E3B6A');
              quad(175,674,341,450,444,526,279,750);
              if (numFormas >= 7) {
                fill('#923824');
                quad(140,632,167,596,204,623,177,659);
              }
            }
          }
        }
      }
    }
  }
}

function mouseClicked() {
  // Incrementa la cantidad de formas dibujadas al hacer clic en el mouse
  numFormas++;
}