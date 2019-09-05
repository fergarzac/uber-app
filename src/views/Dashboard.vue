<template>
    <div>
        <base-header type="gradient-dark" class="pb-6 pb-8 pt-5 pt-md-8">
            <!-- Card stats -->
            <div class="row">
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Flotilla"
                                type="gradient-red"
                                :sub-title="total_flotilla"
                                icon="ni ni-bus-front-12"
                                class="mb-4 mb-xl-0"
                    >
                    </stats-card>
                </div>
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Choferes"
                                type="gradient-orange"
                                :sub-title="total_choferes"
                                icon="ni ni-chart-pie-35"
                                class="mb-4 mb-xl-0"
                    >

                    </stats-card>
                </div>
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Ingresos"
                                type="gradient-green"
                                :sub-title="total_ganancias"
                                icon="ni ni-money-coins"
                                class="mb-4 mb-xl-0"
                    >

                    </stats-card>

                </div>
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Estadisticas"
                                type="gradient-info"
                                sub-title="49,65%"
                                icon="ni ni-chart-bar-32"
                                class="mb-4 mb-xl-0"
                    >

                    </stats-card>
                </div>
            </div>
        </base-header>

        <!--Charts
        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col-xl-8 mb-5 mb-xl-0">
                    <card type="default" header-classes="bg-transparent">
                        <div slot="header" class="row align-items-center">
                            <div class="col">
                                <h6 class="text-light text-uppercase ls-1 mb-1">Overview</h6>
                                <h5 class="h3 text-white mb-0">Sales value</h5>
                            </div>
                            <div class="col">
                                <ul class="nav nav-pills justify-content-end">
                                    <li class="nav-item mr-2 mr-md-0">
                                        <a class="nav-link py-2 px-3"
                                           href="#"
                                           :class="{active: bigLineChart.activeIndex === 0}"
                                           @click.prevent="initBigChart(0)">
                                            <span class="d-none d-md-block">Month</span>
                                            <span class="d-md-none">M</span>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link py-2 px-3"
                                           href="#"
                                           :class="{active: bigLineChart.activeIndex === 1}"
                                           @click.prevent="initBigChart(1)">
                                            <span class="d-none d-md-block">Week</span>
                                            <span class="d-md-none">W</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <line-chart
                                :height="350"
                                ref="bigChart"
                                :chart-data="bigLineChart.chartData"
                                :extra-options="bigLineChart.extraOptions"
                        >
                        </line-chart>

                    </card>
                </div>

                <div class="col-xl-4">
                    <card header-classes="bg-transparent">
                        <div slot="header" class="row align-items-center">
                            <div class="col">
                                <h6 class="text-uppercase text-muted ls-1 mb-1">Performance</h6>
                                <h5 class="h3 mb-0">Total orders</h5>
                            </div>
                        </div>

                        <bar-chart
                                :height="350"
                                ref="barChart"
                                :chart-data="redBarChart.chartData"
                        >
                        </bar-chart>
                    </card>
                </div>
            </div>
            End charts-->

            <!--Tables-->
            <div class="mt-5">
                <div class="col-xl-12 mb-5 mb-xl-0">
                    <page-visits-table></page-visits-table>
                </div>
            </div>
            <!--End tables-->
        </div>
</template>
<script>
  // Charts
  import * as chartConfigs from '@/components/Charts/config';

  // Tables
  import PageVisitsTable from './Dashboard/PageVisitsTable';
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
      PageVisitsTable,
    },
    data() {
      return {
        total_flotilla: '0',
        total_choferes: '0',
        total_ganancias: '$ 0.00',
        bigLineChart: {
          allData: [
            [0, 20, 10, 30, 15, 40, 20, 60, 60],
            [0, 20, 5, 25, 10, 30, 15, 40, 40]
          ],
          activeIndex: 0,
          chartData: {
            datasets: [],
            labels: [],
          },
          extraOptions: chartConfigs.blueChartOptions,
        },
        redBarChart: {
          chartData: {
            labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
              label: 'Sales',
              data: [25, 20, 30, 22, 17, 29]
            }]
          }
        }
      };
    },
    methods: {
      initBigChart(index) {
        let chartData = {
          datasets: [
            {
              label: 'Performance',
              data: this.bigLineChart.allData[index]
            }
          ],
          labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        };
        this.bigLineChart.chartData = chartData;
        this.bigLineChart.activeIndex = index;
      },
      getChoferes() {
          axios.get(URL_API + 'choferes/all').then((response) => {
              this.total_choferes = ''+ response.data.length;
           }).catch(function (error) {
            console.log(error);
          });
      },
      getVehiculos() {
          axios.get(URL_API + 'vehiculos/all').then((response) => {
              this.total_flotilla = ''+ response.data.length;
           }).catch(function (error) {
              console.log(error);
          });
      },
      getIngresos() {
        var d = new Date();
        let formData = new FormData();
        formData.append('mes', (d.getMonth() + 1));
        axios.post(URL_API + 'revisiones/ingresos', 
        formData,
          {
            headers: 
            {
              'Content-Type': 'multipart/form-data'
            }
          }).then((response) => {
            var ganancias = response.data['ganancias'];
            var centavos = response.data['ganancias'].split('.')[1];
            this.total_ganancias = '$ ' + ganancias + (ganancias.includes('.') ? (centavos.length >= 2 ? '' : '0'): '.00')
            console.log(response.data);
           }).catch(function (error) {
              console.log(error);
          });
      },
    },
    mounted() {
      this.initBigChart(0);
      this.getChoferes();
      this.getVehiculos();
      this.getIngresos();
    }
  };
</script>
<style></style>
