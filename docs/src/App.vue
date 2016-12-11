<template>
  <div id="app" class="main-wrapper">
    <sidenav></sidenav>
    <main>
      <header>
        <button class="navbar-toggle" ontouchend="docs.toggleNavbar()" id="navbar-toggle">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>
      <section>
        <router-view></router-view>
      </section>
    </main>
  </div>
</template>

<script>
import Sidenav from './components/Sidenav';

export default {
  name: 'app',
  components: {
    Sidenav,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
