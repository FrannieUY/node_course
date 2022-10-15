const Tarea = require("./tarea");

class Tareas {
  _listado = {};

  get listadoArray() {
    const listado = [];
    Object.keys(this._listado).forEach((key) => {
      const tarea = this._listado[key];
      listado.push(tarea);
    });

    return listado;
  }

  constructor() {
    this._listado = {};
  }

  borrarTarea(id = "") {
    if (this._listado[id]) {
      delete this._listado[id];
      console.log("tarea eliminada");
    }
  }

  cargarTareas(tareas = []) {
    tareas.forEach((tarea) => {
      this._listado[tarea.id] = tarea;
    });
  }

  crearTarea(desc = "") {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }

  listadoCompleto(tareas = []) {
    tareas.forEach((tarea) => {
      let completedState = "";
      if (tarea.completadoEn != null) {
        completedState = tarea.completadoEn.green;
      } else {
        completedState = "pendiente".red;
      }
      console.log(
        `${tareas.indexOf(tarea) + 1}. ${tarea.desc} :: ${completedState}`
      );
    });
  }

  listadoPendientesCompletadas(completadas = true) {
    this.listadoArray.forEach((tarea, i) => {
      if (completadas) {
        if (tarea.completadoEn != null) {
          console.log(`${i + 1}. ${tarea.desc} :: ${tarea.completadoEn.green}`);
        }
      } else {
        if (tarea.completadoEn == null) {
          console.log(`${i + 1} ${tarea.desc} :: ${"Pendiente".red}`);
        }
      }
    });
  }

  toggleCompletadas( ids = [] ) {
    ids.forEach( id => {
      const tarea = this._listado[id];
      if ( !tarea.completadoEn ) {
        tarea.completadoEn = new Date().toISOString();
      }
    })
  }
}

module.exports = {
  Tareas,
};
