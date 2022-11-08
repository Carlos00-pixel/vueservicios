import axios from 'axios'
import Global from './../Global'
export default class CochesService {
    //REALIZAMOS UN METODO PARA RECUPERAR TODOS LOS COCHES
    getCoches() {
        return new Promise(function(resolve) {
            var request = "/webresources/coches";
            var url = Global.urlCoches + request;

            var coches = [];
            axios.get(url).then(response => {
                coches = response.data;
                resolve(coches);
            })
        })
    }
}