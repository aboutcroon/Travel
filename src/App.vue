<!--单文件组件-->
<template>
  <div id="app">
    <keep-alive exclude="Detail"> <!--对Detail组件不做缓存-->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
