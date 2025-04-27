<?php
// Mostrar errores para depuración
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Permitir solicitudes desde cualquier origen
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Leer el JSON del cuerpo de la solicitud
$input = file_get_contents("php://input");

// Verificar que se haya recibido algo
if (!$input) {
    http_response_code(400);
    echo json_encode(["message" => "❌ No se recibieron datos"]);
    exit();
}

$data = json_decode($input);

// Verificar que todos los campos existan
if (
    !isset($data->nombre) ||
    !isset($data->edad) ||
    !isset($data->ciudad) ||
    !isset($data->canal19)
) {
    http_response_code(400);
    echo json_encode(["message" => "❌ Campos incompletos"]);
    exit();
}

// Extraer los datos
$nombre = $data->nombre;
$edad = $data->edad;
$ciudad = $data->ciudad;
$canal19 = $data->canal19;

$host = "localhost"; // O usa la IP si es un servidor remoto, como 162.241.61.245.
$user = "cpses_fuvcnhofvh"; // Tu usuario de la base de datos.
$password = "Camilo12."; // La contraseña asociada a tu usuario de base de datos.
$dbname = "funda730_registro_huellas"; // El nombre de tu base de datos.


$conn = new mysqli($host, $user, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["message" => "❌ Error de conexión: " . $conn->connect_error]);
    exit();
}

// Preparar e insertar
$stmt = $conn->prepare("INSERT INTO huellas (nombre, edad, ciudad, canal19) VALUES (?, ?, ?, ?)");
$stmt->bind_param("siss", $nombre, $edad, $ciudad, $canal19);

if ($stmt->execute()) {
    echo json_encode(["message" => "✅ Registro exitoso"]);
} else {
    http_response_code(500);
    echo json_encode(["message" => "❌ Error al insertar: " . $stmt->error]);
}

$stmt->close();
$conn->close();
?>
