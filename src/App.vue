<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <router-view/> -->
    <!-- <my-component :size="0" myMessage="안녕하세요!"></my-component>
    <my-component2 :width="3" :height="3"></my-component2>
    <my-component3 :height="3"></my-component3> -->
    <!-- <MyComponent/>
    <MyComponent2/> -->
    <!-- <MyComponent /> -->
    <!-- <span v-pre>{{ message }}</span> -->
    <!-- <ExampleComponent id="test" name="example-component" /> -->
    <!-- <ExampleComponent /> -->
    <!-- <Bar /> -->
    <ExampleVuex />
  </div>
</template>

<script>
import ExampleComponent from '@/components/ExampleComponent'
import Bar from '@/components/Bar'
import ExampleVuex from '@/components/ExampleVuex'

export default {
  name: 'App',
  components: {
    ExampleComponent,
    Bar,
    ExampleVuex
  }
}
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
