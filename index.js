const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Endpoint 1: raíz - mensaje de bienvenida con info del servidor
app.get('/', (req, res) => {
  res.json({
    mensaje: 'Backend de prueba corriendo correctamente',
    curso: 'Infraestructura y Cómputo en la Nube',
    hora_servidor: new Date().toISOString()
  });
});

// Endpoint 2: saludo personalizado - recibe un nombre por parámetro de ruta
app.get('/api/saludo/:nombre', (req, res) => {
  const { nombre } = req.params;
  res.json({
    mensaje: `Hola, ${nombre}! Bienvenido a la práctica de Node.js.`
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
