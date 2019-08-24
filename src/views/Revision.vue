<template>
    <div>
        <base-header type="gradient-dark" class="pb-6 pb-8 pt-5 pt-md-8">
            <!-- Card stats -->
        </base-header>

        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col">
                    <div class="card shadow">
                        <div class="card-header bg-transparent">
                            <div class="col text-left">
                                <h3 class="mb-0">Revision de Flotilla</h3>
                            </div>
                            
                            <div class="col text-right">
                                <b-row class="my-1">
                                    <b-col sm="4">
                                        <b-form-input id="input-small" v-model="busqueda" size="sm" placeholder="Buscar" @keyup="buscarFlotilla(0)"></b-form-input>
                                    </b-col>
                                    <hr />
                                </b-row>
                                    
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="row icon-examples">
                                <div class="col-lg-3 col-md-6" v-for="car in buscar" :key="car.name + car.idvehiculo">
                                    <Car v-bind:titulo="car.marca + ' '+ car.modelo" v-bind:id="car.idvehiculo" />
                                </div>
                                <div class="col-lg-12 col-md-12">
                                    <b-pagination
                                    v-model="currentPage"
                                    :total-rows="rows"
                                    :per-page="perPage"
                                    @change="changePage"
                                    ></b-pagination>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
  import Car from '@/components/Car';
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
    components: {
        Car
    },
    beforeMount: function(){
        this.buscar = this.flota
    },
    data() {
      return {
        currentPage: 1,
        perPage:8,
        agregarModal: false,
        fotoperfil: null,
        fileFactura: null,
        fileTarjeta: null,
        filePedimento: null,
        fileSeguro: null,
        buscar: [],
        busqueda: '',
        flota: [],
        marca: '',
        linea: '',
        modelo: '',
        color: '',
        version: '',
        serie: '',
        placas: '',
        km: '',
        precio: ''
      }
    },
    methods: {
      changeFoto(event) {
          this.fotoperfil = event.target.files;
      },
      enviarDatos() {
          let formData = new FormData();
          formData.append('file', this.fotoperfil);
      },
      buscarFlotilla(del = 0) {
          if(this.busqueda.length>0) {
              var self = this
              this.buscar = this.flota.filter(function(data) {
                return data.marca.toUpperCase().includes(self.busqueda.toUpperCase());
            });
          }else {
              this.buscar = this.flota.slice(del,(parseInt(del) + parseInt(this.perPage)));
          }
      },
      getVehiculos() {
          axios.get(URL_API + 'vehiculos/all').then((response) => {
              this.flota = response.data;
              this.buscarFlotilla();
           }).catch(function (error) {
            console.log(error);
          });
      },
      changePage() {
          this.buscarFlotilla(parseInt(this.currentPage - 1));
      },
    },
    computed: {
      marcastate() {
        return this.marca.length > 0 ? true : false
      },
      lineastate() {
        return this.linea.length > 0 ? true : false
      },
      colorstate() {
        return this.color.length > 0 ? true : false
      },
      versionstate() {
        return this.version.length > 0 ? true : false
      },
      modelostate() {
        return this.modelo.length > 0 ? true : false
      },
      seriestate() {
        return this.serie.length > 0 ? true : false
      },
      placasstate() {
        return this.placas.length > 0 ? true : false
      },
      kmstate() {
        return this.km.length > 0 ? true : false
      },
      preciostate() {
        return this.precio.length > 0 ? true : false
      },
      rows() {
        return this.flota.length
      },
    },
    beforeMount() {
        this.getVehiculos();
    }
  };
</script>
<style></style>
