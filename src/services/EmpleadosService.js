import axios from 'axios'
import Global from './../Global'

export default class EmpleadosService {

    getEmpleados() {
        return new Promise(function(resolve) {
            var request = "api/Empleados";
            var url = Global.urlEmpleados + request;

            var empleados = [];
            axios.get(url).then(response => {
                empleados = response.data;
                resolve(empleados);
            });
        })
    }

    findEmpleados(idEmpleado) {
        return new Promise(function(resolve) {
            var request = "api/Empleados/"+idEmpleado;
            var url = Global.urlEmpleados + request;

            var empleados = [];
            axios.get(url).then(response => {
                empleados = response.data;
                resolve(empleados);
            });
        })
    }
}