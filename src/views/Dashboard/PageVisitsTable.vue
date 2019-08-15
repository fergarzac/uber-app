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
          <th>Telefono</th>
          <th>No. Licencia</th>
        </template>

        <template slot-scope="{row}">
          <th scope="row">
            {{row.page}}
          </th>
          <td>
            {{row.visitors}}
          </td>
          <td>
            {{row.unique}}
          </td>
          <td>
            {{row.bounceRate}}
          </td>
        </template>

      </base-table>
    </div>

  </div>
</template>
<script>
  export default {
    name: 'page-visits-table',
    data() {
      return {
        tableData: [
          {
            page: 'Fernando',
            visitors: 'Mexicali',
            unique: '6131118512',
            bounceRate: '34234R'
          },
          {
            page: 'Armando',
            visitors: 'Mexicali',
            unique: '6131118512',
            bounceRate: '34234R'
          },
          {
            page: 'Jorge',
            visitors: 'Ensenada',
            unique: '6131118512',
            bounceRate: '34234R'
          },
          {
            page: 'Jose',
            visitors: 'Tijuana',
            unique: '6131118512',
            bounceRate: '34234R'
          },
          {
            page: 'Miguel',
            visitors: 'Constitucion',
            unique: '6131118512',
            bounceRate: '34234R'
          }
        ]
      }
    }
  }
</script>
<style>
</style>
