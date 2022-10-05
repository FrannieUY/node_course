const fs = require("fs");

const crearArchivo = async (base = 1, list = false) => {
  try {
    let salida = "======================\n";
    salida += `Tabla del ${base}:\n`;
    salida += "======================\n";

    for (let i = 0; i <= 10; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
    }

    if (list) {
      console.log(salida);
    }

    fs.writeFileSync(`tabla-${base}.txt`, salida);
    return `tabla-${base}.txt`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
