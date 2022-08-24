<template>
  <div class="container py-5">
    <div class="row py-5">
      <div class="col-lg-10 mx-auto">
        <div class="card rounded shadow border-0">
          <div class="card-body p-5 bg-white rounded">
            <div class="table-responsive">
              <table
                id="example"
                style="width: 100%"
                class="table table-striped table-bordered"
              >
                <thead>
                  <tr>
                    <th>Nb conversion</th>
                    <th>Id Paire</th>
                    <th>Nom de la Paire</th>
                    <th>Id_from</th>
                    <th>Id_to</th>
                    <th>Taux de change</th>
                    <th>Modifier</th>
                    <th>Supprimer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="pair in pairs" :key="pair.id">
                    <th> 23</th>
                    <td>{{pair.id}}</td>
                    <td>{{pair.currencyfrom.currency_code}}-{{pair.currencyto.currency_code}}</td>
                    <td>{{pair.id_currency_from}}</td>
                    <td>{{pair.id_currency_to}}</td>
                    <td>{{pair.rate}}</td>
                    <td>modif</td>
                    <td>supp</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//Bootstrap and jQuery libraries
//import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-vue/dist/bootstrap-vue.css";
import axios from 'axios';
export default {
 
  mounted(){
    //API Call
    axios
    .get("http://127.0.0.1:8000/api/pairs")
    .then((res)=>
    {
      this.pairs = res.data.pairs;
      console.log(this.pairs)
     
    })
  },
  data: function() {
        return {
            pairs:[]
        }
    },
}
</script>

<style>
body {
  min-height: 100vh;

  background-color: #ffe53b;
  background-image: linear-gradient(147deg, #ffe53b 0%, #ff2525 100%);
}
</style>
