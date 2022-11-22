<template>
    <div class="container-flud">
        <div v-show="showSpinner" class="loading" >
            <div class="spinner-border text-primary spinner-center" role="status">
            </div>
        </div>
        <section class="vh-100">
            <div class="container-fluid h-custom">
              <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-md-9 col-lg-6 col-xl-5">
                  <img src="../assets/images/draw2.webp" class="img-fluid"
                    alt="Sample image">
                </div>
                <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                  <form @submit.prevent="login">
                    <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                      <p class="lead fw-normal mb-0 me-3 title">{{$t('sign_in.title')}}</p>
                      <button type="button" class="btn btn-light btn-floating mx-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                        </svg>
                      </button>
          
                      <button type="button" class="btn btn-light btn-floating mx-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                          <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                        </svg>
                      </button>
          
                      <button type="button" class="btn btn-light btn-floating mx-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                      </button>
                      <ChangeLanguageVue/>
                    </div>
          
                    <div class="divider d-flex align-items-center my-4">
                      <p class="text-center fw-bold mx-3 mb-0">{{$t('or')}}</p>
                    </div>
          
                    <!-- Email input -->
                    <div class="form-floating mb-4">
                      <input type="text" id="form3Example3" class="form-control" :class="{'error': validate.email.status}"
                        placeholder="Enter a valid email address" v-model="user.email"/>
                      <label class="form-label" for="form3Example3"> {{$t('login.email')}} </label>
                      <small v-show="validate.email.status">{{ $t('login.error.email.required') }}</small>
                      <small v-show="validate.email.invalid">{{ $t('login.error.email.email') }}</small>
                    </div>
          
                    <!-- Password input -->
                    <div class="form-floating mb-3">
                      <input type="password" id="form3Example4" class="form-control"
                        placeholder="Enter password" v-model="user.password" />
                      <label class="form-label" for="form3Example4">{{ $t('login.password') }}</label>
                      <small v-show="validate.password.status">{{$t('login.error.password.required')  }}</small>
                      <small v-show="validate.password.invalid">{{$t('login.error.password.minlength')  }}</small>
                    </div>
          
                    <div class="d-flex justify-content-between align-items-center">
                      <!-- Checkbox -->
                      <div class="form-check mb-0">
                        <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                        <label class="form-check-label" for="form2Example3">
                          {{$t('login.rememberMe')}}
                        </label>
                      </div>
                      <a href="#!" class="text-body">{{$t('login.forgot')}}</a>
                    </div>
          
                    <div class="text-center text-lg-start mt-4 pt-2">
                      <button type="submit" class="btn btn-primary btn-lg"
                        style="padding-left: 2.5rem; padding-right: 2.5rem;">{{$t('login.title')}}</button>
                      <p class="small fw-bold mt-2 pt-1 mb-0">{{$t('sign_in.status')}} <a href="#"
                          class="link-danger" @click.prevent="this.$router.push({name:'CreateAccount'})"> {{$t('sign_in.action')}} </a></p>
                    </div>
          
                  </form>
                </div>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
              <!-- Copyright -->
              <div class="text-white  mb-3 mb-md-0 footer">
                Copyright © 2022. All rights reserved.
              </div>
              <!-- Copyright -->
          
              <!-- Right -->
              <div>
                <a href="#!" class="text-white me-4">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#!" class="text-white me-4">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#!" class="text-white me-4">
                  <i class="fab fa-google"></i>
                </a>
                <a href="#!" class="text-white">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
              <!-- Right -->
            </div>
          </section>
    </div>
</template>
<script>
import axios from 'axios';
import ChangeLanguageVue from '@/components/ChangeLanguage.vue';
export default {
    name: "LoginAndRegisterPage",
    components: {
        ChangeLanguageVue
    },
    data : ()=>({
        user : {
            email : "",
            password : ""
        },showSpinner : false,
        validate : {
          email : {
            message : "",
            status : false,
            invalid : false
         },
         password : {
            message : "",
            status : false,
            invalid : false
         }
        }
    }),
    methods : {
        login(){
          this.showSpinner = true;
          this.validate.email.status = false;
          this.validate.password.status = false;
          this.validate.email.invalid = false;
          this.validate.password.invalid = false;
          if(this.user.email == ""){
            this.validate.email.status = true;
            return;
          }
          else if(this.user.password == ""){
            this.validate.password.status = true;
            return;
          }     
          // else if(this.user.password.length < 6){
          //   this.validate.password.invalid = true
          //   return ;
          // }
          
            axios.post("/login", this.user)
            .then(res => {
                if(res.data.status == 200){
                  localStorage.setItem("data", res.data.data);
                  setTimeout(() => {
                    this.showSpinner = false;
                     alert("Login Success");
                     
                  }, 2000);
                  this.$router.push("/admin/dashboard");
                
                }else {
                  setTimeout(() => {
                    this.showSpinner = false;
                      // set data here
                      //this.$router.push("/home");
                      alert("Login failed");
                  }, 1000);
                }
            })
            .catch(async err => {
              err.data
               setTimeout(() => {
                 this.showSpinner =  false;
                    // set error here 
                   // this.$router.push("/home");
                }, 2000);
                alert("Login failed");
                
            })
        }
    }
}
</script>
<style scoped>
.divider:after,
.divider:before {
  content: "";
  flex: 1;
  height: 1px;
  background: #eee;
}
.h-custom {
  height: calc(100% - 73px);
}
@media (max-width: 450px) {
  .h-custom {
    height: 100%;
  }
}
.loading {
    background: rgba(0, 0, 0, .5);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
}

.spinner-center {
    top: 50%;
    left: 50%;
    position: absolute;
}
.title{
  font-size: 1.5rem;
}
small{
  display: flex;
  color: red;
}
.error{
  border : 1px solid red;

}
</style>