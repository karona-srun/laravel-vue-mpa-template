<template>
  <div class="container-fluid p-5">
    <h1>Get started with Bootstrap</h1>
    <p class="fs-5 col-md-8">Quickly and easily get started with Bootstrap's compiled, production-ready files with this barebones example featuring some basic HTML and helpful links. Download all our examples to get started.</p>

    <div class="mb-5">
      <a href="/docs/5.2/examples/" class="btn btn-primary btn-lg px-4">Download examples</a>
    </div>

    <hr class="col-3 col-md-2 mb-5">

    
    
    <div class="row g-5">
      <div class="col-md-6">
        <h2>Starter projects</h2>
        <p>Ready to beyond the starter template? Check out these open source projects that you can quickly duplicate to a new GitHub repository.</p>
        <ul class="icon-list ps-0">
          <li class="d-flex align-items-start mb-1"><a href="https://github.com/twbs/bootstrap-npm-starter" rel="noopener" target="_blank">Bootstrap npm starter</a></li>
          <li class="text-muted d-flex align-items-start mb-1">Bootstrap Parcel starter (coming soon!)</li>
        </ul>
      </div>

      <div class="col-md-6">
        <h2>Guides</h2>
        <p>Read more detailed instructions and documentation on using or contributing to Bootstrap.</p>
        <ul class="icon-list ps-0">
          <li class="d-flex align-items-start mb-1"><a href="/docs/5.2/getting-started/introduction/">Bootstrap quick start guide</a></li>
          <li class="d-flex align-items-start mb-1"><a href="/docs/5.2/getting-started/webpack/">Bootstrap Webpack guide</a></li>
          <li class="d-flex align-items-start mb-1"><a href="/docs/5.2/getting-started/parcel/">Bootstrap Parcel guide</a></li>
          <li class="d-flex align-items-start mb-1"><a href="/docs/5.2/getting-started/vite/">Bootstrap Vite guide</a></li>
          <li class="d-flex align-items-start mb-1"><a href="/docs/5.2/getting-started/contribute/">Contributing to Bootstrap</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value3: 0,
      setting: {
        autoplay: true,
        autoplaySpeed: 5000,
        dots: "inside",
        radiusDot: false,
        trigger: "hover",
        arrow: "hover",
      },
    };
  },
  methods: {
    instance(type) {
      const title = "Title";
      const content = "<p>Content of dialog</p><p>Content of dialog</p>";
      switch (type) {
        case "info":
          this.$Modal.info({
            title: title,
            content: content,
          });
          break;
        case "success":
          this.$Modal.success({
            title: title,
            content: content,
          });
          break;
        case "warning":
          this.$Modal.warning({
            title: title,
            content: content,
          });
          break;
        case "error":
          this.$Modal.error({
            title: title,
            content: content,
          });
          break;
      }
    },
  },
};
</script>
