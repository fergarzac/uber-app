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
                                <h3 class="mb-0">Usuarios</h3>
                            </div>
                            <b-modal size="sm" v-model="tipoUsuario" title="Tipo de Usuario" hide-footer>
                                <b-button style="width:100%;margin-bottom:10px" variant="primary" @click="seleccionarTipo(2)">Usuario</b-button>
                                <b-button style="width:100%" variant="primary" @click="seleccionarTipo(3)">Administrador</b-button>
                            </b-modal>
                            <b-modal v-model="agregarUsuario" title="Agregar Usuario" @ok="agregarUser">
                                <b-row>
                                    <b-col cols="12">
                                        <b-form-input cols="6" v-model="model.nombre" placeholder="Nombre" ></b-form-input>
                                    </b-col>
                                    <b-col cols="12">
                                        <b-form-input cols="6" v-model="model.usuario" placeholder="Usuario" ></b-form-input>
                                    </b-col>
                                    <b-col cols="12">
                                        <b-form-input cols="6" v-model="model.password" placeholder="Contraseña" ></b-form-input>
                                    </b-col>
                                </b-row>
                            </b-modal>
                            <div class="col text-right">
                                <b-row class="my-1">
                                    <b-col sm="4">
                                        <b-form-input id="input-small"  v-model="busqueda" size="sm" placeholder="Buscar" ></b-form-input>
                                    </b-col>
                                    <hr />
                                    <b-col sm="4">
                                        <b-button size="sm" v-b-modal.modal-agregar variant="outline-dark" @click="agregar">Agregar</b-button>
                                    </b-col>
                                </b-row>
                                    
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="row icon-examples">
                                <div class="col-lg-3 col-md-6" v-for="usuario in buscar" :key="usuario.idchofer">
                                    <Usuario v-bind:nombre="usuario.nombre" v-bind:usuario="usuario.usuario" v-bind:id="usuario.idusuario" />
                                </div>
                            </div>
                        </div>
                        <b-modal v-model="alerta" centered hide-footer title="Alerta">
                            <div class="d-block text-center">
                                <h3>{{messageAlert}}</h3>
                            </div>
                            <b-button class="mt-3" variant="primary" block @click="alerta = false">Ok</b-button>
                                            
                        </b-modal>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
  import Usuario from '@/components/Usuario';
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
        Usuario
    },
    beforeMount: function(){
        this.buscar = this.flota
    },
    data() {
      return {
        tipoUsuario: false,
        agregarUsuario:false,
        alerta: false,
        messageAlert: '',
        busqueda:'',
        buscar:[],
        tipo:0,
        model: {
            nombre:'',
            usuario:'',
            password:'',
        }
      }
    },
    methods: {
        agregar() {
            if(this.$store.state.tipo == '1'){
                this.tipoUsuario = true;
            }else{
                this.tipo = 3;
                this.tipoUsuario = false;
                this.agregarUsuario = true;
            }
        },
        agregarUser() {
            
            let formData = new FormData();
            formData.append('nombre', this.model.nombre);
            formData.append('usuario', this.model.usuario);
            formData.append('contraseña', this.model.password);
            formData.append('tipo', this.tipo);
            var grupo = this.tipo == 2 ? 0 : this.$store.state.grupo;
            formData.append('grupo', grupo);
            axios.post(URL_API + 'users/add', 
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            ).then((response) => {
                console.log(response.data);
                if(response.data['status'] == 1) {
                    this.messageAlert = 'Usuario añadido correctamente.';
                    this.alerta = true;
                }else{
                    if(response.data['code'] == '23000') {
                        this.messageAlert = 'Error, Usuario ya registrado.';
                    }else{
                        this.messageAlert = 'Ocurrio un error al agregar al usuario.';
                    }
                
                    this.alerta = true;
                }              
            }).catch(function (error) {
                console.log(error);
            });
        },
        seleccionarTipo(tipo){
            this.tipo = tipo;
            this.tipoUsuario = false;
            this.agregarUsuario = true;
        }
    }
  };
</script>
<style></style>