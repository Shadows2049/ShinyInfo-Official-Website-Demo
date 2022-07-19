<template>
  <header class="main-header">
    <nav class="main-nav">
      <ul class="nav-links">
        <button
          tag="li"
          :to="{ name: 'index', params: { newsId: 11 } }"
          class="nav-link"
        >
          <a>Home</a>
        </button>
        <nuxt-link tag="li" to="/link1" class="nav-link"
          ><a>Link1</a></nuxt-link
        >
        <nuxt-link
          tag="li"
          :to="{ name: 'index', params: { newsId: 22 } }"
          class="nav-link"
          ><a>Link2</a></nuxt-link
        >
        <nuxt-link tag="li" to="/link3" class="nav-link"
          ><a>Link3</a></nuxt-link
        >
      </ul>
    </nav>
  </header>
</template>
<script>
export default {}
</script>
<style scoped>
.main-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #022d30;
  height: 4.5rem;
}

.main-nav {
  height: 100%;
}

.nav-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.nav-link {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
  padding: 0.3rem;
}
.nav-link a {
  display: block;
  text-decoration: none;
  color: white;
}

.nav-link a:hover,
.nav-link a:active,
.nav-link.nuxt-link-exact-active a {
  color: #06c4d1;
}
.nav-link.nuxt-link-exact-active {
  border-bottom: 3px solid #06c4d1;
}
</style>
