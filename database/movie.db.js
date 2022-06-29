const {Schema, model} = require('mongoose');



const movieSchema = Schema({
    movieName:{
        type:String,
        required:[true, "El campo movieName es obligatorio"]
    },
    clasificacion:{
        type:String,
        required:[true, "El campo clasificacion es obligatorio"]
    },
    duracion:{
        type:String,
        required:[true, "El campo duracion es obligatorio"]
    },
    poster:{
        type:String,
        required:[true, "El campo poster es obligatorio"]
    },
    sinopsis:{
        type:String,
        required:[true, "El campo sinopsis es obligatorio"]
    },
    idiomas:{
        type:[String],
    },
    subtitulos:{
        type:[String]
    },
    trailer:{
        type:String,
        required:[true, "El campo trailer es obligatorio"]
    },
    demand:{
        type:Number,
        required:[true, "El campo demand es obligatorio"]
    }

})


module.exports = model('Movie', movieSchema);