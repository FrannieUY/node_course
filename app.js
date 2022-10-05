const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("yargs")
  .options(
    {
      b: {
        alias: "base",
        type: "number",
        demandOption: true,
      },
    },
    {
      l: {
        alias: "list",
        type: "boolean",
        demandOption: true,
        default: false,
      },
    }
  )
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw new Error("La base tiene que ser un número");
    }
    return true;
  }).argv;

console.clear();

console.log(argv);

const base = argv.base;
const list = argv.list;

crearArchivo(base, list)
  .then((nombreArchivo) => console.log(nombreArchivo, "created Successfully!"))
  .catch((err) => console.log(err));
