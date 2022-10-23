/*
    ===== Código de TypeScript =====
*/


function sumar(a: number, b:number): number {
    return a + b;
}

const sumarFlecha = (a:number, b:number):number => {
    return a + b;
}


// ? el signo de pregunta, es un argumento opcional ,
//orden: 1) OBLIGATORIOS, 2) OPCIONALES, 3) CONSTANTES
function multiplicar( numero: number, otroNumero?: number, base:number = 2 ): number {
    return numero * base;
}


interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}



//VOID: si una funcion que no retorna nada 
function curar( personaje: PersonajeLOR, curarX:number ): void {

    personaje.pv += curarX;
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50,
    mostrarHp() {
        console.log( 'Puntos de vida:', this.pv );
    }
}

curar( nuevoPersonaje, 20 );

nuevoPersonaje.mostrarHp();


