const argv = require("yargs")
  .options(
    {
      b: {
        alias: "base",
        type: "number",
        demandOption: true,
        describe: "Base de numero que se multiplicará en la tabla"
      },
    },
    {
      l: {
        alias: "list",
        type: "boolean",
        default: false,
        describe: "mostrar tabla en consola"
      },
    }
  )
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw new Error("La base tiene que ser un número");
    }
    return true;
  }).argv;

module.exports = argv;