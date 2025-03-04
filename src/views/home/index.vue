<template>
  <div class="container">
    <h1></h1>
    <h2>
      <router-link to="/chart">x</router-link>
    </h2>
  </div>
  <router-view />
</template>

<script>

</script>
<style scoped>

.container{
  height: 100%;
  width: 100%;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
