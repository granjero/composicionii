function setup() {
    colorMode(HSB);
    rectMode(CENTER);
    createCanvas(530 * 1.2, 600 * 1.2);
    background(255);
    frameRate(1);
}

function draw() {
    cmp = new Composicion();
    background(cmp.colorDeFondo);
    noStroke();
    //cmp.cuadricula();
    cmp.cuadradoNaranja();
    cmp.trianguloMarron();
    cmp.circuloColorDeFondo();
    cmp.trianguloRojo();
    cmp.trianguloNegro();
    cmp.lineaRoja();
    cmp.circulosConcentricos();
    cmp.cuadradosInferiores();
    cmp.rectangulosIzquierda();
    cmp.circuloAmarillo();
}

class Composicion {
    //verticesTrianguloMarron = [];

    constructor() {
        this.cCanvas = [width / 2, height / 2];
        this.colorDeFondo = this.seleccionaColorDeFondo();
        this.verticesTrianguloMarron = this.seleccionaVerticesTrianguloMarron();
    }

    seleccionaColorDeFondo() {
        return [
            floor(random(25, 35)),
            floor(random(25, 35)),
            floor(random(70, 85)),
            1,
        ];
    }

    seleccionaVerticesTrianguloMarron() {
        let punto0 = [
            random(width * 0.6, width * 0.75),
            random(height * 0.15, height * 0.25),
        ];
        let punto1 = [
            random(width * 0.88, width * 0.9),
            random(height * 0.45, height * 0.55),
        ];
        let punto2 = [
            random(width * 0.15, width * 0.25),
            random(height * 0.8, height * 0.9),
        ];
        return [punto0, punto1, punto2];
    }

    cuadricula() {
        stroke(1);
        line(this.cCanvas[0], 0, this.cCanvas[0], height); // vertical xy xy
        line(0, this.cCanvas[1], width, this.cCanvas[1]); // horizontal
    }

    trianguloMarron() {
        fill(this.coloresMarrones(0.6));
        stroke(this.coloresMarrones(0.6));
        strokeWeight(5);

        triangle(
            this.verticesTrianguloMarron[0][0],
            this.verticesTrianguloMarron[0][1],
            this.verticesTrianguloMarron[1][0],
            this.verticesTrianguloMarron[1][1],
            this.verticesTrianguloMarron[2][0],
            this.verticesTrianguloMarron[2][1]
        );
    }

    trianguloRojo() {
        let vertice = this.verticesTrianguloMarron[0];
        let punto0 = [
            vertice[0],
            vertice[1] + random(height * 0.045, height * 0.09),
        ];
        let punto1 = [
            vertice[0] - random(width * 0.05, width * 0.1),
            vertice[1] - random(height * 0.025, height * 0.05),
        ];
        let punto2 = [
            vertice[0] + random(width * 0.05, width * 0.1),
            vertice[1] - random(height * 0.025, height * 0.1),
        ];

        fill(this.coloresRojos(0.8));
        stroke(this.coloresRojos(0.5));
        strokeWeight(5);

        triangle(
            punto0[0],
            punto0[1],
            punto1[0],
            punto1[1],
            punto2[0],
            punto2[1]
        );
    }

    trianguloNegro() {
        //let vertice = this.verticesTrianguloMarron[1];
        let punto0 = [
            this.verticesTrianguloMarron[1][0],
            this.verticesTrianguloMarron[1][1] +
                random(height * 0.25, height * 0.35),
        ];
        let punto1 = [
            punto0[0] - random(width * 0.05, width * 0.075),
            punto0[1] - random(height * 0.05, height * 0.075),
        ];
        let punto2 = [
            this.verticesTrianguloMarron[2][0],
            this.verticesTrianguloMarron[1][1],
        ];

        fill(0, 0, 0, 1);
        noStroke();
        triangle(
            punto0[0],
            punto0[1],
            punto1[0],
            punto1[1],
            punto2[0],
            punto2[1]
        );
    }

