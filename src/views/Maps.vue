<template>
    <div>

        <base-header type="gradient-dark" class="pb-6 pb-8 pt-5 pt-md-8">
        </base-header>

        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col">
                    <div class="card shadow border-0">
                        <div style="position:absolute; top:5px;left: 10px; z-index:100">
                          <base-input class="input-group-alternative"
                            placeholder="Direccion"
                            style="display:inline-block"
                            type="text"
                            v-model="buscar">
                          </base-input>
                          <b-button style="display:inline-block:float: right; margin-left:5px" variant="outline-dark" @click="buscarDomicilio" class="my-4">Buscar</b-button>
                        </div>
                        <div id="map-canvas" class="map-canvas" data-lat="40.748817" data-lng="-73.985428" style="height: 600px;"></div>
                    </div>
                </div>
            </div>
            <div class="row">
              <input type="hidden" id="coordenadas" />
              <b-button v-if="isUpdate"  variant="outline-dark" @click="saveCoordenadas" class="my-4">Actualizar Ubicación</b-button>
            </div>
        </div>
    </div>
</template>
<script>
  import axios from 'axios'
  import {ID_COOKIE, URL_API} from "../constants/Constants";
  
  export default {
    beforeRouteEnter(to, from, next) {
        next((vm) => {
            if(vm.$cookie.get(ID_COOKIE) === null) {
                    vm.$router.push('/');
            }
        });
    },
    beforeMount() {
        this.idChofer = this.$route.params.choferId;
        this.getData();
    },
    data() {
      return {
        buscar: '',
        geojson: {
          type: 'FeatureCollection',
          features: [{
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-115.466873, 32.662132]
            },
            properties: {
              title: 'Mapbox',
              description: 'Washington, D.C.'
            }
          }]
        },
        ubicacion: '',
        idChofer: '',
        nuevascoordenadas: '',
        isUpdate: false,
        map: null
      }
    },
    methods: {
      getData() {
            axios.post(URL_API + 'choferes/id',
            {
                'id' : this.idChofer
            },
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
            ).then((response) => {
                if(response.data.status == 1) {
                  this.ubicacion = response.data.data['ubicacion'];
                  this.loadMap();
                }
           }).catch(function (error) {
            console.log(error);
          });
        },
        saveCoordenadas() {
          var coordenadas = document.getElementById('coordenadas').value;
          let formData = new FormData();
          formData.append('ubicacion', coordenadas);
          formData.append('id', this.idChofer);
          axios.post(URL_API + 'choferes/update' ,
            formData,
            {
              headers:
              {
                'Content-Type': 'multipart/form-data'
              }
            }
          ).then((response) => {
            if(response.data.status == 1) {
              alert('Ubicacion actualizada');
              this.isUpdate = false;
            }else {
              alert('Ocurrio un error con la actualizacion');
            }
          }).catch(function (error) {
            console.log(error);
          });
        },
        buscarDomicilio() {
          
          axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/'+this.buscar+'.json?types=address&proximity=-122.39738575285674,37.7925147111369453&access_token=pk.eyJ1IjoiZmVybmFuZG9nYXJ6YSIsImEiOiJjazBjbHg0Y3QwM3dnM2RtbWswczNld2E2In0.g3wNjOEBGNSm6ebPQF9U3w').then((response) => {
            console.log(response.data);
            var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
            var el = document.createElement('div');
            el.className = 'marker';
            let marca = new mapboxgl.Marker(el)
              .setLngLat(response.data.features[0].geometry.coordinates)
              .addTo(this.map);
          }).catch(function (error) {
            console.log(error);
          });
        },
        loadMap() {
          var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
          if(this.ubicacion !== null && this.ubicacion !== undefined && this.ubicacion !== '') {
            var coord = this.ubicacion.replace('LngLat(', '');
            coord = coord.replace(')', '');
            coord = coord.split(',');
            var ubi = [parseFloat(coord[0]) , parseFloat(coord[1])];
            var zoom = 12;
          }else {
            var ubi = [-77.032, 38.913];
            var zoom = 3;
          }
          
          //let map = document.getElementById('map-canvas');
          mapboxgl.accessToken = 'pk.eyJ1IjoiZmVybmFuZG9nYXJ6YSIsImEiOiJjazBjbHg0Y3QwM3dnM2RtbWswczNld2E2In0.g3wNjOEBGNSm6ebPQF9U3w';
          this.map = new mapboxgl.Map({
            container: 'map-canvas',
            style: 'mapbox://styles/mapbox/light-v10',
            center: ubi,
            zoom: zoom
          });
          var el = document.createElement('div');
          el.className = 'marker';
          
          let marca;
          if(this.ubicacion !== null && this.ubicacion !== undefined && this.ubicacion !== '') {
            marca = new mapboxgl.Marker(el)
              .setLngLat(ubi)
              .addTo(this.map);
          }else {
            marca = new mapboxgl.Marker(el);
          }
          this.map.on('click',((e) => {
            marca.setLngLat(e.lngLat.wrap()).addTo(this.map);
            var input = document.getElementById('coordenadas');
            input.value = e.lngLat.wrap();
            this.isUpdate= true;
          }));
        }
    },
  }
</script>
<style>
.marker {
  background-image: url('../assets/mapbox-icon.png');
  background-size: cover;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
}
</style>
