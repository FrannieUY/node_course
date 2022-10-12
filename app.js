const { inquirerMenu, pausa, leerInput } = require("./helpers/inquirer");
const { Tareas } = require("./models/tareas");

require("colors");

console.clear();

const main = async () => {
  const tareas = new Tareas();

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        //crear opcion
        const desc = await leerInput("Descripcion:");
        tareas.crearTarea(desc);
        break;
      case "2":
        console.log(tareas.listadoArray);
        break;
    }

    await pausa();
  } while (opt !== "0");
};

main();
