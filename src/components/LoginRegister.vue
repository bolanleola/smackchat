<template>
    <q-form @submit="submitForm">
        <q-input
         v-if="tab == 'register'"
         outlined 
         v-model="formData.name" 
         class="q-mb-md"
         label="Name" />

         <q-input
         outlined 
         type="email"
         v-model="formData.email" 
         class="q-mb-md"
         label="Email" />

         <q-input
         outlined
         type="password" 
         v-model="formData.password" 
         class="q-mb-md"
         label="Password" />

            <div class="row">
                <q-space />
               <q-btn 
               color="primary"
               type="submit"
               :label="tab" />
            </div>
         
    </q-form>
</template>
<script>
export default {
  props: ['tab'],
  data(){
      return{
          formData:{
              name: '',
              email: '',
              password: ''
          }
      }
  },

  methods:{
      submitForm(){
          if(this.tab == 'login'){
              console.log('login the user')
          }
          else{
              console.log('register the user')
          }

      }
  }
}
</script>
