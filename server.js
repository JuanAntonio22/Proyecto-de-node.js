//importar el modulo expres 
const expres = require('express');

//crear una instancia de la aplicasion Express
const app = expres();

// Definir el puerto Donde el servidor noba a escuchar 
const PORT = 25565;

//ruta prinsipal
app.get('/',(req, res) => {
    res.send('<h1>Bienbenido al servidor de Node.js<h1>');
});

//ruta API que Debuelbe un JSON (get /api/saludo)
app.get('/api/saludo', (req, res) => {
    res.json({mensaje: 'Hola se esta mostrando la API de Node.js'});
});

//inisar el servidor
app.listen(PORT, () =>{
    console.log(`servidor escuchando en httml://localhost:${PORT}`);
});