    lineaRoja() {
        stroke(this.coloresRojos());
        strokeWeight(10);
        strokeCap(SQUARE);
        line(
            random(width * 0.85, width * 0.9),
            random(height * 0.1, height * 0.15),
            random(width * 0.5, width * 0.6),
            random(height * 0.85, height * 0.9)
        );
    }

    circulosConcentricos() {
        let centro = [
            random(width * 0.25, width * 0.35),
            random(height * 0.15, height * 0.25),
        ];

        let diam = random(width * 0.2, width * 0.3);
        let vector = createVector();

        // circulo exterior negro
        stroke(1, 0, 0, 0.8);
        fill(this.colorDeFondo);
        circle(centro[0], centro[1], diam);
        // segundo circulo
        noFill();
        diam *= 0.85;
        strokeWeight(3);
        circle(centro[0], centro[1], diam);
        // tercer circulo verde
        diam *= 0.9;
        stroke(this.coloresVerdes(0.5));
        strokeWeight(10);
        circle(centro[0], centro[1], diam);
        strokeWeight(2);
        for (let i = 0; i <= 4000; i++) {
            stroke(this.coloresVerdesOscuro(0.6));
            vector.set(centro[0], centro[1]);
            vector.setMag(random(diam * 0.47, diam * 0.54));
            vector.setHeading(random(TWO_PI));
            point(centro[0] + vector.x, centro[1] + vector.y);
        }
        // cuarto circulo
        stroke(1, 0, 0, 0.8);
        diam *= 0.9;
        strokeWeight(3);
        circle(centro[0], centro[1], diam);
        // quinto circulo azul
        diam *= 0.6;
        noFill();
        stroke(this.coloresAzules(1));
        strokeWeight(1);
        circle(centro[0], centro[1], diam);
        // sexto circulo azul
        diam *= 0.85;
        stroke(this.coloresAzules(1));
        strokeWeight(3);
        circle(centro[0], centro[1], diam);
        // centro de puntos verdes
        for (let i = 0; i <= 900; i++) {
            stroke(this.coloresVerdesOscuro(0.5));
            vector.set(centro[0], centro[1]);
            vector.setMag(random(diam / 2.5));
            vector.setHeading(random(TWO_PI));
            point(centro[0] + vector.x, centro[1] + vector.y);
        }
    }

    circuloColorDeFondo() {
        let centro = this.verticesTrianguloMarron[0];
        strokeWeight(3);
        stroke(0, 0, 0, 0.25);
        fill(this.colorDeFondo);
        circle(
            centro[0],
            centro[1] + random(height * 0.15, height * 0.2),
            random(width * 0.1, width * 0.15)
        );
    }
     circuloAmarillo() {
         fill(this.coloresAmarillos(0.5));
         let puntoCentral = [(this.verticesTrianguloMarron[0][0] + this.verticesTrianguloMarron[1][0]) /2,
                             (this.verticesTrianguloMarron[0][1] + this.verticesTrianguloMarron[1][1]) /2,];
         puntoCentral = [(this.verticesTrianguloMarron[2][0] + puntoCentral[0]) / 2,
                          (this.verticesTrianguloMarron[2][1] + puntoCentral[1]) / 2 ];
         puntoCentral = [(this.verticesTrianguloMarron[2][0] + puntoCentral[0]) / 2,
                          (this.verticesTrianguloMarron[2][1] + puntoCentral[1]) / 2 ];
         circle(puntoCentral[0], puntoCentral[1], 40); 
     }

    cuadradoNaranja() {
        let vertice = [
            this.verticesTrianguloMarron[0][0] -
                random(width * 0.1, width * 0.15),
            this.verticesTrianguloMarron[0][1] +
                random(height * 0.15, height * 0.2),
        ];
        let lado = random(width * 0.1, width * 0.15);
        //fill(this.coloresNaranjas(0.8));
        noFill();
        stroke(this.coloresNaranjas());
        strokeWeight(5);
        square(vertice[0], vertice[1], lado);
        for (let i = 0; i <= 5000; i++) {
            stroke(this.coloresNaranjas(0.5));
            point(
                vertice[0] + random(-lado / 2, lado / 2),
                vertice[1] + random(-lado / 2, lado / 2)
            );
        }
    }

