const {Router} = require('express');
const { getMovies, getEachMovie, postRentas, getRentas, postMovie, putMovie, getRatingMovies, postPlanes, getPlanes } = require('../controllers/controllers.movies');

const routes = Router();

routes.post('/movies', postMovie);

routes.get('/movies', getMovies);

routes.get('/moviesRating', getRatingMovies);

routes.get('/movies/:movie', getEachMovie);

routes.put('/movies/:movie', putMovie);

//RENTAS DE PELICULAS

routes.get('/rentas', getRentas);

routes.post('/rentas', postRentas);

//PLANES

routes.post('/planes',postPlanes);
routes.get('/planes', getPlanes);


module.exports = routes;