const moviesList = [
    {
        id:0,
        movie:'Avergers',
        clasificacion:'R',
        duracion:'2 hrs.',
        poster:'https://m.media-amazon.com/images/I/71niXI3lxlL.jpg',
        sinopsis:'Pelicula perrona',
        idioma:'Ingles',
        subtitulos:['Espanol', 'Portugues', 'Frances', 'Ingles'],
        trailer:"https://www.youtube.com/watch?v=TcMBFSGVi1c",
        demand:0
    },
    {
        id:1,
        movie:'Batman',
        clasificacion:'R',
        duracion:'2 hrs.',
        poster:'https://i.etsystatic.com/28630258/r/il/ff6c03/3639141444/il_fullxfull.3639141444_ok2j.jpg',
        sinopsis:'Pelicula perrona',
        idioma:'Ingles',
        subtitulos:['Espanol', 'Portugues', 'Frances', 'Ingles'],
        trailer:"https://www.youtube.com/watch?v=fWQrd6cwJ0A",
        demand:0
    },
    {
        id:2,
        movie:'PAW PATROL',
        clasificacion:'R',
        duracion:'2 hrs.',
        poster:'https://assets.cinepolisklic.com/cmsklicia/movieimages/paw-patrol-los-cachorros-y-katie-detienen-al-equipo-de-gatitos-ladradores/ns_originalsize_1600X480.jpg',
        sinopsis:'Pelicula perrona',
        idioma:'Ingles',
        subtitulos:['Espanol', 'Portugues', 'Frances', 'Ingles'],
        trailer:"https://www.youtube.com/watch?v=LRMTr2VZcr8",
        demand:0
    },
    {
        id:3,
        movie:'ROCKETMAN2019',
        clasificacion:'R',
        duracion:'2 hrs.',
        poster:'https://assets.cinepolisklic.com/cmsklicia/movieimages/rocketman/ns_originalsize_1600X480.jpg',
        sinopsis:'Pelicula perrona',
        idioma:'Ingles',
        subtitulos:['Espanol', 'Portugues', 'Frances', 'Ingles'],
        trailer:"https://www.youtube.com/watch?v=S3vO8E2e6G0",
        demand:0
    },
    {
        id:4,
        movie:'DORA Y LA CIUDAD PERDIDA2019',
        clasificacion:'R',
        duracion:'2 hrs.',
        poster:'https://assets.cinepolisklic.com/cmsklicia/movieimages/dora-y-la-ciudad-perdida/ns_originalsize_1600X480.jpg',
        sinopsis:'Pelicula perrona',
        idioma:'Ingles',
        subtitulos:['Espanol', 'Portugues', 'Frances', 'Ingles'],
        trailer:"https://www.youtube.com/watch?v=uk0zlFhSnF4",
        demand:0
    },
]

const planes = [
    {
        id:1876,
        plan:'semanal',
        costo:200,
        descripcion:'Renta 1 semana por $200MX.'
    },
    {
        id:1765,
        plan:'quincenal',
        costo:350,
        descripcion:'Renta de 15 dias por $350mx.'
    },
    {
        id:1900,
        plan:'mensual',
        costo:500,
        descripcion:'Renta 1 mes por $500mx.'
    }
]

const rentas = [
    {
        id:1890,
        orden:1902871,
        movieId:4,
        plan:'semanal',
        fecha:'27/06/2022'
    },
    {
        id:1891,
        orden:1902872,
        movieId:0,
        plan:'semanal',
        fecha:'26/06/2022'
    },
    {
        id:1893,
        orden:1902873,
        movieId:0,
        plan:'semanal',
        fecha:'26/06/2022'
    },
    {
        id:1894,
        orden:1902874,
        movieId:0,
        plan:'semanal',
        fecha:'26/06/2022'
    },
    {
        id:1895,
        orden:1902875,
        movieId:1,
        plan:'semanal',
        fecha:'26/06/2022'
    },
    {
        id:1896,
        orden:1902876,
        movieId:1,
        plan:'semanal',
        fecha:'26/06/2022'
    },
    {
        id:1897,
        orden:1902877,
        movieId:4,
        plan:'semanal',
        fecha:'26/06/2022'
    },
    {
        id:1898,
        orden:1902878,
        movieId:4,
        plan:'semanal',
        fecha:'26/06/2022'
    },
    {
        id:1899,
        orden:1902879,
        movieId:4,
        plan:'semanal',
        fecha:'26/06/2022'
    },
]


module.exports = {
    moviesList,
    rentas,
    planes
};