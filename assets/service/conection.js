const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "canal19",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

const LennarF = () => {
  con.query(
    "INSERT INTO formulario (name, email, password) VALUES (?, ?, ?)",

    function (err, result) {
      if (err) throw err;
      console.log("Data inserted");
    }
  );
};
