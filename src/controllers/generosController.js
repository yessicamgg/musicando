const { Genero } = require('../database/models'); //entre llaves va el alias que tenemos en el modelo


module.exports = {
    list: async (req, res) => {

        try {
            const generos = await Genero.findAll({
                include: ['canciones']
            });
            if (generos.length == 0) {
                return res.json({ mensaje: "No se ubicaron generos!" });
            }
            res.json(generos); 
        } catch (error) {
            console.error(error)
        }
        
    },	
	

    // detail: async (req, res) => {
    //     const generoId = req.params.id;
    
    //     try {
    //       const genero = await Genero.findByPk(generoId, { 
            
    //         raw: true,
    //         include: ['generoCancion'],
    //         nest: true 
        
    //     });
    //       res.render(path.resolve(__dirname, "../views/generosDetail.ejs"), {genero: genero});
    //       console.log(genero);
    //     } 
    //     catch (error) {
    //       console.log(error);
    //     }
    
    //     //res.send('Detalle de pelicula' + req.params.id)
    //   },
 
}