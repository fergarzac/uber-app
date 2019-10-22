<template>
    <b-card
    :title="nombre"
    tag="article"
    border-variant="dark"
    class="mb-2"
    text-variant="white"
  >
    <b-card-text>
      {{usuario}}
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
        usuario:{
            type: String
        },
        nombre:{
            type: String
        }
    },
    data(){
        return {
            perfil: ''
        }
    }
    
}
</script>