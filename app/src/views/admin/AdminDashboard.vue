<template>
  <header>
    <!-- Sidebar -->
    <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
      <div class="position-sticky">
        <div class="list-group list-group-flush mx-3 mt-4">
          <a href="#" class="list-group-item list-group-item-action py-2 ripple" aria-current="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-server" viewBox="0 0 16 16">
              <path d="M1.333 2.667C1.333 1.194 4.318 0 8 0s6.667 1.194 6.667 2.667V4c0 1.473-2.985 2.667-6.667 2.667S1.333 5.473 1.333 4V2.667z"/>
              <path d="M1.333 6.334v3C1.333 10.805 4.318 12 8 12s6.667-1.194 6.667-2.667V6.334a6.51 6.51 0 0 1-1.458.79C11.81 7.684 9.967 8 8 8c-1.966 0-3.809-.317-5.208-.876a6.508 6.508 0 0 1-1.458-.79z"/>
              <path d="M14.667 11.668a6.51 6.51 0 0 1-1.458.789c-1.4.56-3.242.876-5.21.876-1.966 0-3.809-.316-5.208-.876a6.51 6.51 0 0 1-1.458-.79v1.666C1.333 14.806 4.318 16 8 16s6.667-1.194 6.667-2.667v-1.665z"/>
            </svg>
            <span @click="showMenu=!showMenu" href="#allTable" role="button" aria-expanded="false" aria-controls="allTable" class="text-danger"
             > {{$t('admin_dashboard.menu.manager')}}</span>
          </a>
          <div class="collapse" :class="{'hidden':showMenu == false,'show':showMenu==true}" id="allTable">
            <div class="text-center">
            <a href="#" class="list-group-item list-group-flush p-1 m-1" v-for="item,index in allTableData" :key="index">
                <div class="row" v-bind:title="item.name">
                  <div class="col-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-table" viewBox="0 0 16 16">
                      <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z"/>
                    </svg>
                  </div>
                  <div class="col-3">
                    <span class="h8" @click="loadData(item)">
                      {{item}}
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <a href="#" class="list-group-item list-group-item-action py-2 ripple">
            <i class="fas fa-chart-area fa-fw me-3"></i><span>Charts</span>
          </a>
        </div>
      </div>
    </nav>
    <!-- Sidebar -->

    <!-- Navbar -->
    <nav id="main-navbar" class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <!-- Container wrapper -->
      <div class="container-fluid">
        <!-- Toggle button -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </button>

        <!-- Brand -->
        <a class="navbar-brand" href="#">
          <img src="../../assets/logo.png" height="25" alt="MDB Logo"
            loading="lazy" />
        </a>
        <!-- Search form -->
        <form class="d-none d-md-flex input-group w-auto my-auto">
          <input autocomplete="off" type="search" class="form-control rounded"
             style="min-width: 225px;" placeholder="Search ..." v-model='searchData'/>
        </form>

        <!-- Right links -->
        <ul class="navbar-nav ms-auto d-flex flex-row">
          <!-- Notification dropdown -->
          <li class="nav-item dropdown" v-bind:title="$t('admin_dashboard.notify.alert.title')">
            <a class="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
              </svg>
            </a>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <a class="dropdown-item" href="#">{{$t('admin_dashboard.notify.menu.content.new')}}</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">{{$t('admin_dashboard.notify.menu.content.delete')}}</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">{{$t('admin_dashboard.notify.menu.content.mark_all_as_read')}}</a>
              </li>
            </ul>
          </li>

          <!-- Icon -->
          <li class="nav-item">
            <a class="nav-link me-3 me-lg-0" href="#">
              <i class="fas fa-fill-drip"></i>
            </a>
          </li>
          <!-- Icon -->
          <li class="nav-item me-3 me-lg-0">
            <a class="nav-link" href="#">
              <i class="fab fa-github"></i>
            </a>
          </li>

          <!-- Icon dropdown -->
          <li class="nav-item dropdown" v-bind:title="$t('common')">
            <button v-bind:title="$t('common')" class="btn btn-secondary dropdown-toggle btn-light" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              {{ $t('common')}}
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
              <li><a class="dropdown-item" @click.prevent="changeLanguage('en')"><img src="../../assets/images/icon/us.png" width="30"> {{ $t('type.en')}}</a></li>
              <li><a class="dropdown-item" @click.prevent="changeLanguage('vi')"><img src="../../assets/images/icon/vietnam.png" width="30"> {{ $t('type.vi')}}</a></li>
            </ul>
              </li>
              <li>
                <hr class="dropdown-divider" />
              <i class="flag-united-kingdom flag m-0"></i>
            
          </li>
          </ul>

          <!-- Avatar -->
          <li class="nav-item dropdown">
            <a class="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="../../assets/images/avatar.webp" alt="" width="30">
            </a>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <a class="dropdown-item" href="#">My profile</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Settings</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Logout</a>
              </li>
            </ul>
          </li>
      </div>
      <!-- Container wrapper -->
    </nav>
    <!-- Navbar -->
  </header>
  <!--Main Navigation-->

  <!--Main layout-->
  <main style="margin-top: 58px;">
    <div class="container pt-4">
     
      <TableListDataVue :data="list"></TableListDataVue>
    </div>
  </main>
  <!--Main layout-->
</template>
<script>
import TableListDataVue from '@/components/TableListData.vue';
import axios from 'axios';
export default{
  name : "AdminDashboard",
  components :{
    TableListDataVue
  },
  data : () => {
      return {
        searchData : '',
        list : [
        ],
        allTableData : [
         "user","category","course","role","admin","category","category-attribute"
        ],showMenu : false,
        tableNameSelect: 'user' 
      }
  },
  created(){
    this.loadData(this.tableNameSelect);
   // dataTable.getData('/user/get','User');
  },
  methods : {
    async loadData(tableName){
      axios.get("/"+tableName+"/get").then(res => {
        this.list = res.data;
      })
    },
    changeLanguage(lang){
      this.$i18n.locale = lang;
    },search(){

    },
  }
  
}
</script>
<style>
  body {
      background-color: #fbfbfb;
  }
  @media (min-width: 991.98px) {
      main {
        padding-left: 240px;
      }
  }
  
  /* Sidebar */
  .sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    padding: 58px 0 0; /* Height of navbar */
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 5%), 0 2px 10px 0 rgb(0 0 0 / 5%);
    width: 240px;
    z-index: 600;
  }
  
  @media (max-width: 991.98px) {
      .sidebar {
          width: 100%;
      }
  }
  .sidebar .active {
      border-radius: 5px;
      box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
  }
  
  .sidebar-sticky {
      position: relative;
      top: 0;
      height: calc(100vh - 48px);
      padding-top: 0.5rem;
      overflow-x: hidden;
      overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
  }
  ul li a:hover{
    color : red ;
    cursor: pointer;
  }
li {
    list-style: none;
}
</style>