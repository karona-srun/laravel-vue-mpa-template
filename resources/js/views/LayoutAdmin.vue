<template>
  <div id="page-top" style="height: 113vh">
    <router-view> </router-view>
    <button type="button" class="btn btn-outline-primary" @click.prevent="confirm">confirm</button>
  </div>
</template>
<style>
  @import '../assets/css/sb-admin-2.css';
  @import '../assets/vendor/fontawesome-free/css/all.min.css';
  @import 'https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i';
</style>
<script lang="js">
import jQuery from "jquery";
const $ = jQuery;
window.$ = $;
import '../assets/vendor/jquery/jquery.min.js';
import '../assets/vendor/bootstrap/js/bootstrap.bundle.min.js';
import '../assets/vendor/jquery-easing/jquery.easing.min.js';
import '../assets/js/sb-admin-2.min.js';
import '../assets/vendor/chart.js/Chart.min.js';
import '../assets/js/demo/chart-area-demo.js';
import '../assets/js/demo/chart-pie-demo.js';
</script>
<script>
import { mapActions, mapState } from 'vuex';
export default {
  data() {
    return {
      isCollapsed: false,
    };
  },
  computed: {
    rotateIcon() {
      return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    },
    menuitemClasses() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    },
  },
  methods: {
    ...mapActions(["signOut"]),
    collapsedSider() {
      this.$refs.side1.toggleCollapse();
    },
    confirm() {
          this.signOut();
          this.$nextTick(() => {
            this.$router.go();
          });
    },
  },
};
</script>

<style scoped>
</style>