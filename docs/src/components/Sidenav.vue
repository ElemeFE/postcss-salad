<template>
  <aside class="docs-navbar">
    <div class="aside-top">Salad<img class="salad-logo" src="~assets/logo.svg"></div>
    <ul class="nav">
      <router-link tag="li" to="/postcss-salad/index" class="nav-item">
        <a>Overview</a>
      </router-link>
      <router-link tag="li" class="nav-item" to="/postcss-salad/reset">
        <a> Reset and Normalize</a>
      </router-link>
      <router-link tag="li" class="nav-item" to="/postcss-salad/lasted-syntax">
        <a>Lasted CSS Syntax</a>
      </router-link>
      <router-link tag="li" class="nav-item" to="/postcss-salad/short-property">
        <a>Short Property</a>
      </router-link>
      <router-link tag="li" class="nav-item" to="/postcss-salad/grid">
        <a>Grid</a>
      </router-link>
      <router-link tag="li" class="nav-item" to="/postcss-salad/basic-shape">
        <a>Basic Shape</a>
      </router-link>
      <router-link tag="li" class="nav-item" to="/postcss-salad/utils">
        <a> Utils</a>
      </router-link>
      <router-link tag="li" class="nav-item" to="/postcss-salad/inline-svg">
        <a>Inline Svg</a>
      </router-link>
      <router-link tag="li" class="nav-item" to="/postcss-salad/Rem-to-Pixel">
        <a>Rem to Pixel</a>
      </router-link>
      <router-link tag="li" class="nav-item" to="/postcss-salad/sass-syntax">
        <a>Sass Syntax</a>
      </router-link>
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
