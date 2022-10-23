/*
    ===== Código de TypeScript =====
*/

/*
    class Moroe {
        private alterEgo: string;
        public edad: number;
        static nombreReal: number;
    }
    constructor (){

        //para llamar a una variable privada
        this.alertEgo
    }
*/
class PersonaNormal {
    
    //es una funcion que se ejecuta cuando creo una instancia de la CLASE
    //sirve para inicialiar las propiedades de la clase
    constructor( 
        //les  pongo el nivel de acceso
        //crea una propiedad con el nombre y le establece su propiedad 
        public nombre: string, 
        public direccion: string 
    )  {}

}

//en el extends uso el super
//el super llama al constructor de la clase de la que extiende

class Heroe extends PersonaNormal {

    constructor( 
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
    ) {
        super( nombreReal, 'New York, USA' );
    }

}

const ironman = new Heroe('Ironman',45, 'Tony');

console.log(ironman);