<template>
  <div class="card">
    <div class="card-header border-0">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0">Choferes</h3>
        </div>
        <div class="col text-right">
          <a href="#!" class="btn btn-sm btn-primary">Ver todo</a>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table thead-classes="thead-light"
                  :data="tableData">
        <template slot="columns">
          <th>Nombre</th>
          <th>Dirección</th>
          <th>Telefono(s)</th>
          <th>No. Licencia</th>
        </template>

        <template slot-scope="{row}">
          <th scope="row">
            {{row.nombre}}
          </th>
          <td>
            {{row.direccion}}
          </td>
          <td>
            {{row.telefono_1 + (row.telefono_2 !== '' ? ' / ' + row.telefono_2 : '')}}
          </td>
          <td>
            {{row.no_licencia}}
          </td>
        </template>

      </base-table>
    </div>

  </div>
</template>
<script>
  import axios from 'axios'
  import {URL_API} from "../../constants/Constants";
  export default {
    name: 'page-visits-table',
    data() {
      return {
        tableData: []
      }
    },
    methods: {
      getChoferes() {
          axios.get(URL_API + 'choferes/all').then((response) => {
              console.log(response.data);
              this.tableData = response.data;
           }).catch(function (error) {
            console.log(error);
          });
      },
    },
    beforeMount: function() {
      this.getChoferes();
    }
  }
</script>
<style>
</style>
