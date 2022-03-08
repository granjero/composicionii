function setup() {
    colorMode(HSB);
    createCanvas(536, 600);
    background(255);
    frameRate(1);
}

function draw() {
    cmp = new Composicion();
    background(cmp.colorDeFondo);
    noStroke();
    //cmp.cuadricula();
    cmp.trianguloMarron();
    cmp.trianguloRojo();
    cmp.circulosConcentricos();
    cmp.circuloColorDeFondo();
}

class Composicion {
    verticesTrianguloMarron = [];

    constructor() {
        this.cCanvas = [width / 2, height / 2];
        this.colorDeFondo = this.seleccionaColorDeFondo();
    }

    seleccionaColorDeFondo() {
        return [
            floor(random(25, 35)),
            floor(random(25, 35)),
            floor(random(70, 85)),
            1,
        ];
    }

    cuadricula() {
        stroke(1);
        line(this.cCanvas[0], 0, this.cCanvas[0], height); // vertical xy xy
        line(0, this.cCanvas[1], width, this.cCanvas[1]); // horizontal
    }

    trianguloMarron() {
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
        this.verticesTrianguloGrande = [punto0, punto1, punto2];

        fill(this.coloresTrianguloMarron());
        stroke(this.coloresTrianguloMarron());
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

    coloresTrianguloMarron() {
        return [
            floor(random(9, 20)),
            floor(random(35, 45)),
            floor(random(35, 45)),
            0.5,
        ];
    }

    trianguloRojo() {
        let vertice = this.verticesTrianguloGrande[0];
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

        fill(this.coloresTrianguloRojo());
        stroke(this.coloresTrianguloRojo());
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

    coloresTrianguloRojo() {
        return [
            floor(random(350, 360)),
            floor(random(70, 80)),
            floor(random(70, 80)),
            0.7,
        ];
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
        stroke(this.coloresVerdes());
        strokeWeight(10);
        circle(centro[0], centro[1], diam);
        strokeWeight(2);
        for (let i = 0; i <= 4000; i++) {
            stroke(this.coloresVerdesOscuro());
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
        stroke(this.coloresAzules());
        strokeWeight(1);
        circle(centro[0], centro[1], diam);
        // sexto circulo azul
        diam *= 0.85;
        stroke(this.coloresAzules());
        strokeWeight(3);
        circle(centro[0], centro[1], diam);
        // centro de puntos verdes
        for (let i = 0; i <= 900; i++) {
            stroke(this.coloresVerdesOscuro());
            vector.set(centro[0], centro[1]);
            vector.setMag(random(diam / 2.5));
            vector.setHeading(random(TWO_PI));
            point(centro[0] + vector.x, centro[1] + vector.y);
        }
    }

    circuloColorDeFondo() {
        let centro = this.verticesTrianguloGrande[0];
        strokeWeight(3);
        stroke(0, 0, 0, 0.25);
        fill(this.colorDeFondo);
        circle(
            centro[0],
            centro[1] + random(height * 0.15, height * 0.2),
            random(60, 70)
        );
        //circle(width / 2 ,s1));
    }

    coloresAzules() {
        return [242, floor(random(80, 100)), floor(random(40, 60)), 1];
    }

    coloresVerdes() {
        return [82, floor(random(20, 35)), floor(random(60, 80)), 0.9];
    }
    coloresVerdesOscuro() {
        return [82, floor(random(50, 75)), floor(random(20, 50)), 0.3];
    }
}
