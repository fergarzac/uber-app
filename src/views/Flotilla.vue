<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
            <!-- Card stats -->
        </base-header>

        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col">
                    <div class="card shadow">
                        <div class="card-header bg-transparent">
                            <h3 class="mb-0">Flotilla</h3>
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
        ]
      }
    },
    methods: {
      
    }
  };
</script>
<style></style>
