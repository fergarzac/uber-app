<template>
        <div class="row justify-content-center">
            <div class="col-lg-5 col-md-7">
                <div class="card bg-dark shadow border-0">
                    <div class="card-body px-lg-5 py-lg-5">
                        <div class="text-center text-muted mb-4">
                            <small>Iniciar Sesion</small>
                        </div>
                        <form role="form">
                            <base-input class="input-group-alternative mb-3"
                                        placeholder="Usuario"
                                        addon-left-icon="ni ni-circle-08"
                                        v-model="model.usuario">
                            </base-input>

                            <base-input class="input-group-alternative"
                                        placeholder="Contraseña"
                                        type="password"
                                        addon-left-icon="ni ni-lock-circle-open"
                                        v-model="model.password">
                            </base-input>

                            <base-checkbox class="custom-control-alternative">
                                <span class="text-muted">Recordarme</span>
                            </base-checkbox>
                            <div class="text-center">
                                <base-button type="secondary" @click="login" class="my-4">Entrar</base-button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-6">
                        <a href="#" class="text-light"><small></small></a>
                    </div>
                    <div class="col-6 text-right">
                        <router-link to="/register" class="text-light"><small></small></router-link>
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
</template>
<script>
  import axios from 'axios'
  import {ID_COOKIE,ID_COOKIE_ENCRY, KEY, URL_API} from "../constants/Constants";
  export default {
    beforeRouteEnter(to, from, next) {
        next((vm) => {
            if(vm.$cookie.get(ID_COOKIE) !== null) {
                    vm.$router.push('/dashboard');
            }
        });
    },
    name: 'login',
    data() {
      return {
        alerta: false,
        messageAlert:'',
        model: {
          usuario: '',
          password: ''
        }
      }
    },
    methods: {
        login() {
            let formData = new FormData();
            formData.append('usuario', this.model.usuario);
            formData.append('contraseña', this.model.password);
            axios.post(URL_API + 'users/login' , 
                formData,
                {
                    headers: 
                    {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            ).then((response) => {
                console.log(response.data)
                if(response.data.status == 1) {
                    this.$store.commit('setId', response.data.data);
                    this.$store.commit('setNombre', response.data.nombre);
                    this.$store.commit('setGrupo', response.data.grupo);
                    this.$store.commit('setTipo', response.data.tipo);
                    this.$cookie.set(ID_COOKIE, response.data.token, 1);
                    var CryptoJS = require("crypto-js");
                    var ciphertext = CryptoJS.AES.encrypt(JSON.stringify({'id':response.data.data, 'nombre':response.data.nombre, 'grupo': response.data.grupo, 'tipo': response.data.tipo}), KEY);
                    this.$cookie.set(ID_COOKIE_ENCRY, ciphertext, 1);
                    this.$router.push('/dashboard');
                }else{
                    this.alerta = true;
                    this.messageAlert = "Usuario o contraseña erroneos.";
                }
            }).catch(function (error) {
                this.alerta = true;
                this.messageAlert = "Ocurrio un error en la base de datos.";
            });
        }
    }
  }
</script>
<style>
</style>
