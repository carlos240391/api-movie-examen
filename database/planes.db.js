const {Schema, model} = require('mongoose');



const rentaSchema = Schema({
    plan:{
        type:String,
        required:[true, 'El nombre del plan es obligatorio.']
    },
    costo:{
        type:Number,
        required:[true,'El costo debe ser obligatorio.']
    },
    descripcion:{
        type:String,
        required:[true, 'La descripcion es obligatoria.']
    }
})

module.exports = model('Plan', rentaSchema);