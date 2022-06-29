
const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config.db');

class Server {
    constructor(){
        this.app = express();
        this.PORT = process.env.PORT;

        this.middleware();
        this.routes();
        this.databaseConnection();
    }

    middleware (){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    async databaseConnection (){
        await dbConnection();
    }

    routes () {
        this.app.use('/api/v1', require('../routes/routes.movies'));
    }


    listen (){
        this.app.listen(this.PORT, ()=>{
            console.log(`Aplicacion corriendo en http://localhost:${this.PORT}`)
        })
    }
}


module.exports = Server;