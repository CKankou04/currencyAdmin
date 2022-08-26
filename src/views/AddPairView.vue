<template>
<div class="container-fluid px-1 py-5 mx-auto">
    <div class="row d-flex justify-content-center">
        <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
            
            <div class="card">
                <h5 class="text-center mb-4">Ajout d'une nouvelle paire</h5>
                <form class="form-card" onsubmit="event.preventDefault()">
                    <div class="row justify-content-between text-left">
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Taux de conversion<span class="text-danger"> *</span></label> <input type="text" id="lname" name="lname" placeholder="Entrer le taux" onblur="validate(2)"> </div>
                    </div>
                    <div class="row justify-content-between text-left mt-4">
                        <div class="form-group col-sm-6 flex-column d-flex"> 
                          <label class="form-control-label px-3">Dévise from<span class="text-danger"> *</span></label> 
                          <select id="form_need" name="need" onblur="validate(3)" class="pt-3 rounded-1">
                                  <option>--Select Your Issue--</option>
                                  <option >Request Invoice for order</option>
                                  <option >Request order status</option>
                                  <option >Haven't received cashback yet</option>
                                  <option >Other</option>
                              </select> 
                          </div>
                        <div class="form-group col-sm-6 flex-column d-flex"> 
                          <label class="form-control-label px-3">Dévise to<span class="text-danger"> *</span></label> 
                          <select id="form_need" name="need" class="pt-3 rounded-1">
                                  <option>--Select Your Issue--</option>
                                  <option >Request Invoice for order</option>
                                 
                              </select> 
                          </div>
                    </div>
                   
                    <div class="row justify-content-center mt-4">
                        <div class="form-group col-sm-6"> <button type="submit" class="btn-block btn-primary">Enregistrer</button> </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
  <AddPair />
</template>

<script>

import AddPair from '@/components/AddPair.vue'
export default {

}
</script>

<style>

</style>