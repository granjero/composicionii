function setup() {
    colorMode(HSB);
    createCanvas(windowWidth, windowHeight);
    background(255);
    frameRate(1);
}

function draw(){
    cmp = new Composicion;
    background(cmp.colorDeFondo());
    noStroke();
    cmp.cuadricula();
    cmp.trianguloMarron();
    cmp.triangulitoRojo();
    cmp.circulosConcentricos();

}

class Composicion {

    verticesTrianguloGrande = [];

    constructor() {
        this.cCanvas = [width / 2, height / 2];
    }
    
    colorDeFondo() {
        return [floor(random(25, 35)),
            floor(random(25, 35)),
            floor(random(70, 85)),
        ];
    }

    cuadricula () {
        stroke(1);
        line(this.cCanvas[0], 0, this.cCanvas[0], height); // vertical xy xy
        line(0, this.cCanvas[1],width,this.cCanvas[1]); // horizontal
    }

    trianguloMarron() {
        let punto1 = [this.cCanvas[0] - random(this.cCanvas[0] * .5, this.cCanvas[0] * .75),
                      this.cCanvas[1] + random(this.cCanvas[1] * .5, this.cCanvas[1] * .75)] ;
        let punto2 = [this.cCanvas[0] + random(this.cCanvas[0] * .1, this.cCanvas[0] * .35),
                      this.cCanvas[1] - random(this.cCanvas[1] * .5, this.cCanvas[1] * .75)] ;
        let punto3 = [this.cCanvas[0] + random(this.cCanvas[0] * .25, this.cCanvas[0] * .5),
                      this.cCanvas[1] - random(this.cCanvas[1] * -0.2, this.cCanvas[1] * .2)] ;
        this.verticesTrianguloGrande = [punto1, punto2, punto3];

        fill(this.coloresTrianguloMarron());
        stroke(this.coloresTrianguloMarron());
        strokeWeight(5);
        
        triangle(punto1[0], punto1[1],
                 punto2[0], punto2[1],
                 punto3[0], punto3[1],
        );
    }

    coloresTrianguloMarron() {
        return [floor(random(9, 20)),
            floor(random(35, 45)),
            floor(random(35, 45)),
            .5
        ];
    }

    triangulitoRojo (){
        let punto = this.verticesTrianguloGrande[1];
        let punto1 = [punto[0], punto[1] + random(this.cCanvas[0] * .05, this.cCanvas[0] * .1)];
        let punto2 = [punto[0] - random(this.cCanvas[1] * .1), punto[1] - random(this.cCanvas[0] * .2)];
        let punto3 = [punto[0] + random(this.cCanvas[1] * .1), punto[1] - random(this.cCanvas[0] * .2)];

        fill(this.coloresTriangulitoRojo());
        stroke(this.coloresTriangulitoRojo());
        strokeWeight(5);

        console.log(punto1 );
        console.log(punto2);
        console.log(punto3);
        triangle(punto1[0], punto1[1],
                 punto2[0], punto2[1], 
                 punto3[0], punto3[1]);
    }

    coloresTriangulitoRojo() {
        return [floor(random(350, 360)),
            floor(random(70, 80)),
            floor(random(70, 80)),
            .7
        ];
    }

    circulosConcentricos() {
        let centro =[this.cCanvas[0] - random(this.cCanvas[0] * .5, this.cCanvas[0] * .75), 
                     this.cCanvas[1] - random(this.cCanvas[0] * .75, this.cCanvas[1] * .85)];
        circle(centro[0], centro[1], 50);

    }
}
