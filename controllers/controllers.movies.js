const {request, response} = require('express');
const {moviesList}  = require('../mocks/movies');
const Rentas = require('../database/renta.db');
const Movies = require('../database/movie.db');
const Planes = require('../database/planes.db');
const res = require('express/lib/response');

const postMovie = async(req=request, res=response)=>{
    const payload = req.body;
    const movies = new Movies(payload)
    await movies.save((err, save)=>{
        if(err){
            res.json({mensaje:'Algo salio mal', folio:11765, detalles: err.message});
            return;
        }
        res.json({mensaje:'Operacion exitosa', folio:movies._id});
    })
};

const getMovies = (req=request, res=response) =>{
    Movies.find({}, (err, docs)=>{
        if(err){
            res.json({mensaje:'Algo salio mal', folio:1981})
        }else{
            res.json({mensaje:"Operacion exitosa", folio:191761, data:docs})
        }
    })
}

const getEachMovie = (req=request, res=response) =>{
    const movieId = req.params.movie;
    Movies.find({_id:movieId}, (err, docs)=>{
        if(err){
            res.json({mensaje:"Algo salio mal", folio:191751, detalles: err.message})
        }else{
            res.json({mensaje:"Operacion exitosa", folio:191751, data:docs})
        }
    })
    
}

const getRatingMovies = (req=request, res=response)=>{
    Movies.find({}).sort({demand:'desc'}).exec((err,docs)=>{
        if(err){
            res.json({mensaje:'Algo salio mal', folio:18725})
        }else{
            res.json({mensaje:'Operacion exitosa', folio:18625, data:docs.slice(0,5)});
        }
    })
}

const putMovie = async(req=request, res=response)=>{
    const movieId = req.params.movie;
    const payload = req.body
    const filter = {_id: movieId};

    await Movies.findOneAndUpdate(filter, payload);

    res.json({mensaje:'Operacion exitosa', folio:18872});

}



// CONTROLADORES DE RENTAS

const postRentas = async(req=request, res=response) =>{
    const payload = req.body;
    const rentas = new Rentas(payload);
    await rentas.save((err, save)=>{
        if(err){
            res.json({mensaje:'Algo salio mal',folio:88176, detalles: err.message});
            return;
        }
        res.json({mensaje:'Operacion exitosa', folio:rentas._id})
    });
   
}

const getRentas = async(req=request, res=response) =>{
    Rentas.find({}).sort({movieId:'desc'}).exec((err, docs)=>{
        res.json({mensaje:'Operación exitosa', folio:9087, data:docs});
    })
}

//CONTROLADORES PLANES
const postPlanes = async(req=request, res=response)=>{
    const payload = req.body;
    const planes = new Planes(payload);
    await planes.save((err, save)=>{
        if(err){
            res.json({mensaje:'Algo salio mal',folio:1962 })
            return;
        }
        res.json({mensaje:'Operacion exitosa', folio:planes._id});
    })
}
const getPlanes = async (req=request, res=response)=>{
    Planes.find({}, (err, docs)=>{
        res.json({mensaje:'Operacion exitosa', folio:16116, data:docs})
    })
}

module.exports = {
    postRentas,
    getRentas,

    postMovie,
    putMovie,
    getMovies,
    getRatingMovies,
    getEachMovie,

    postPlanes,
    getPlanes
}