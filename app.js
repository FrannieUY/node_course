const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");

console.clear();

console.log(argv);

const base = argv.b;
const list = argv.l;

crearArchivo(base, list)
  .then((nombreArchivo) => console.log(nombreArchivo, "created Successfully!"))
  .catch((err) => console.log(err));
