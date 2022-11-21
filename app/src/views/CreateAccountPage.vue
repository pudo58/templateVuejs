<template>
    <section class="vh-100" style="background-color: #eee;">
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
              <div class="card text-black" style="border-radius: 25px;">
                <div class="card-body p-md-5">
                  <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
      
                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">{{$t('sign_up.title')}}</p>
      
                      <form class="mx-1 mx-md-4" @submit.prevent="register">
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-floating flex-fill mb-0">
                            <input type="text" id="form3Example1c" class="form-control"  v-model="user.username"/>
                            <label class="form-label" for="form3Example1c">Username</label>
                        
                          </div>
                      </div>
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-floating flex-fill mb-0">
                            <input type="text" id="form3Example1c" class="form-control"  v-model="user.name"/>
                            <label class="form-label" for="form3Example1c">{{$t('sign_up.input.name')}}</label>
                            <small v-if="validate.name.isBlank">{{$t('sign_up.validate.name.required')}}</small>
                            <small v-if="validate.name.isErrorLength.minlenght">{{$t('sign_up.validate.name.minlength')}}</small>
                            <small v-if="validate.name.isErrorLength.maxlength">{{$t('sign_up.validate.name.maxlength')}}</small>
                          </div>
                      </div>
      
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-floating flex-fill mb-0">
                            <input type="email" id="form3Example3c" class="form-control"  v-model="user.email"/>
                            <label class="form-label" for="form3Example3c">{{$t('sign_up.input.email')}}</label>
                            <small v-if="validate.email.isBlank">{{$t('sign_up.validate.email.required')}}</small>
                            <small v-if="validate.email.isInValid">{{$t('sign_up.validate.email.email')}}</small>
                          </div>
                        </div>
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-floating flex-fill mb-0">
                            <input type="text" id="form3Example3c" class="form-control"  v-model="user.phoneNumber"/>
                            <label class="form-label" for="form3Example3c">Phone number</label>
                          </div>
                        </div>
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-floating flex-fill mb-0">
                            <input type="text" id="form3Example3c" class="form-control"  v-model="user.address"/>
                            <label class="form-label" for="form3Example3c">Address</label>
                          </div>
                        </div>
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div class="form-floating flex-fill mb-0">
                            <input type="password" id="form3Example4c" class="form-control"  v-model="user.password"/>
                            <label class="form-label" for="form3Example4c">{{$t('sign_up.input.password')}}</label>
                            <small v-if="validate.password.isBlank">{{$t('sign_up.validate.password.required')}}</small>
                            <small v-if="validate.password.isErrorLength.minlenght">{{$t('sign_up.validate.password.minlength')}}</small>
                            <small v-if="validate.password.isErrorLength.maxlength">{{$t('sign_up.validate.password.maxlength')}}</small>
                          </div>
                        </div>
      
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div class="form-floating flex-fill mb-0">
                            <input type="password" id="form3Example4cd" class="form-control"  v-model="user.rePassword"/>
                            <label class="form-label" for="form3Example4cd">{{$t('sign_up.input.confirm_password')}}</label>
                            <small v-if="validate.password_confirmation.isBlank">{{$t('sign_up.validate.confirm_password.required')}}</small>
                            <small v-if="validate.password_confirmation.isErrorLength.minlenght">{{$t('sign_up.validate.confirm_password.minlength')}}</small> 
                            <small v-if="validate.password_confirmation.isErrorLength.maxlength">{{$t('sign_up.validate.confirm_password.maxlength')}}</small>                   
                            <small v-if="validate.password_confirmation.isNotEquals">{{$t('sign_up.validate.confirm_password.not_match')}}</small>
                          </div>
                        </div>
      
                        <div class="form-check d-flex justify-content-center mb-5">
                          <input  v-model="check" class="form-check-input me-2" type="checkbox" value="" id="form2Example3" @change="ennableButton" />
                          <label class="form-check-label" for="form2Example3">
                            {{$t('sign_up.input.confirm_statement')}}
                          </label>
                        </div>
      
                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button id="btn"  type="submit" class="btn btn-primary btn-lg" @click.prevent="register" >{{$t('sign_up.input.register')}}</button>
                        </div>
      
                      </form>
      
                    </div>
                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
      
                      <img src="../assets/images/draw2.webp"
                        class="img-fluid" alt="Sample image">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalConfirmVue :clicked="redirectLogin" ref="modal" class="modal">
        <template v-slot:title>
          <p>{{$t('sign_up.alert.title')}}</p>
        </template>
        <template v-slot:body>
          <p v-if="status.success.status">{{$t('sign_up.alert.success')}}</p>
          <p v-if="status.error.status">{{$t('sign_up.alert.error')}}</p>
        </template>
      </ModalConfirmVue>
