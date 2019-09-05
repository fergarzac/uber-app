<template>
  <div class="card shadow"
       :class="type === 'dark' ? 'bg-default': ''">
    <div class="card-header border-0"
         :class="type === 'dark' ? 'bg-transparent': ''">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0" :class="type === 'dark' ? 'text-white': ''">
            {{title}}
          </h3>
        </div>
        <div class="col text-right">
          <base-button type="primary" size="sm">Ver todo</base-button>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table class="table align-items-center table-flush"
                  :class="type === 'dark' ? 'table-dark': ''"
                  :thead-classes="type === 'dark' ? 'thead-dark': 'thead-light'"
                  tbody-classes="list"
                  :data="data">
        <template slot="columns">
          <th>Fecha</th>
          <th>Imagenes</th>
          <th>Revision</th>
          <th></th>
        </template>

        <template slot-scope="{row}">
          <th scope="row">
            {{row.semana}}
          </th>
          <td>
            <div class="avatar-group">
              <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="Frente" v-b-tooltip.hover title="Frente">
                <img height="36" width="36" alt="Image placeholder" :src="JSON.parse(row.rutas_imagenes).fotofrente !== '' && JSON.parse(row.rutas_imagenes).fotofrente !== undefined ? url +'img/'+ JSON.parse(row.rutas_imagenes).fotofrente.split('.')[0] : 'https://via.placeholder.com/250'">
              </a>
              <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="Costado derecho" v-b-tooltip.hover title="Costado derecho" >
                <img height="36" width="36" alt="Image placeholder" :src="JSON.parse(row.rutas_imagenes).costadoderecho !== '' && JSON.parse(row.rutas_imagenes).costadoderecho !== undefined ? url +'img/'+ JSON.parse(row.rutas_imagenes).costadoderecho.split('.')[0] : 'https://via.placeholder.com/250'">
              </a>
              <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="Costado izquierdo" v-b-tooltip.hover title="Costado izquierdo">
                <img height="36" width="36" alt="Image placeholder" :src="JSON.parse(row.rutas_imagenes).costadoizquierdo !== '' && JSON.parse(row.rutas_imagenes).costadoizquierdo !== undefined ? url +'img/'+ JSON.parse(row.rutas_imagenes).costadoizquierdo.split('.')[0] : 'https://via.placeholder.com/250'">
              </a>
              <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="Motor" v-b-tooltip.hover title="Motor" >
                <img height="36" width="36" alt="Image placeholder" :src="JSON.parse(row.rutas_imagenes).fotomotor !== '' && JSON.parse(row.rutas_imagenes).fotomotor !== undefined ? url +'img/'+ JSON.parse(row.rutas_imagenes).fotomotor.split('.')[0] : 'https://via.placeholder.com/250'">
              </a>
              <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="Trasera" v-b-tooltip.hover title="Trasera">
                <img height="36" width="36" alt="Image placeholder" :src="JSON.parse(row.rutas_imagenes).fototrasera !== '' && JSON.parse(row.rutas_imagenes).fototrasera !== undefined ? url +'img/'+ JSON.parse(row.rutas_imagenes).fototrasera.split('.')[0] : 'https://via.placeholder.com/250'">
              </a>
              <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="Interior frente" v-b-tooltip.hover title="Interior frente">
                <img height="36" width="36" alt="Image placeholder" :src="JSON.parse(row.rutas_imagenes).fotointeriorfrente !== '' && JSON.parse(row.rutas_imagenes).fotointeriorfrente !== undefined ? url +'img/'+ JSON.parse(row.rutas_imagenes).fotointeriorfrente.split('.')[0] : 'https://via.placeholder.com/250'">
              </a>
              <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="Interior trasero" v-b-tooltip.hover title="Interior trasero">
                <img height="36" width="36" alt="Image placeholder" :src="JSON.parse(row.rutas_imagenes).fotointeriortrasero !== '' && JSON.parse(row.rutas_imagenes).fotointeriortrasero !== undefined ? url +'img/'+ JSON.parse(row.rutas_imagenes).fotointeriortrasero.split('.')[0] : 'https://via.placeholder.com/250'">
              </a>
              <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="Cajuela" v-b-tooltip.hover title="Cajuela">
                <img height="36" width="36" alt="Image placeholder" :src="JSON.parse(row.rutas_imagenes).fotocajuela !== '' && JSON.parse(row.rutas_imagenes).fotocajuela !== undefined ? url +'img/'+ JSON.parse(row.rutas_imagenes).fotocajuela.split('.')[0] : 'https://via.placeholder.com/250'">
              </a>
              <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="Tablero" v-b-tooltip.hover title="Tablero">
                <img height="36" width="36" alt="Image placeholder" :src="JSON.parse(row.rutas_imagenes).fototablero !== '' && JSON.parse(row.rutas_imagenes).fototablero !== undefined ? url +'img/'+ JSON.parse(row.rutas_imagenes).fototablero.split('.')[0] : 'https://via.placeholder.com/250'">
              </a>
            </div>
          </td>

          <td>
            <div class="d-flex align-items-center">
              <span class="completion mr-2">{{row.completion}}%</span>
              <div>
                <base-progress :type="row.statusType"
                               :show-percentage="false"
                               class="pt-0"
                               :value="row.completion"/>
              </div>
            </div>
          </td>

          <td class="text-right">
            <base-dropdown class="dropdown"
                           position="right">
              <a slot="title" class="btn btn-sm btn-icon-only text-light" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="ni ni-bold-down"></i>
                
              </a>

              <template>
                <a class="dropdown-item" target="_blank" :href="urlApi + 'revisiones/descargar/'+row.idrevision"><i class="ni ni-cloud-download-95"></i> Descargar</a>
              </template>
            </base-dropdown>
          </td>

        </template>

      </base-table>
    </div>

    <div class="card-footer d-flex justify-content-end"
         :class="type === 'dark' ? 'bg-transparent': ''">
      <base-pagination :total="30"></base-pagination>
    </div>

  </div>
</template>
<script>
  import axios from 'axios'
  import {URL_API} from "../../constants/Constants";
  export default {
    name: 'projects-table',
    props: {
      type: {
        type: String
      },
      title: String,
      data: Array,
      url: String
    },
    data() {
      return {
        urlApi: URL_API
      }
    },
    methods: {

    }
  }
</script>
<style>
</style>
