<template>
  <router-link to='/'>Home</router-link>
  <router-link to='/login'>Login</router-link>
  <router-link to='/profile'>Profile</router-link>
  <router-view></router-view>
  <!-- <MyGreet/> -->
</template>

<script>
// import MyGreet from './components/MyGreet.vue'
export default {
  name: 'App',
  // components:{
  //   MyGreet,
  // }
 
}
</script>
