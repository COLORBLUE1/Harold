import React, { useEffect } from "react";
import RecordArbolMaterialLayout from "../layouts/RecordArbolMaterialLayout";
import { Bentogaleri } from "../components/Bentogaleri";
import { RecordArbolBD } from "../services/const";
import { Header } from "../components/Header";

const RecordArbolMaterial = () => {
  
  useEffect(() => {
    // Desplazar la ventana a la parte superior de la página
    window.scrollTo(0, 0);
  }, []);

  return (
    <RecordArbolMaterialLayout>
      <Header 
        titulo="Récord Guinness El Árbol de la PAZ - materiales" 
        bg="https://mott.pe/noticias/wp-content/uploads/2017/08/Paisajes-reflejan-paz-y-serenidad-Im%C3%A1genes-de-Mario-Visser-compressor.png" 
      />
      <Bentogaleri
        bd={RecordArbolBD}
        bg="#adadad"
        urlmas="/Arbol-material"
        columns={3}
        spacing={2}
        vermastext=""
      />
    </RecordArbolMaterialLayout>
  );
};

export default RecordArbolMaterial;