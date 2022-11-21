<template>
   <div class="dropdown bg-outline">
  <button v-bind:title="$t('common')" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    {{ $t('common') }}
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
    <li><a class="dropdown-item" @click.prevent="changeLanguage('en')"><img src="../assets/images/icon/us.png" width="30"> {{ $t('type.en')}}</a></li>
    <li><a class="dropdown-item" @click.prevent="changeLanguage('vi')"><img src="../assets/images/icon/vietnam.png" width="30"> {{ $t('type.vi')}}</a></li>
  </ul>
</div>
</template>
<style scoped>
    ul a:hover {
        color : red ;
        cursor : pointer ;
    }
</style>
<script>
export default {
    name: "ChangeLanguage",  
    methods: {
        changeLanguage(lang) {
            this.$i18n.locale = lang
        }
    }
}
</script>