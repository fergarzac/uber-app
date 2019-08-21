<template>
    <div>
        <base-header type="gradient-dark" class="pb-6 pb-8 pt-5 pt-md-8">
            <!-- Card stats -->
        </base-header>

        <div class="container-fluid mt--7">
            <b-modal size="xl" id="modal-agregar" v-model="agregarModal" title="Agregar Vehiculo" @ok="agregarVehiculo">
                <b-row>
                     <div class="col-sm-12 col-md-2 order-xl-1">
                         <b-col cols="12">
                            <b-img src="https://picsum.photos/125/125/?image=58" rounded alt="Rounded image"></b-img>
                        </b-col>
                        <hr />
                        <b-col cols="12">
                            <b-form-file
                                id="fotoperfil"
                                ref="fotoperfil"
                                v-model="fotoperfil"
                                accept="image/*"
                                style="display:none"
                                @change="changeFoto"
                            ></b-form-file>
                            <b-button size="sm" v-b-modal.modal-agregar variant="outline-dark" onclick="document.getElementById('fotoperfil').click();">Seleccionar Imagen</b-button>
                        </b-col>
                     </div>
                    <div class="col-sm-12 col-md-5 order-xl-3">
                        <card shadow type="secondary">
                            <b-row class="my-1">
                                <b-col sm="6">
                                    <b-form-input id="input-small" v-model="marca" placeholder="Marca" :state="marcastate"></b-form-input>
                                </b-col>
                                <b-col sm="6">
                                    <b-form-input id="input-small" v-model="linea" placeholder="Linea" :state="lineastate"></b-form-input>
                                </b-col>
                            </b-row>
                            <b-row class="my-1">
                                <b-col sm="4">
                                    <b-form-input id="input-small" v-model="version" placeholder="Version" :state="versionstate"></b-form-input>
                                </b-col>
                                <b-col sm="4">
                                    <b-form-input id="input-small" v-model="modelo" placeholder="Modelo" :state="modelostate"></b-form-input>
                                </b-col>
                                <b-col sm="4">
                                    <b-form-input id="input-small" v-model="color" placeholder="Color" :state="colorstate"></b-form-input>
                                </b-col>
                            </b-row>
                            <b-row class="my-1">
                                <b-col sm="12">
                                <b-form-input id="input-small" v-model="serie" placeholder="Serie" :state="seriestate"></b-form-input>
                                </b-col>
                            </b-row>
                            <b-row class="my-1">
                                <b-col sm="12">
                                <b-form-input id="input-small" v-model="placas" placeholder="Placas" :state="placasstate"></b-form-input>
                                </b-col>
                            </b-row>
                            <b-row class="my-1">
                                <b-col sm="6">
                                    <b-input-group prepend="KM">
                                        <b-form-input v-model="km" placeholder="Kilometros" ></b-form-input>
                                    </b-input-group>
                                </b-col>
                                <b-col sm="6">
                                    <b-input-group prepend="$" append=".00">
                                        <b-form-input v-model="precio" ></b-form-input>
                                    </b-input-group>
                                </b-col>
                            </b-row>
                        </card>
                    </div>
                    <div class="col-sm-12 col-md-5 order-xl-2">
                        <card shadow type="secondary">
                            <b-form-file
                                v-model="fileFactura"
                                placeholder="Factura"
                                drop-placeholder="Factura"
                            ></b-form-file>
                            <b-form-file
                                v-model="fileTarjeta"
                                placeholder="Tarjeta de Circulacion"
                                drop-placeholder="Tarjeta de Circulacion"
                            ></b-form-file>
                            <b-form-file
                                v-model="fileSeguro"
                                placeholder="Seguro"
                                drop-placeholder="Seguro"
                            ></b-form-file>
                            <b-form-file
                                v-model="filePedimento"
                                placeholder="Pedimento"
                                drop-placeholder="Pedimento"
                            ></b-form-file>
                        </card>
                    </div>
                    
                </b-row>
            </b-modal>
            <div class="row">
                <div class="col">
                    <div class="card shadow">
                        <div class="card-header bg-transparent">
                            <div class="col text-left">
                                <h3 class="mb-0">Flotilla</h3>
                            </div>
                            
                            <div class="col text-right">
                                <b-row class="my-1">
                                    <b-col sm="4">
                                        <b-form-input id="input-small" v-model="busqueda" size="sm" placeholder="Buscar" @keyup="buscarFlotilla"></b-form-input>
                                    </b-col>
                                    <hr />
                                    <b-col sm="4">
                                        <b-button size="sm" v-b-modal.modal-agregar variant="outline-dark">Agregar</b-button>
                                    </b-col>
                                </b-row>
                                    
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="row icon-examples">
                                <div class="col-lg-3 col-md-6" v-for="car in buscar" :key="car.name + car.idvehiculo">
                                    <Car v-bind:titulo="car.marca + ' '+ car.modelo" v-bind:id="car.idvehiculo" />
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
    data() {
      return {
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
      buscarFlotilla() {
          if(this.busqueda.length>0) {
              var self = this
              this.buscar = this.flota.filter(function(data) {
                return data.marca.toUpperCase().includes(self.busqueda.toUpperCase());
            });
          }else {
              this.buscar = this.flota;
          }
      },
      agregarVehiculo() {
            axios.post(URL_API + 'vehiculos/add' , 
                {
                    'marca' : this.marca, 'linea' : this.linea, 'modelo' : this.modelo, 'color' : this.color, 'version' : this.version, 'serie' : this.serie, 'placas' : this.placas
                },
                {
                    headers: 
                    {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }
            ).then((response) => {
                if(response.data.status == 1) {
                    this.marca = '';
                    this.linea = '';
                    this.modelo = '';
                    this.color = '';
                    this.version = '';
                    this.serie = '';
                    this.placas = '';
                    this.getVehiculos();
                    alert('Agregado');
                }else {
                    this.agregarModal = true;
                    alert('Error');
                }
            }).catch(function (error) {
                console.log(error);
            });
      },
      getVehiculos() {
          axios.get(URL_API + 'vehiculos/all').then((response) => {
              this.flota = response.data;
              this.buscarFlotilla();
           }).catch(function (error) {
            console.log(error);
          });
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
      
    },
    beforeMount() {
        this.getVehiculos();
    }
  };
</script>
<style></style>
