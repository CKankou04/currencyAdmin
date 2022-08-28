<template>
<Header></Header>
<h1 class="text-center pt-5 pb-1">Bienvenue sur la page de création d'une nouvelle devise</h1>
<div class="container-fluid px-1 py-5 mx-auto pt-1">
    <div class="row d-flex justify-content-center">
      <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
        
        <div class="card">
          <h5 class="text-center mb-4">Formulaire de Création</h5>
          <form class="form-card" onsubmit="event.preventDefault()">
            <div class="row justify-content-between text-left">
              <div class="form-group col-sm-6 flex-column d-flex">
                <label class="form-control-label px-3"
                  >Nom de la dévise<span class="text-danger"> *</span></label
                >
                <input
                  type="text"
                  id="currencyName"
                  name="currencyName"
                  placeholder="Enter le nom"
                  v-model="formData.name"
                 
                />
              </div>
              <div class="form-group col-sm-6 flex-column d-flex">
                <label class="form-control-label px-3"
                  >Code de la dévise<span class="text-danger"> *</span></label
                >
                <input
                  type="text"
                  id="currencyCode"
                  name="currencyCode"
                  placeholder="Entrer le code"
                  v-model="formData.currency_code"
                
                />
              </div>
            </div>
            
            <div class="row justify-content-between text-left pt-4">
              <div class="form-group col-12 flex-column d-flex">
                <label class="form-control-label px-3"
                  >Symbole de dévise<span class="text-danger">
                    *</span
                  ></label
                >
                <input
                  type="text"
                  id="symbol"
                  name="symbol"
                  placeholder=""
                  v-model="formData.symbol"
                 
                />
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="form-group col-sm-6">
                <button type="submit" class="btn-block btn-primary" @click.prevent="create">
                  Enregistrer
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import axios from 'axios';
import Header from "./Header.vue";
export default {
    data() {
        return {
            formData: {
                name: "",
                currency_code: "",
                symbol: "",
            }
        };
    },
    methods: {
        create() {
            axios.post("http://127.0.0.1:8000/api/currencies", this.formData).then((response) => {
                console.log("succes");
                this.$router.push("/home");
                this.$toaster.success("dévise ajoutée avec succès!");
            }).catch((error) => {
                console.log(error);
            });
        }
    },
    components: { Header }
};
</script>

<style>

.card {
  padding: 30px 40px;
  margin-top: 60px;
  margin-bottom: 60px;
  border: none !important;
  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.2);
}
.blue-text {
  color: #00bcd4;
}
.form-control-label {
  margin-bottom: 0;
}
input,
textarea,
button {
  padding: 8px 15px;
  border-radius: 5px !important;
  margin: 5px 0px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  font-size: 18px !important;
  font-weight: 300;
}
input:focus,
textarea:focus {
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  border: 1px solid #00bcd4;
  outline-width: 0;
  font-weight: 400;
}
.btn-block {
  text-transform: uppercase;
  font-size: 15px !important;
  font-weight: 400;
  height: 43px;
  cursor: pointer;
}
.btn-block:hover {
  color: #fff !important;
}
button:focus {
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  outline-width: 0;
}
</style>
