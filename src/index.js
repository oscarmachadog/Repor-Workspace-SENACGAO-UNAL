import express from 'express'
import { dirname,join } from 'path'
import { fileURLToPath } from 'url'

import rutasdenavegacion from './routes/index.js'
import authRoutes from './routes/autenticacion.js'


const app = express()


//ruta absoluta
const __dirname = dirname(fileURLToPath (import.meta.url))
console.log(join(__dirname,'/views'))

//ruta para iniciar el servidor con su respectivo puerto
app.listen(10)
console.log('Hola mundo')
console.log('el servidor esta escuchando y el puerto es: ',10);

app.set('views',join(__dirname,'views'))
app.set('view engine','ejs')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//ruta para llamar la aplicacion
app.use(rutasdenavegacion)
app.use(authRoutes)

//ruta de la carpeta publica para archivos estaticos (CSS,img,video)
app.use(express.static(join(__dirname,'public')))

//EJERCICIO DE CREACION DE OBJECTOS PARA NODE JS
//EJS ES EL MODULO embedded javascript temples, partial
/* const macbook = {
    marca:"apple",
    modelos:"macbook pro",
    procesador:"M4 pro",
    ram:"24GB",
    almacenamiento:"1TB SSD",

    mostrarInformacion: function () {
        console.log("\n  INFORMACION ACERCA DE MACBOOK")
        console.log("marca:",this.marca)
        console.log("modelo:",this.modelos)
        console.log("procesador:",this.ram)
        console.log("almacenamiento:",this.almacenamiento )
    }
}

macbook.mostrarInformacion()

//crear un objecto automovil

const automovil = {
    marca:"toyota",
    modelo:"corolla",
    año:"2024",
    color:"azul", 
    motor:"2.0L",
    kilometraje:15000,

    encender: function(){
        console.log("\n el automovil esta encendido")
    },

    mostrarInformacion: function(){
        console.log("\n *** INFORMACION DEL AUTOMOVIL ***")

     console.log("marca:",this.marca);
     console.log("modelos:",this.modelo);
     console.log("año:",this.año);
     console.log("color:",this.color);
     console.log("motor:",this.motor);
     console.log("kilometraje:",this.kilometraje, "km");
    }
};

//EJECUTAR LOS METODOS
automovil.encender();
automovil.mostrarInformacion();

const construtora = {
    nombre:"construtora horizonte",
    ciudad:"medellin",
    fundador:"Carlos Gomez",
    numerodeempleados:120,
    proyectosrealizados:15,
    añosdeexperiencia:10,
    Especialidad:"Construccion de viviendas",

    iniciacion: function(){
        console.log("\n La constructora ha iniciado un nuevo proyecto.")
    },

    mostrarInformacion: function(){
        console.log("\n === Informacion de la construtora ===")

        console.log("nombre:",this.nombre);
        console.log("ciudad:",this.ciudad);
        console.log("fundador:",this.fundador);
        console.log("numero de empleados:",this.numerodeempleados);
        console.log("proyectos realizados:",this.proyectosrealizados);
        console.log("años de experiencia:",this.añosdeexperiencia);
        console.log("Especialidad:",this.Especialidad);
    }

};

//EJECUTAR LOS METODOS
construtora.iniciacion();
construtora.mostrarInformacion();
*/