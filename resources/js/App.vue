<template>
  <div class="container">
    <div class="row">
    <router-view> </router-view>
  </div>
  </div>
</template>
<script>
export default {
  mounted() {
    // if (localStorage.getItem('jwt') == null) {
    //   this.$router.replace('/sign-in').catch(()=>{});
    // }else{
    //   this.$router.replace('/dashboard').catch(()=>{});
    // }
  },
  methods: {},
};
</script>