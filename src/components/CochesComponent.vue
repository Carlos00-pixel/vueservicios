<template>
<div>
    <h1>Api Coches</h1>
    <!-- <div v-for="car in coches" :key="car.idCoches">
        <h1 style="color: blue"><span style="color: black">Marca: </span> {{car.marca}}</h1>
        <h1 style="color: blue"><span style="color: black">Modelo: </span> {{car.modelo}}</h1>
        <h2 style="color: red"><span style="color: black">Conductor: </span>{{car.conductor}}</h2>
        <img :src="car.imagen" style="width: 150px; height: 150px"/>
        <hr/>
    </div> -->
    <div class="row row-cols-1 row-cols-md-3 g-4" id="carta">
        <div class="card" style="width: 18rem; margin: 0 auto; margin-bottom: 20px" v-for="car in coches" :key="car.idCoches">
            <img :src="car.imagen" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">{{car.marca}}</h5>
                <p class="card-text"><span style="color: black">Marca: </span> {{car.marca}}</p>
                <p class="card-text"><span style="color: black">Modelo: </span> {{car.modelo}}</p>
                <p class="card-text"><span style="color: black">Conductor: </span> {{car.conductor}}</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    import CochesService from './../services/CochesService';
    const service = new CochesService();

    //NECESITAMOS IMPORTAR axios y Global
    // import axios from 'axios';
    // import Global from './../Global';
    //AQUI PODEMOS DECLARAR VARIABLES PARA UTILIZARLAS 
    //DENTRO DE CUALQUIER METODO DEL COMPONENT
    //var urlApi = "https://apicochespaco.azurewebsites.net/";

    export default {
        name: 'CochesComponent',
        data(){
            return {
                coches: []
            }
        },
        methods: {
            loadCoches() {
                service.getCoches().then(result => {
                    this.coches = result
                });
                
            }
        },
        mounted() {
            this.loadCoches();
        }
    }
</script>

<style>
    #carta {
        margin-top: 50px;
    }
</style>