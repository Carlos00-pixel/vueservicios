<template>
  <div>
    <h1>Empleados detalle</h1>
    <form method="post" v-on:submit.prevent="buscarEmpleado">
        <label>Seleccione un empleado:</label>
        <select class="form-control" style="width: 500px; margin: 0 auto; margin-top: 10px" v-model="idEmpleado">
            <option v-for="emp in empleados" :key="emp.idEmpleado" :value="emp.idEmpleado">
                {{emp.apellido}}
            </option>
        </select><br/>
        <button class="btn btn-success">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg>
            Detalles Empleado
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg>
        </button>
    </form>
    <hr/>
    <div v-if="empleado">
        <h2>Apellido: {{empleado.apellido}}</h2>
        <dl>
            <dt>Oficio: </dt>
            <dd>{{empleado.oficio}}</dd>
            <dt>Salario: </dt>
            <dd>{{empleado.salario}}</dd>
            <dt>Departamento: </dt>
            <dd>{{empleado.departamento}}</dd>
        </dl>
    </div>
  </div>
</template>

<script>
    import EmpleadosService from './../services/EmpleadosService';
    const service = new EmpleadosService();

    export default {
        name: 'EmpleadosDetalle',
        data() {
            return {
                empleados: [],
                idEmpleado: 0,
                empleado: null
            }
        },
        methods: {
            loadEmpleados() {
                service.getEmpleados().then(result => {
                    this.empleados = result;
                });
            },
            buscarEmpleado(){
                service.findEmpleados(this.idEmpleado).then(result => {
                    this.empleado = result;
                });
            }
        },
        mounted() {
            this.loadEmpleados();
        }
    }
</script>

<style>

</style>