    cuadradosInferiores() {
        let centro = [
            random(width * 0.35, width * 0.45),
            random(height * 0.8, height * 0.9),
        ];
        let lado = random(width * 0.075, width * 0.1);
        stroke(this.coloresAzules(0.5));
        square(centro[0], centro[1], lado);
        strokeWeight(5);
        for (let i = 0; i <= 3000; i++) {
            stroke(this.coloresAzules(0.07));
            point(
                centro[0] + random(-lado / 2, lado / 2),
                centro[1] + random(-lado / 2, lado / 2)
            );
        }

        centro[0] += random(width * 0.1, width * 0.2);
        centro[1] += random(height * 0.085, height * 0.097);
        lado = random(width * 0.01, width * 0.02);
        stroke(0, 0, 0, 0.5);
        square(centro[0], centro[1], lado);
        strokeWeight(1);
        for (let i = 0; i <= 500; i++) {
            stroke(0, 0, 0, 0.5);
            point(
                centro[0] + random(-lado / 2, lado / 2),
                centro[1] + random(-lado / 2, lado / 2)
            );
        }

        centro[0] += random(width * 0.1, width * 0.15);
        centro[1] -= random(height * 0.085, height * 0.097);
        lado = random(width * 0.03, width * 0.04);
        stroke(0, 0, 0, 0.5);
        square(centro[0], centro[1], lado);
        strokeWeight(2);
        for (let i = 0; i <= 1000; i++) {
            stroke(0, 0, 0, 0.15);
            point(
                centro[0] + random(-lado / 2, lado / 2),
                centro[1] + random(-lado / 2, lado / 2)
            );
        }
    }

    rectangulosIzquierda() {
        let centro =[];

        centro[0] = random(width * 0.05, width * 0.15);
        centro[1] = this.verticesTrianguloMarron[1][1];
        centro[1] -= random(height * 0.15);
        let lado = random(width * 0.02, width * 0.025);
        strokeWeight(3);
        for (let i =0; i <=3; i++) {
            centro[0] += lado;
            square(centro[0], centro[1], lado);
            for (let j = 0; j <= 600; j++) {
                stroke(0, 0, 0, 0.075);
                point(
                    centro[0] + random(-lado / 2, lado / 2),
                    centro[1] + random(-lado / 2, lado / 2)
                );
            }
        }


        //centro[0] += random(width * 0.0001, width * 0.0005);
        centro[1] += random(height * 0.01, height * 0.15);
        lado = random(width * 0.01, width * 0.02);
        for (let i =0; i <=3; i++) {
            centro[0] += lado;
            square(centro[0], centro[1], lado);
            for (let j = 0; j <= 250; j++) {
                stroke(0, 0, 0, 0.075);
                point(
                    centro[0] + random(-lado / 2, lado / 2),
                    centro[1] + random(-lado / 2, lado / 2)
                );
            }
        }

    }

    coloresRojos(trans) {
        return [
            floor(random(350, 360)),
            floor(random(70, 80)),
            floor(random(70, 80)),
            trans,
        ];
    }

    coloresMarrones(trans) {
        return [
            floor(random(9, 20)),
            floor(random(35, 45)),
            floor(random(35, 45)),
            trans,
        ];
    }

    coloresNaranjas(trans) {
        return [35, floor(random(85, 100)), floor(random(85, 100)), trans];
    }

    coloresAmarillos(trans) {
        return [50, floor(random(85, 100)), floor(random(85, 100)), trans];
    }

    coloresAzules(trans) {
        return [242, floor(random(80, 100)), floor(random(40, 60)), trans];
    }

    coloresVerdes(trans) {
        return [82, floor(random(20, 35)), floor(random(60, 80)), trans];
    }
    coloresVerdesOscuro(trans) {
        return [82, floor(random(50, 75)), floor(random(20, 50)), trans];
    }
}
