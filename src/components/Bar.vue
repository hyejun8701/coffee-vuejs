<template>
  <div>
      <foo>
        <h1 slot="title">Foo 컴포넌트의 제목입니다.</h1>
        <p>
          {{ message }}
        </p>
      </foo>
  </div>
</template>
<script>
import Foo from './Foo'
export default {
  name: 'Bar',
  components: { Foo },
  data () {
    return { message: 'Bar 컴포넌트의 상태입니다.' }
  }
}
</script>
<style>

</style>
