<template>
  <footer>
    <div class="row mx-0 bg-primary">
      <div class="col-12 col-md-4 text-md-center
      p-4">
          <nuxt-link to="/terms-of-service">
            <fa icon="fa-solid fa-file-contract" />
            Terms of Service
          </nuxt-link>
      </div>
      <div class="col-12 col-md-4  text-md-center
      p-4">
          <nuxt-link to="/privacy-policy">
            <fa icon="fa-solid fa-lock" />
            Privacy Policy
          </nuxt-link>
      </div>
      <div class="col-12 col-md-4 text-md-center
      p-4">
          <nuxt-link to="/about">
            <fa icon="fa-solid fa-clipboard-question" />
            About
          </nuxt-link>
      </div>
      <div class="col-12 col-md-7 text-center pt-5">
        <h3>&copy;www.webname.com | 2022</h3>
      </div>
      <div class="col-12 col-md-5 text-end
      text-md-center py-5">
          <span>
          <a href="" target="_blank" class="mx-5">
            <fa icon="fa-brands fa-instagram" />
          </a>
          <a href="" target="_blank" class="mx-5">
            <fa icon="fa-brands fa-facebook" />
          </a>
          <a href="" target="_blank" class="mx-5">
            <fa icon="fa-brands fa-twitter" />
          </a>
          </span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
footer {
  a,
  h3 {
    color: #fff;
  }
  a {
      font-size: 24px;
  }
}
</style>