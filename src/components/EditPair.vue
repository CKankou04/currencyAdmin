<template>
  <div class="container-fluid px-1 py-5 mx-auto">
    <div class="row d-flex justify-content-center">
        <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
            
            <div class="card">
                <h5 class="text-center mb-4">Modification d'une paire</h5>
                <form class="form-card" onsubmit="event.preventDefault()">
                   
                    <div class="row justify-content-between text-left mt-4">
                        <div class="form-group col-sm-6 flex-column d-flex"> 
                          <label class="form-control-label px-3">Dévise from<span class="text-danger"> *</span></label> 
                         <!--  <select id="form_need" name="need" onblur="validate(3)" class="pt-3 rounded-1">
                                  <option>--Select Your Issue--</option>
                                  <option >Request Invoice for order</option>
                                  <option >Request order status</option>
                                  <option >Haven't received cashback yet</option>
                                  <option >Other</option>
                              </select>  -->
                              <input type="text" id="lname" name="from"  v-model="pair.id_currency_from">
                          </div>
                        <div class="form-group col-sm-6 flex-column d-flex"> 
                          <label class="form-control-label px-3">Dévise to<span class="text-danger"> *</span></label> 
                        <!--   <select id="form_need" name="need" class="pt-3 rounded-1">
                                  <option>--Select Your Issue--</option>
                                  <option >Request Invoice for order</option>
                                 
                              </select>  -->
                               <input type="text" id="lname" name="to" v-model="pair.id_currency_to">
                          </div>
                    </div>
                     <div class="row justify-content-between text-left">
                        <div class="form-group col-sm-6 flex-column d-flex"> 
                            <label class="form-control-label px-3">Taux de conversion
                                <span class="text-danger"> *</span>
                            </label> 
                            <input type="text" id="lname" name="lname" v-model="pair.rate"> </div>
                    </div>
                   
                    <div class="row justify-content-center mt-4">
                        <div class="form-group col-sm-6"> <button type="submit" class="btn-block btn-primary">Enregistrer</button> </div>
                    </div>
                      
                </form>
            </div>
        </div>
    </div>
</div>

</template>

<script>
import { useRouter, useRoute } from 'vue-router';
import axios from 'axios';

export default {
    
    props:{

    },
    data(){
        return{
             pair: {
                id_currency_from: '',
                id_currency_to: '',
                rate: '',
            },
            route:useRoute(),
        }
    },
    methods:{

    },
    mounted(){
 // fetch api from laravel backend
      axios
        .get(`http://127.0.0.1:8000/api/pairs/${route.params.id}`, this.pair)
        .then((response) => {
            console.log(response.data)
          this.pair.id_currency_from = response.data.data.id_currency_from;
          this.pair.id_currency_to = response.data.data.id_currency_to;
          this.pair.rate = response.data.data.rate;
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    }

}
</script>

<style>

</style>