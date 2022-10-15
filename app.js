const { guardarDb, leerDb } = require("./helpers/guardarArchivo");
const {
  inquirerMenu,
  pausa,
  leerInput,
  listBorrar,
  confirmar,
  listChecklist,
} = require("./helpers/inquirer");
const { Tareas } = require("./models/tareas");

require("colors");

console.clear();

const main = async () => {
  let opt = "";
  const tareas = new Tareas();

  const tareasDb = leerDb();

  if (tareasDb) {
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
        //Listar tareas
        tareas.listadoCompleto(tareasDb);
        break;
      case "3":
        //Listar tareas completadas
        tareas.listadoPendientesCompletadas(true);
        break;
      case "4":
        //Listar tareas pendientes
        tareas.listadoPendientesCompletadas(false);
        break;
      case "5":
        //Completar
        const ids = await listChecklist(tareas.listadoArray);
        tareas.toggleCompletadas(ids);
        break;
      case "6":
        const id = await listBorrar(tareas.listadoArray);
        if (id !== "0") {
          console.log("id?", id);
          const confirm = await confirmar("¿Estás seguro?");
          if (confirm) {
            tareas.borrarTarea(id);
          }
        }
        break;
    }

    guardarDb(tareas.listadoArray);

    await pausa();
  } while (opt !== "0");
};

main();
