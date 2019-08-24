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
            if(vm.$cookie.get(ID_COOKIE) !== null) {
                    vm.$router.push('/dashboard');
            }
        });
    },
    name: 'login',
    data() {
      return {
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
                    this.$cookie.set(ID_COOKIE, response.data.token, 1);
                    this.$router.push('/dashboard');
                }
            }).catch(function (error) {
                console.log(error);
            });
        }
    }
  }
</script>
<style>
</style>
