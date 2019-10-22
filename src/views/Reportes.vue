<template>
    <div>
        <base-header type="gradient-dark" class="pb-6 pb-8 pt-5 pt-md-8">
            <!-- Card stats -->
            <div class="row">
                <div class="col-xl-12 col-lg-12">
                    <b-row>
                        <b-col sm="4" style="margin-bottom:10px">
                            <span style="color:#fff">Chofer</span>
                            <b-form-input placeholder="Buscar" v-model="buscar" @keyup="buscarChofer"></b-form-input>
                            <div class="container-search" v-if="buscando">
                                <span style="color:#000; font-size:8pt; border-botton: 1px #000 solid">Resultados</span>
                                <div class="item" v-for="res in resultados" :key="res.id" @click="seleccionar(res.idchofer)">
                                    {{res.nombre}}
                                </div>
                            </div>
                        </b-col>
                        <b-col sm="4" style="margin-bottom:10px" v-if="seleccionado">
                            <span style="color:#fff">Mes</span>
                            <b-form-input type="month"></b-form-input>
                        </b-col>
                    </b-row>

                </div>
                <div class="col-xl-3 col-lg-6" v-if="seleccionado">
                    <stats-card title="Ganancias"
                                type="gradient-green"
                                :sub-title="metricas !== undefined ? (metricas.ganancias == undefined || metricas.ganancias == '' ? '$ 0.00' : '$ '+ metricas.ganancias):  '$ 0.00'"
                                icon="ni ni-chart-bar-32"
                                class="mb-4 mb-xl-0"
                    >

                    </stats-card>

                </div>
                <div class="col-xl-3 col-lg-6" v-if="seleccionado">
                    <stats-card title="Efectivo"
                                type="gradient-orange"
                                :sub-title="metricas !== undefined ? (metricas.efectivo == undefined || metricas.efectivo == '' ? '$ 0.00' : '$ '+ metricas.efectivo):  '$ 0.00'"
                                icon="ni  ni-money-coins"
                                class="mb-4 mb-xl-0"
                    >

                    </stats-card>
                </div>
                <div class="col-xl-3 col-lg-6" v-if="seleccionado">
                    <stats-card title="Deposito"
                                type="gradient-red"
                                :sub-title="metricas !== undefined ? (metricas.deposito_bancario == undefined || metricas.deposito_bancario == '' ? '$ 0.00' : '$ '+ metricas.deposito_bancario):  '$ 0.00'"
                                icon="ni ni-credit-card"
                                class="mb-4 mb-xl-0"
                    >
                    </stats-card>
                </div>
                <div class="col-xl-3 col-lg-6" v-if="seleccionado">
                    <stats-card title="Multas"
                                type="gradient-info"
                                :sub-title="metricas !== undefined ? (metricas.multas == undefined || metricas.multas == '' ? '$ 0.00' : '$ '+ metricas.multas):  '$ 0.00'"
                                icon="ni ni-badge"
                                class="mb-4 mb-xl-0"
                    >
                    </stats-card>
                </div>
                <!--
                <div class="col-xl-3 col-lg-6" v-if="seleccionado">
                    <stats-card title="Estadisticas"
                                type="gradient-info"
                                sub-title="49,65%"
                                icon="ni ni-chart-bar-32"
                                class="mb-4 mb-xl-0"
                    >

                    </stats-card>
                </div> -->
            </div>
        </base-header>

        <div class="container-fluid mt--7">
            <div class="row" v-if="seleccionado">
                <div class="col">
                    <projects-table v-bind:data="dataTable" v-bind:url="urlApi" title="Información"></projects-table>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
  import axios from 'axios'
  import {URL_API} from "../constants/Constants";
  import ProjectsTable from './Tables/ProjectsTable'
  export default {
    name: 'tables',
    components: {
      ProjectsTable
    },
    data() {
        return {
           buscar: '',
           seleccionado: false,
           buscando: false,
           resultados: [
           ],
           dataTable: [],
           urlApi: '',
           metricas: []
        }
    },
    methods: {
        seleccionar(id) {
            this.urlApi = URL_API;
            this.buscando= false;
            this.seleccionado = true;
            let formData = new FormData();
            formData.append('id', id);
            axios.post(URL_API + 'revisiones/chofer' , 
                formData,
                {
                    headers: 
                    {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            ).then((response) => {
                console.log(response.data);
                this.dataTable = response.data['info'];
                this.metricas = response.data['metricas'];
                
            }).catch(function (error) {
                console.log(error);
            });
        },
        buscarChofer() {
            if(this.buscar.length >= 5) {
                this.buscando = true;
                let formData = new FormData();
                formData.append('nombre', this.buscar);
                axios.post(URL_API + 'choferes/buscar' , 
                    formData,
                    {
                        headers: 
                        {
                        'Content-Type': 'multipart/form-data'
                        }
                    }
                ).then((response) => {
                    this.resultados = response.data;
                }).catch(function (error) {
                    console.log(error);
                });
            }else {
                this.buscando = false;
            }

        }
    }
  };
</script>
<style>
.item {
    padding:5px;
    background: #eee;
    margin:2px;
    border-radius: 5px
}

.item:hover {
    background: #999;
    cursor: pointer;
}
.container-search {
    padding: 10px;
    background:rgb(231, 231, 231); 
    max-height:100px; 
    position: absolute; 
    top:65px; 
    left:15px; 
    border-radius: 0 0 10px 10px; 
    overflow-y: scroll; 
    width:93%; 
    z-index: 1
}
.container-search::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}



 /* Estilos barra (thumb) de scroll */
.container-search::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 4px;
}

.container-search::-webkit-scrollbar-thumb:active {
  background-color: #999999;
}

.container-search::-webkit-scrollbar-thumb:hover {
  background: #b3b3b3;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
}

 /* Estilos track de scroll */
.container-search::-webkit-scrollbar-track {
  background: #e1e1e1;
  border-radius: 4px;
}

.container-search::-webkit-scrollbar-track:hover, 
.container-search::-webkit-scrollbar-track:active {
  background: #d4d4d4;
}
</style>
