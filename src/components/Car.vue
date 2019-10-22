<template>
    <b-card
    :title="titulo"
    :img-src="perfil"
    img-alt="Image"
    img-top
    img-height="250px"
    tag="article"
    style="max-width: 20rem;"
    border-variant="dark"
    class="mb-2"
  >
    <b-card-text>
      Placas: {{placas}} 
      <br>
      Serie: {{serie}}
    </b-card-text>

    <b-button variant="outline-dark" :to="{ name: 'perfil-car', params: { carId: id } }">Ver</b-button>
  </b-card>
</template>
<script>
import axios from 'axios'
  import {URL_API} from "../constants/Constants";
export default {
    props: {
        id:{
            type: String || Number,
            default: 0
        },
        img:{
            type: String,
        },
        titulo:{
            type: String
        },
        placas:{
            type: String
        },
        serie:{
            type: String
        }
    },
    data(){
        return {
            perfil: ''
        }
    },
    created: function() {
        if(this.img != null && this.img.length>0){
            var name = this.img.split('.');
            axios.get(URL_API + 'img/' + name[0]).then((response) => {
                if(response.data['status'] != undefined) {
                    this.perfil = 'https://via.placeholder.com/600/1';
                }else {
                    this.perfil = URL_API + 'img/' + name[0];
                }
           }).catch((error) => {
                this.perfil = 'https://via.placeholder.com/600/1';
          });
            
        }else {
            this.perfil = 'https://via.placeholder.com/600/1';
        }
    },
}
</script>