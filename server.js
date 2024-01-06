const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Configuración del middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para manejar solicitudes a la raíz
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar el servidor solo si no estamos en un entorno de producción
if (process.env.NODE_ENV !== 'production') {
    app.listen(port, () => {
        console.log(`Servidor Node.js escuchando en http://localhost:${port}`);
    });
}
