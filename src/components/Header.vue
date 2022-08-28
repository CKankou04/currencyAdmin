<template>
    <div>
        <div class="header-dark d-flex justify-content-around bg-dark pb-0 mb-0 pl-">
            <nav class="navbar navbar-dark navbar-expand-md">
                <div class="container d-flex">
                  <div class=" navbar-brand">
                    <img  src="../assets/logo1.png" width="50" class="text-start" alt="logo"/>
                    <span>Currency</span>
                  </div>
                  
             <RouterLink class="navbar-brand rounded-1" to="/home">Dashboard</RouterLink> 
                  
                    <div class="collapse navbar-collapse">
                        <form class="form-inline mr-auto" target="_self">
                            <div class="form-group"><input class="form-control search-field" type="search" name="search" id="search-field"></div>
                        </form>
                       <!--  <span class="navbar-text">
                          <RouterLink to="/" class="login">Connexion</RouterLink>
                        </span> -->
                        <button class="btn btn-danger" @click.prevent="logout">Logout</button>
                        </div>
                </div>
            </nav>
        </div>
    </div>
   
</template>

<script>
import { RouterLink } from 'vue-router';
import axios from 'axios';
window.axios = axios;
export default {
  data (){
    return{
      token: localStorage.getItem('token')
    }
  },
  mounted(){
    window.axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
  },
  methods:{
    logout(){
              axios.post('http://127.0.0.1:8000/api/logout').then((response) => {
                    localStorage.removeItem('token')
                    this.$router.push('/')
                    document.location.reload()
                    
                }).catch((errors) => {
                    
                })
            }
}
}
</script>

<style>


@media (min-width:768px) {
  .header-dark {
    padding-bottom:120px;
  }
}

.header-dark .navbar {
  background:transparent;
  padding-top:0;
  padding-bottom:0;
  color:#fff;
  border-radius:0;
  box-shadow:none;
  border:none;
}

@media (min-width:768px) {
  .header-dark .navbar {
    padding-top:.75rem;
    padding-bottom:.75rem;
  }
}

.header-dark .navbar .navbar-brand {
  font-weight:bold;
  color:inherit;
}

.header-dark .navbar .navbar-brand:hover {
  color:#f0f0f0;
}

.header-dark .navbar .navbar-collapse span {
  margin-top:5px;
}

.header-dark .navbar .navbar-collapse span .login {
  color:#d9d9d9;
  margin-right:.5rem;
  text-decoration:none;
}

.header-dark .navbar .navbar-collapse span .login:hover {
  color:#fff;
}

.header-dark .navbar .navbar-toggler {
  border-color:#747474;
}

.header-dark .navbar .navbar-toggler:hover, .header-dark .navbar-toggler:focus {
  background:none;
}

.header-dark .navbar .navbar-toggler {
  color:#eee;
}

.header-dark .navbar .navbar-collapse, .header-dark .navbar .form-inline {
  border-color:#636363;
}

@media (min-width: 992px) {
  .header-dark .navbar.navbar .navbar-nav .nav-link {
    padding-left:1.2rem;
    padding-right:1.2rem;
  }
}

.header-dark .navbar.navbar-dark .navbar-nav .nav-link {
  color:#d9d9d9;
}

.header-dark .navbar.navbar-dark .navbar-nav .nav-link:focus, .header-dark .navbar.navbar-dark .navbar-nav .nav-link:hover {
  color:#fcfeff !important;
  background-color:transparent;
}

.header-dark .navbar .navbar-nav > li > .dropdown-menu {
  margin-top:-5px;
  box-shadow:0 4px 8px rgba(0,0,0,.1);
  background-color:#fff;
  border-radius:2px;
}




.header-dark .navbar .action-button:hover {
  background:#269d9d;
}

.header-dark .navbar .form-inline label {
  color:#ccc;
}

.header-dark .navbar .form-inline .search-field {
  display:inline-block;
  width:80%;
  background:none;
  border:none;
  border-bottom:1px solid transparent;
  border-radius:0;
  color:#ccc;
  box-shadow:none;
  color:inherit;
  transition:border-bottom-color 0.3s;
}

.header-dark .navbar .form-inline .search-field:focus {
  border-bottom:1px solid #ccc;
}

.header-dark .hero {
  margin-top:60px;
}

@media (min-width:768px) {
  .header-dark .hero {
    margin-top:20px;
  }
}

.header-dark .hero h1 {
  color:#fff;
  font-family:'Bitter', serif;
  font-size:40px;
  margin-top:20px;
  margin-bottom:80px;
}

@media (min-width:768px) {
  .header-dark .hero h1 {
    margin-bottom:50px;
    line-height:1.5;
  }
}

.header-dark .hero .embed-responsive iframe {
  background-color:#666;
}


</style>