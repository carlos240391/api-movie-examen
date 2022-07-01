const {Schema, model} = require('mongoose');



const rentaSchema = Schema({
    orden:{
        type:Number,
        required:[true, 'La orden es obligatoria.'],
        unique:true
    },
    movieId:{
        type:Number,
        required:[true, 'El ID de la pelicula es obligatorio.'],
    },
    plan:{
        type:String,
        required:[true, 'El plan de renta es obligatorio.'],
    },
    fechaInicio:{
        type:String,
        required:[true, 'La fecha de inicio de renta es obligatorio.'],
    }
    email:{
        type:String,
        required:[true, 'El campo email es requerido.']
    }
})



module.exports = model('Renta', rentaSchema);