<template>
  <div class="container">
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <router-link :to="{ name: 'Home' }" class="
          d-flex align-items-center
          justify-content-center
          col-md-3 mb-2 mb-md-0
          text-dark text-decoration-none" aria-current="page">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/602px-Bootstrap_logo.svg.png" width="50" alt=""/>
      </router-link>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" class="nav-link px-2 link-secondary">Home</a></li>
        <li><a href="#" class="nav-link px-2 link-dark">Features</a></li>
        <li><a href="#" class="nav-link px-2 link-dark">Pricing</a></li>
        <li><a href="#" class="nav-link px-2 link-dark">FAQs</a></li>
        <li><a href="#" class="nav-link px-2 link-dark">About</a></li>
      </ul>

      <div class="col-md-3 item-content-center text-center">
        <router-link
          :to="{ name: 'SignIn' }"
          class="btn btn-outline-primary me-2"
          aria-current="page"
          >SignIn</router-link
        >
        <router-link
          :to="{ name: 'SignUp' }"
          class="btn btn-primary"
          aria-current="page"
          >SignUp</router-link
        >
      </div>
    </header>
    <main>
      <div class="row">
        <router-view> </router-view>
      </div>
    </main>
    <footer class="pt-5 my-5 text-muted border-top">
      Created by the Bootstrap team · © 2022
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      logo: "/favicon.png",
    };
  },
  methods: {
    homePage() {
      this.$router.push("/");
    },
    clickMe() {
      alert("Clicked!!");
    },
  },
};
</script>