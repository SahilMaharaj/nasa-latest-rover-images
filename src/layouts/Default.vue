<template>
  <div class="layout">
    <header class="header">
      <strong>
        <h1><g-link to="/">{{ $static.metadata.siteName }}</g-link></h1>
      </strong>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 1260px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.header a {
  text-decoration: none;
  color: #000;
}

.nav__link {
  margin-left: 20px;
}
</style>
