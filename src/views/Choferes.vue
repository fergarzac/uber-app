<template>
    <div>
        <base-header type="gradient-dark" class="pb-6 pb-8 pt-5 pt-md-8">
            <!-- Card stats -->
        </base-header>

        <div class="container-fluid mt--7">
            <b-modal size="lg" id="modal-agregar" v-model="agregarModal" title="Agregar Vehiculo">
                <b-row>
                     <div class="col-sm-12 col-md-4 order-xl-1">
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
                    <div class="col-sm-12 col-md-8 order-xl-2">
                        <card shadow type="secondary">
                            <b-row class="my-1">
                                <b-col sm="12">
                                    <b-form-input id="input-small" v-model="marca" placeholder="Nombre" :state="marcastate"></b-form-input>
                                </b-col>
                            </b-row>
                            <b-row class="my-1">
                                <b-col sm="12">
                                    <b-form-input id="input-small" v-model="linea" placeholder="Direccion" :state="lineastate"></b-form-input>
                                </b-col>
                            </b-row>
                            <b-row class="my-1">
                                <b-col sm="6">
                                    <b-form-input id="input-small" v-model="version" placeholder="Telefono 1" :state="versionstate"></b-form-input>
                                </b-col>
                                <b-col sm="6">
                                    <b-form-input id="input-small" v-model="modelo" placeholder="Telefono 2" :state="modelostate"></b-form-input>
                                </b-col>
                                
                            </b-row>
                            <b-row class="my-1">
                                <b-col sm="6">
                                    <b-form-input id="input-small" v-model="color" placeholder="No.Licencia" :state="colorstate"></b-form-input>
                                </b-col>
                                <b-col sm="6">
                                <b-form-input id="input-small" v-model="serie" placeholder="Monto Fianza" :state="seriestate"></b-form-input>
                                </b-col>
                            </b-row>
                            <b-row class="my-1">
                                <b-col sm="12">
                                <b-form-input id="input-small" v-model="placas" placeholder="Referencia 1" :state="placasstate"></b-form-input>
                                </b-col>
                            </b-row>
                            <b-row class="my-1">
                                <b-col sm="12">
                                <b-form-input id="input-small" v-model="placas" placeholder="Referencia 2" :state="placasstate"></b-form-input>
                                </b-col>
                            </b-row>
                            <b-row class="my-1">
                                <b-col sm="12">
                                <b-form-input id="input-small" v-model="placas" placeholder="ID Uber" :state="placasstate"></b-form-input>
                                </b-col>
                            </b-row>
                        </card>
                    </div>
                </b-row>
            </b-modal>
            <div class="row">
                <div class="col">
                    <div class="card shadow">
                        <div class="card-header bg-transparent">
                            <div class="col text-left">
                                <h3 class="mb-0">Choferes</h3>
                            </div>
                            
                            <div class="col text-right">
                                <b-row class="my-1">
                                    <b-col sm="4">
                                        <b-form-input id="input-small"  v-model="busqueda" size="sm" placeholder="Buscar" @keyup="buscarChoferes"></b-form-input>
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
                                <div class="col-lg-3 col-md-6" v-for="(car, index) in flota" :key="car.name + index">
                                    <Chofer v-bind:titulo="car.name" v-bind:id="index" />
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
  import Chofer from '@/components/Chofer';
  export default {
    components: {
        Chofer
    },
    beforeMount: function(){
        this.buscar = this.flota
    },
    data() {
      return {
        busqueda: '',
        flota: [
            {name: 'Fernando'},
            {name: 'Alfonso'},
            {name: 'Jose Luis'},
            {name: 'Marco'},
            {name: 'Miguel'},
        ],
        buscar: [],
      }
    },
    methods: {
      buscarChoferes() {
          if(this.busqueda.length>0) {
              var self = this
              this.buscar = this.flota.filter(function(data) {
                return data.name.toUpperCase().includes(self.busqueda.toUpperCase());
            });
          }else {
              this.buscar = this.flota;
          }
      }
    }
  };
</script>
<style></style>
