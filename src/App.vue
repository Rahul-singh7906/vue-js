<template>
  <router-link to='/'>Home</router-link>
  <router-link to='/login'>Login</router-link>
  <router-link to='/profile/anil'>Anil's Profile</router-link>
  <router-link to='/profile/jay'>Jay's Profile</router-link>
  <router-link to='/profile/shiv'>Shiv's Profile</router-link>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
}
</script>
