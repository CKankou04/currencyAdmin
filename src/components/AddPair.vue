<template>
<div class="container-fluid px-1 py-5 mx-auto">
    <div class="row d-flex justify-content-center">
        <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
            
            <div class="card">
                <h5 class="text-center mb-4">Formulaire d'Ajout d'une nouvelle paire</h5>
                <form class="form-card" onsubmit="event.preventDefault()">
                   
                    <div class="row justify-content-between text-left mt-4">
                        <div class="form-group col-sm-6 flex-column d-flex"> 
                          <label class="form-control-label px-3">Dévise from<span class="text-danger"> *</span></label> 
                          <select id="form_need" v-model="formData.id_currency_from" name="id_currency_from" class="pt-3 rounded-1">
                                  <option v-for="currency in currencies" :key="currency.id" 
                                :value="currency.id">{{ currency.currency_code }}</option>
                              </select> 
                          </div>
                        <div class="form-group col-sm-6 flex-column d-flex"> 
                          <label class="form-control-label px-3">Dévise to<span class="text-danger"> *</span></label> 
                          <select id="form_need" class="pt-3 rounded-1" v-model="formData.id_currency_to" name="id_currency_to">
                                  <option v-for="currency in currencies" :key="currency.id" 
                                :value="currency.id">{{ currency.currency_code }}</option>
                                 
                              </select> 
                          </div>
                    </div>
                     <div class="row justify-content-between text-left">
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Taux de conversion<span class="text-danger"> *</span></label> <input type="text" id="lname" name="lname" placeholder="Entrer le taux" v-model="formData.rate"> </div>
                    </div>
                   
                    <div class="row justify-content-center mt-4">
                        <div class="form-group col-sm-6"> <button type="submit" @click.prevent="createPair" class="btn-block btn-primary">Enregistrer</button> </div>
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
import axios from "axios";
export default {
    data() {
        return {
            formData: {
                id_currency_from: '',
                id_currency_to: '',
                rate: '',
            },
            currencies: []
        }
    },
     methods: {
        createPair() {
            axios.post('http://127.0.0.1:8000/api/pairs', this.formData).then((response) => {
                console.log('Paire ajoutée avec succès!')
                this.$router.push('/')
                this.$toaster.success('Paire ajoutée avec succès!')
                alert('ajout avec succès')
            }).catch((error) => {
                console.log(error)
            });
        }
    },
mounted() {
    //API Call
    axios.get("http://127.0.0.1:8000/api/currencies").then((res) => {
      this.currencies = res.data.data;
      console.log(this.currencies);
    });
  }
}
</script>

<style>

</style>