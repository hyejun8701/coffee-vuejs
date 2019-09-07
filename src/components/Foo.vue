<template>
  <div>
    <h1>Foo 컴포넌트의 내용입니다.</h1>
    <slot name="title"></slot>
    <slot>
      <p>주입받은 템플릿이 없습니다.</p>
    </slot>
  </div>
</template>
<script>
export default {
  name: 'Foo'
}
</script>
<style>

</style>
