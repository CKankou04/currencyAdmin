<template>

<Header></Header>
  <h1 class="text-center pb-5 pt-5">Bienvenue sur le tableau d'Administration</h1>
  <div class="d-flex justify-content-center gap-4 pb-3">
    <button class="rounded-2 border-1 grey brand"> 
      <RouterLink class="navbar-brand fw-bolder" to="addcurrency">Ajouter une devise</RouterLink>
    </button>
    <button class="rounded-2 border-1 grey brand">
      <RouterLink class="navbar-brand fw-bolder" to="addpair">Ajouter une Paire</RouterLink>
    </button>
</div>
  <div class="container-fluid px-1 py-5 mx-auto p-sm-0 m-sm-0" >
    <div class="row d-flex justify-content-center">
      <div class="col-xl-9 col-lg-9 col-md-8 col-sm-8 col-xs-1 text-center mx-auto ">
        <div class="card rounded shadow border-0 p-sm-0 m-sm-0">
          <div class="card-body  bg-white rounded ">
            <div class="table-responsive p-sm-0 m-sm-0">
              <table
                id="example"
                style="width: 100%"
                class="table table-striped table-bordered table-hover "
              >
                <thead>
                  <tr>
                    <th >décompte</th>

                    <th>Nom de la Paire </th>

                    <th>Taux de change</th>
                    <th>Modifier</th>
                    <th>Supprimer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="pair in pairs" :key="pair.id">
                    <th>{{ pair.count}}</th>

                    <td>
                      {{ pair.currencyfrom.currency_code }}-{{
                        pair.currencyto.currency_code
                      }}
                    </td>

                    <td>{{ pair.rate }}</td>
                    <td>
                     
                       <button type="button" class="bg-info" >
                         <RouterLink
                        :to="{ name: 'editpair', params:{ id: pair.id } }"
                        class="text-500 text-decoration-none text-black "
                        >Modifier</RouterLink
                      >
                        
                      </button>
                    </td>
                    <td>
                      <button
                        @click.prevent="pairDelete(pair.id, index)"
                        class="text-red-600 bg-danger"
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


import axios from "axios";
import { RouterLink } from "vue-router";
import Header from "./Header.vue";
export default {
    mounted() {
        //API Call
        axios.get("http://127.0.0.1:8000/api/pairs").then((res) => {
            this.pairs = res.data.pairs;
            
        });
    },
    methods: {
        pairDelete(id, index) {
            axios
                .delete(`http://127.0.0.1:8000/api/pairs/${id}`)
                .then((response) => { 
                document.location.reload();
                pairs.value.splice(index, 1);
                
            })
                .catch((error) => {
                
            });
        },
    },
    data() {
        return {
            pairs: [],
        };
    },
    components: { Header }
};
</script>

<style>
body {
  min-height: 100vh;

  background-color: silver;
  background-image: linear-gradient(147deg, silver 0%, silver 100%);
}
.brand:hover{
  background-color:teal;
  color: whitesmoke;
  font-weight: bold;
}
.header-dark{
  padding-bottom: 0%;
}

</style>
