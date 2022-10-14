const { guardarDb, leerDb } = require("./helpers/guardarArchivo");
const { inquirerMenu, pausa, leerInput } = require("./helpers/inquirer");
const { Tareas } = require("./models/tareas");

require("colors");

console.clear();

const main = async () => {
  let opt = '';
  const tareas = new Tareas();

  const tareasDb = leerDb();

  if ( tareasDb ) {
    //Establecer las tareas
    tareas.cargarTareas(tareasDb);
  }

  do {
    //show menu
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        //crear opcion
        const desc = await leerInput("Descripcion:");
        tareas.crearTarea(desc);
        break;
      case "2":
        tareas.listadoCompleto(tareasDb);
        break;
    }

    // guardarDb(tareas.listadoArray);

    await pausa();
  } while (opt !== "0");
};

main();
