
const mongoose = require('mongoose');

const dbConnection = async()=>{
    try {
        
        await mongoose.connect(process.env.MONGODBCDN, {
            useNewUrlParser:true,
            useUnifiedTopology:true,
            // useCreateIndex:true,
            // useFindAndModify:false
        })

        console.log('base de datos funcionando =)');

    } catch (error) {
        console.log(error);
        throw new Error('Error en la base de datos');
    }
}


module.exports = {
    dbConnection
}