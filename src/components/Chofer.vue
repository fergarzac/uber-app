<template>
    <b-card
    :title="titulo"
    :img-src="perfil"
    img-alt="Image"
    img-height ='250px'
    tag="article"
    border-variant="dark"
    class="mb-2"
    text-variant="white"
  >
    <b-card-text>
      {{descripcion}}
    </b-card-text>

    <b-button variant="outline-dark" :to="{ name: 'profile', params: { choferId: id } }">Ver</b-button>
  </b-card>
</template>
<script>
import {URL_API} from "../constants/Constants";
import axios from 'axios'
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
        descripcion:{
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
                    this.perfil = 'https://via.placeholder.com/600/4';
                }else {
                    this.perfil = URL_API + 'img/' + name[0];
                }
           }).catch((error) => {
                this.perfil = 'https://via.placeholder.com/600/4';
          });
            
        }else {
            this.perfil = 'https://via.placeholder.com/600/4';
        }
    },
    
}
</script>