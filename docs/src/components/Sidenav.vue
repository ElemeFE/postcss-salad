<template>
  <aside class="docs-navbar">
    <div class="aside-top">Salad<img class="salad-logo" alt=""></div>
    <ul class="nav">
      <li class="nav-item">
        <router-link to="/index">Overview</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/reset">Reset and Normalize</router-link>
        <!--<ul class="subnav">
          <li class="nav-item active"><a href="/reset.html#reset-global">reset-global</a></li>
          <li class="nav-item"><a href="/reset.html#reset-nested">reset-nested</a></li>
        </ul>-->
      </li>
      <li class="nav-item">
        <router-link to="/lasted-syntax">Lasted CSS Syntax</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/short-property">Short Property</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/grid">Grid</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/basic-shape">Basic Shape</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/utils">Utils</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/inline-svg">Inline Svg</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/Rem-to-Pixel">Rem to Pixel</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/sass-syntax">Sass Syntax</router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  data() {
    return {
    };
  },
};
</script>