</template>
<script>
import ModalConfirmVue from '@/components/ModalConfirm.vue';
import axios from 'axios'
import httpStatus from '@/config/httpStatus'
export default {
  name: "CreateAccountPage",
  data : () => {
    return {
      check : false,
      status : {
        success : {
          status : false,
        },
        error : {
          status : false,
        }
      },
      user: {
        username :'',
        name: '',
        email: '',
        phoneNumber : '',
        address : '',
        password: '',
        rePassword: ''
      },validate :
      {
        name: {
          isErrorLength: {
            minlenght : false ,
            maxlength : false
          },
          isBlank : false ,
        },
        email: 
        {
          isBlank : false ,
          isInValid : false
        },
        password: { 
          isErrorLength: {
            minlenght : false ,
            maxlength : false
          },
          isBlank : false 
        },
        password_confirmation:{
          isErrorLength:{
            minlenght : false ,
            maxlength : false
          },
          isBlank : false ,
          isNotEquals : false
        }
      }
    }
  },
  components: { ModalConfirmVue},
  methods: {
    redirectLogin(){
      this.$router.push("/login")
    },
    ennableButton(){
      if(this.check == true){
        document.getElementById('btn').disabled = false;
      }else {
        document.getElementById('btn').disabled = true;
      }
    },
    register(){
      var validateEmail = function(email) {
        var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return re.test(email);
      };
      var flag = false ;
      this.status.success.status = false;
      this.status.error.status = false;
      this.validate.name.isBlank = this.user.name == '';
      this.validate.name.isErrorLength.minlenght = this.user.name.length < 3;
      this.validate.name.isErrorLength.maxlength = this.user.name.length >20;
      this.validate.email.isBlank = this.user.email == '';
      this.validate.email.isInValid = !validateEmail(this.user.email);
      this.validate.password.isBlank = this.user.password == '';
      this.validate.password.isErrorLength.minlenght = this.user.password.length < 8;
      this.validate.password.isErrorLength.maxlength = this.user.password.length > 20;
      this.validate.password_confirmation.isNotEquals = this.user.password != this.user.rePassword;
      this.validate.password_confirmation.isBlank = this.user.password_confirmation == '';
      this.validate.password_confirmation.isErrorLength.minlenght = this.user.rePassword.length < 8;
      this.validate.password_confirmation.isErrorLength.maxlength = this.user.rePassword.length >20;
     if(!(this.validate.name.isBlank  && this.validate.name.isErrorLength.minlenght  && this.validate.name.isErrorLength.maxlength  && this.validate.email.isBlank  && this.validate.email.isInValid  && this.validate.password.isBlank  && this.validate.password.isErrorLength.minlenght && this.validate.password.isErrorLength.maxlength  && this.validate.password_confirmation.isNotEquals  && this.validate.password_confirmation.isBlank  && this.validate.password_confirmation.isErrorLength.minlenght  && this.validate.password_confirmation.isErrorLength.maxlength )){
         flag = true;
      }
      if(flag){
        axios.post('/user/create',this.user)
        .then(response => {
          if(response.data.status == httpStatus.OK){
            this.status.success.status = true;
            this.$refs.modal.show();

          console.log(response)
          }
        })
        .catch(error => {
          this.status.error.status = true;
          this.$refs.modal.show();
          console.log(error)
        });
      }
    },
    },
};
</script>
<style scoped>
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
  .modal {
    background: rgba(0, 0, 0, .5);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
}
</style>