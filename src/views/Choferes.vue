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
                                <h3 class="mb-0">Choferes</h3>
                            </div>
                            
                            <div class="col text-right">
                                <b-row class="my-1">
                                    <b-col sm="4">
                                        <b-form-input id="input-small" size="sm" placeholder="Buscar"></b-form-input>
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
                                    <Car v-bind:titulo="car.name" v-bind:id="index" />
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
  export default {
    components: {
        Car
    },
    data() {
      return {
        flota: [
            {name: 'Dodge'},
            {name: 'Ford'},
            {name: 'Chevrolet'},
            {name: 'Chevrolet'},
            {name: 'Chevrolet'},
        ]
      }
    },
    methods: {
      
    }
  };
</script>
<style></style>
