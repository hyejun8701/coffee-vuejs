<template>
  <!-- <div>
    {{ count }}
    <button @click="addCount">addCount</button>
  </div> -->
  <div>
    <div @click="onClick">emit/on</div>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
    <div @click="onUpdate">DOM change</div>
  </div>
</template>
<script>
export default {
  name: 'ExampleComponent',
  data () {
    return {
      count: 0,
      message: { text: 'Hello World!' }
    }
  },
  mounted () {
    /* this.message.author = 'John'
    delete this.message.text */
    this.$set(this.message, 'author', 'John')
    this.$delete(this.message, 'text')
  },
  methods: {
    addCount () {
      this.count++
    },
    onClick () {
      this.$emit('click', { message: 'Hi' })
      this.$on('click', payload => {
        console.log(payload)
      })
    },
    onUpdate () {
      const listElements = document.getElementsByTagName('li')

      for (let i = 0; i < 3; i++) {
        listElements[i].textContent = 'new content'
        console.log(`browser render proceed`)
      }
    }
  },
  props: {
    name: {
      type: String
    }
  }
  /* mounted () {
   console.log(this.$attrs.id)
   console.log(this.$attrs.name)
   console.log(this.$props.name)
  } */
}
</script>
<style>

</style>
