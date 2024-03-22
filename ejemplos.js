//Modelado relacional 1 a 1
//coleccion persona
Persona={
    nombre: 'Jonathan',
    apellido: 'Wiesel',
    genero: 'M'
}

// coleccion dodumentos personales
DocumentosPersonales={
    pasaporte: 'D123456V7',
    licencia: '34567651-23342',
    seguro_social: 'V-543523452'
}

//documentos embebidos

Persona={
    nombre: 'Jonathan',
    apellido: 'Wiesel',
    genero: 'M',

    documentos: {
        pasaporte: 'D123456V7',
        licencia: '34567651-23342',
        seguro_social: 'V-543523452'
    }
}

//MODELADO DE RELACIONES DE MUCHOS A MUCHOS
//Opcion 1
Opcion1={
    "Persona" : [
        {
        nombre: 'Jonathan',
        apellido: 'Wiesel',
        genero: 'M',

        "direcciones": [
            {
            pais: 'Venezuela',
            estado: 'Distrito Capital',
            ciudad: 'Caracas',
            urbanizacion: 'La Florida',
            avenida: 3,
            edificio: 1,
            piso: 2,
            apartamento: 25

        },
        {

            pais: 'Estados Unidos',
            estado: 'Florida',
            ciudad: 'Miami',
            urbanizacion: 'Aventura',
            avenida: 4,
            edificio: 5,
            piso: 7,
            apartamento: 10

        }

        ]
    }
    ]

}

//Opcion 2

Direccion1={
    
        pais: 'Venezuela',
        estado: 'Distrito Capital',
        ciudad: 'Caracas',
        urbanizacion: 'La Florida',
        avenida: 3,
        edificio: 1,
        piso: 2,
        apartamento: 25   
}
Direccion2={
        pais: 'Estados Unidos',
        estado: 'Florida',
        ciudad: 'Miami',
        urbanizacion: 'Aventura',
        avenida: 4,
        edificio: 5,
        piso: 7,
        apartamento: 10
}

Persona={
        nombre: 'Jonathan',
        apellido: 'Wiesel',
        genero: 'M',
        direcciones: [Direccion1, Direccion2]
}

//MODELADO DE RELACIONES DE MUCHOS A MUCHOS
Direccion1={
    
    pais: 'Venezuela',
    estado: 'Distrito Capital',
    ciudad: 'Caracas',
    urbanizacion: 'La Florida',
    avenida: 3,
    edificio: 1,
    piso: 2,
    apartamento: 25,
    personas: [1000]   
},
Direccion2={
    pais: 'Estados Unidos',
    estado: 'Florida',
    ciudad: 'Miami',
    urbanizacion: 'Aventura',
    avenida: 4,
    edificio: 5,
    piso: 7,
    apartamento: 10,
    personas: [1000,1001]
}

Persona1={
    _id: 1000,
    nombre: 'Jonathan',
    apellido: 'Weisel',
    genero: 'M',
    direcciones: [1,2]
},
Persona2={
    _id: 1000,
    nombre: 'Jonathan',
    apellido: 'Weisel',
    genero: 'M',
    direcciones: [2]
}



"PersonasPr" ={
    id: '579c2w11',
    id_persona: 1000,
    id_direccion: 1

},

{
    id: '579c2w12',
    id_persona: 1001,
    id_direccion: 2

},

{
    id: '579c2w13',
    id_persona: 1001,
    id_direccion: 3

}
