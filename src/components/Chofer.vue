<template>
    <b-card
    :title="titulo"
    :img-src="img"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    border-variant="dark"
    class="mb-2"
  >
    <b-card-text>
      {{descripcion}}
    </b-card-text>

    <b-button variant="outline-dark" :to="{ name: 'profile', params: { carId: id } }">Ver</b-button>
  </b-card>
</template>
<script>
export default {
    props: {
        id:{
            type: String || Number,
            default: 0
        },
        img:{
            type: String,
            default: 'https://picsum.photos/600/300/?image=25'
        },
        titulo:{
            type: String
        },
        descripcion:{
            type: String
        }
    },
    data(){
        return {}
    }
}
</script>