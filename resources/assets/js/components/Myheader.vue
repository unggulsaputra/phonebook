<template>

<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
    </a>

<div class="navbar-menu is-active">

    <router-link to="/home" class="navbar-item">home</router-link>
    <router-link to="/about" class="navbar-item">about</router-link>
</div>

    <button class="button navbar-burger">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
</nav>

</template>