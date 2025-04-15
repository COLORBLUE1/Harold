const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "canal19",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Conexión exitosa!");
});

const LennarF = () => {
  con.query(
    "INSERT INTO formulario (name, edad, email, registro) VALUES (?, ?, ?, ?)",

    [name, edad, email, registro],
    function (err, result) {
      if (err) throw err;
      console.log("Datos insertados");
    }
  );
};
