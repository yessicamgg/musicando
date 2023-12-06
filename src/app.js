const express = require('express');
const path = require('path');
//const methodOverride = require('method-override');

//const indexRouter = require('./routes/index');

const generosRoutes = require('./routes/generosRoutes');
const cancionesRoutes = require('./routes/cancionesRoutes');
const app = express();
app.use(express.json());


// view engine setup
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './views'));

app.use(express.static(path.resolve(__dirname, '../public')));
//app.use(express.urlencoded({ extended: true }));
//app.use(methodOverride('_method'));

//app.use('/', indexRouter);
app.use('/generos', generosRoutes);
app.use('/canciones', cancionesRoutes);


app.listen('3001', () => console.log('Servidor corriendo en el puerto 3001'));
