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

                    <th>Nom de la Paire</th>

                    <th>Taux de change</th>
                    <th>Modifier</th>
                    <th>Supprimer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="pair in pairs" :key="pair.id">
                    <th>23</th>

                    <td>
                      {{ pair.currencyfrom.currency_code }}-{{
                        pair.currencyto.currency_code
                      }}
                    </td>

                    <td>{{ pair.rate }}</td>
                    <td>
                      <RouterLink
                        :to="{ name: 'pair.edit', params: { id: pair.id } }"
                        class="text-green-500"
                        >Modifier</RouterLink
                      >
                    </td>
                    <td>
                      <button
                        @click.prevent="pairDelete(pair.id, index)"
                        class="text-red-600"
                      >
                        Supprimer
                      </button>
                    </td>
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
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import axios from "axios";
import { RouterLink } from "vue-router";
export default {
  mounted() {
    //API Call
    axios.get("http://127.0.0.1:8000/api/pairs").then((res) => {
      this.pairs = res.data.pairs;
      console.log(this.pairs);
    });
  },
  methods: {
    pairDelete(id, index) {
      axios
        .delete(`http://127.0.0.1:8000/api/pairs/${id}`)
        .then((response) => {
          console.log(response)
          document.location.reload()
          pairs.value.splice(index, 1);
          
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    },
  },
  data() {
    return {
      pairs: [],
    };
  },
};
</script>

<style>
body {
  min-height: 100vh;

  background-color: silver;
  background-image: linear-gradient(147deg, silver 0%, silver 100%);
}
</style>
