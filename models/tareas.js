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

  cargarTareas(tareas = []) {
    tareas.forEach((tarea) => {
      this._listado[tarea.id] = tarea;
    });
  }

  crearTarea(desc = "") {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
    console.log(this._listado);
  }

  listadoCompleto(tareas = []) {
    tareas.forEach((tarea) => {
      let completedState = '';
      if ( tarea.completadoEn != null ) {
        completedState = 'Completada';
      } else {
        completedState = 'pendiente';
      };
      console.log(`${tareas.indexOf(tarea) + 1}. ${tarea.desc} :: ${completedState}`);
    })
  }
}

module.exports = {
  Tareas,
};
