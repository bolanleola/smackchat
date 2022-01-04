<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
         <q-btn 
         v-if = '$route.fullPath.includes("/chat")'
        
          flat
           dense 
           icon="arrow_back" 
           label="Back" />
        <q-toolbar-title class="absolute-center">
          {{ title }}
        </q-toolbar-title>
        <q-btn 
        to='/auth'
           class="absolute-right q-pr-sm"
           flat
           no-caps
           dense 
           icon="account_circle" 
           label="Login" />
      </q-toolbar>
    </q-header>

    

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>




export default{
  computed:{
    title(){
      let currentPath = this.$route.fullPath
      if (currentPath == '/') return 'SmackChat App'
      else if (currentPath == '/chat') return 'Chat'
      else if (currentPath == '/auth') return 'Login'
    }
  }

 

 
}
</script>
