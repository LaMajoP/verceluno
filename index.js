const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Habilitar CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

// Datos de los estudiantes (puedes modificar estos valores)
const students = {
    1: {
        name: "Maria Jose",
        lastName: "Palomino Carreño",
        email: "mariapalca@unisabana.edu.co",
        id: "0000321271"
    },
    2: {
        name: "Samuel",
        lastName: "Arcos",
        email: "nose@unisabana.edu.co",
        id: "0000"
    }
};

// Ruta principal
app.get("/", (req, res) => {
    res.json({
        mensaje: "Bienvenido a la API de estudiantes",
        rutas_disponibles: {
            "obtener_estudiante": "/user-info/1 o /user-info/2"
        }
    });
});

// Tu endpoint actual de user-info
app.get("/user-info/:id", (req, res) => {
    const studentId = req.params.id;
    
    if (students[studentId]) {
        res.json(students[studentId]);
    } else {
        res.status(404).json({ error: "Estudiante no encontrado" });
    }
});

// Iniciar el servidor localmente
app.listen(port, () => {
    console.log(`Servidor en ejecución en http://localhost:${port}`);
});

// Exportar el servidor para Vercel
module.exports = app;
