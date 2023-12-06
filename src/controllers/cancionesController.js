const db = require("../database/models");

module.exports = {
  list: async (req, res) => {

    try {
      const canciones = await db.Cancion.findAll();
      res.json(canciones);

    } catch (error) {
      console.log(error);
    }

    //res.send('estas viendo todas las canciones');
  },


  detail: async (req, res) => {

    const id = req.params.id;
    try {
      const cancion = await db.Cancion.findByPk(id);
      res.json(cancion);
    } catch (error) {
      console.error(error)
    }
  },


  create: async (req, res) => {

    try {

      const nuevaCancion = {
        titulo: req.body.titulo,
        duracion: req.body.duracion,
        album_id: req.body.album_id,
        artista_id: req.body.artista_id,
        genero_id: req.body.genero_id,
      };

      nuevaCancion.created_at = new Date();

      const cancion = await db.Cancion.create(nuevaCancion);
      res.json(cancion);

    } catch (error) {
      console.log(error);
    }
  },

  update: async (req, res) => {
    const cancionId = req.params.id;
    try {
      const cancionEncontrada = await db.Cancion.findByPk(cancionId);
      const datosActualizados = await db.Cancion.update(
        {
          titulo: req.body.titulo ? req.body.titulo : cancionEncontrada.titulo,
          duracion: req.body.duracion ? req.body.duracion : cancionEncontrada.duracion,
          album_id: req.body.album_id ? req.body.album_id : cancionEncontrada.album_id,
          artista_id: req.body.artista_id ? req.body.artista_id : cancionEncontrada.artista_id,
          genero_id: req.body.genero_id ? req.body.genero_id : cancionEncontrada.genero_id,
          created_at: cancionEncontrada.created_at,
          updated_at: new Date()
        },
        {
          where: { id: cancionId },
        }
      );
      const cancionActualizada = await db.Cancion.findByPk(cancionId);
      res.json(cancionActualizada);
    } catch (error) {
      console.log(error);
    }
  },


  delete: async (req, res) => {

    const id = req.params.id
    const cancionBorrar = await db.Cancion.findByPk(id);

    if (cancionBorrar) {
      try {
        await db.Cancion.destroy({ where: { id } })
        res.json({mensaje: "Se ha eliminado la cancion " + cancionBorrar.titulo})

      } catch (error) {
        console.log(error)
      }


    } else {

    }

  }

};
