<template>
  <div>
    <p>
      {{ count }} + {{ number }} = {{ sum }}
    </p>
    <p>
      {{ multiply }}
    </p>
    <p>
      <button @click="increment">더하기</button>
    </p>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'ExampleVuex',
  data () {
    return {
      number: 3
    }
  },
  computed: {
    /* multiply () {
      return this.$store.getters.multiply
    }, */
    sum () {
      return this.count + this.number
    },
    ...mapState([
      'count'
    ]),
    ...mapGetters([
      'multiply'
    ])
  },
  methods: {
    increment () {
      this.$store.commit('INCREMENT', 2)
    }
  }
}
</script>
<style>

</style>
