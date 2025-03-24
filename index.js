const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Habilitar CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

const user1 = [{name: "Maria Jose", lastName: "Palomino Carreño", email: "mariapalca@unisabana.edu.co", id: "0000321271"}];
const user2 = [{name: "Samuel", lastName: "Guerrero Arcos", email: "samuelguar@unisabana.edu.co", id: "0000323500"}];

// Ruta principal
app.get("/", (req, res) => {
    res.json({
        mensaje: "Bienvenido a la API de estudiantes",
        rutas_disponibles: {
            "obtener_estudiante": "/user-info/1 o /user-info/2"
        }
    });
});

app.get('/user-info/:id', (req, res) => {
    const id = parseInt(req.params.id);
    
    if (id === 1) {
        res.json(user1);
    } else if (id === 2) {
        res.json(user2);
    } else {
        res.status(404).json({error:"404 Usuario no encontrado"});
    }
});

module.exports = app;