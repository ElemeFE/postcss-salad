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
      <section class="md-pages">
        <router-view></router-view>
      </section>
    </main>
  </div>
</template>

<script>
import Sidenav from 'components/Sidenav';

export default {
  name: 'app',
  components: {
    Sidenav,
  },
};
</script>
