<template>
<Header></Header>
<h1 class="text-center pt-5 pb-1">Bienvenue sur la page de création d'une nouvelle paire</h1>
<div class="container-fluid px-1 py-5 mx-auto pt-1">
    <div class="row d-flex justify-content-center">
        <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
            
            <div class="card">
                <h5 class="text-center mb-4">Formulaire de création</h5>
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
                     <div class="row justify-content-between text-left pt-4">
                        <div class="form-group col-sm-6 flex-column d-flex">
                             <label class="form-control-label px-3">Taux de conversion
                                <span class="text-danger"> *</span>
                            </label> 
                            <input type="text" id="lname" name="lname" placeholder="Entrer le nouveau taux" v-model="formData.rate"> </div>
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

import axios from "axios";
import Header from "./Header.vue";

export default {
    data() {
        return {
            formData: {
                id_currency_from: "",
                id_currency_to: "",
                rate: "",
            },
            currencies: []
        };
    },
    methods: {
        createPair() {
            axios.post("http://127.0.0.1:8000/api/pairs", this.formData).then((response) => {
                this.$router.push("/home");
                
            }).catch((error) => {
            });
        }
    },
    mounted() {
        //API Call
        axios.get("http://127.0.0.1:8000/api/currencies").then((res) => {
            this.currencies = res.data.data;
        });
    },
    components: { Header }
}
</script>

<style>

</style>