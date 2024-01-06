const express = require('express');
const path = require('path');

const app = express();
const port = 3000; // Puedes cambiar el puerto si es necesario

// Configuración del middleware para servir archivos estáticos (como el HTML)
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para manejar solicitudes a la raíz
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor Node.js escuchando en http://localhost:${port}`);
});
