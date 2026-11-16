const express = require("express");

const app = express();

app.use(express.json());

// Endpoint de teste
app.get("/", (req, res) => {
  res.status(200).send("Servidor está ouvindo!");
});

// Iniciar servidor
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor ouvindo na porta ${PORT}`);
});
