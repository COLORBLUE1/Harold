import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mysql from "mysql";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Configuración de conexión
const conn = mysql.createConnection({
  host: "162.241.61.245", // Reemplaza con la IP de tu servidor de base de datos si es remoto
  user: "cpses_fuvcnhofvh",
  password: "Camilo12.",
  database: "funda730_registro_huellas",
});



  // import dotenv from "dotenv";
  // const app = express();
  // app.use(cors());
  // app.use(bodyParser.json());

  // dotenv.config();

  // const conn = mysql.createConnection({
  //   host: process.env.DB_HOST,
  //   user: process.env.DB_USER,
  //   password: process.env.DB_PASSWORD,
  //   database: process.env.DB_NAME,
  // });
// Conectar a MySQL


conn.connect((err) => {
  if (err) throw err;
  console.log("✅ Conectado a la base de datos MySQL");
});

// Ruta para recibir los datos del formulario
app.post("/registrar", (req, res) => {
  const { nombre, edad, ciudad, canal19 } = req.body;

  const sql =
    "INSERT INTO huellas (nombre, edad, ciudad, canal19) VALUES (?, ?, ?, ?)";
  conn.query(sql, [nombre, edad, ciudad, canal19], (err, result) => {
    if (err) {
      console.error("❌ Error al insertar:", err);
      return res.status(500).send("Error en el servidor");
    }
    res.status(200).send("✅ Registro exitoso");
  });
});

// Iniciar servidor
app.listen(3001, () => {
  console.log("🚀 Servidor corriendo en http://localhost:3001");
});
