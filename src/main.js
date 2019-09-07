// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* Vue.component('MyComponent', {
  props: ['size', 'myMessage'],
  template: '<div>{{ size }} {{ myMessage }}</div>'
})

Vue.component('MyComponent2', {
  props: {
    height: Number,
    width: {
      type: Number,
      required: true,
      default: 1,
      validator (value) {
        return value > 0
      }
    }
  },
  template: '<div></div>'
})

Vue.component('MyComponent3', {
  props: {
    height: Number
  },
  template: '<div>{{ dataHeight }}</div>',
  data () {
    return {
      dataHeight: this.height
    }
  }
}) */

/* Vue.component('MyComponent', {
  template: '<div>{{ age * 2 }}</div>',
  data () {
    return {
      age: 28
    }
  }
})

Vue.component('MyComponent2', {
  template: '<div>{{ doubleAge }}</div>',
  data () {
    return {
      age: 28
    }
  },
  computed: {
    doubleAge () {
      return this.age * 2
    }
  }
}) */

/* Vue.component('MyComponent', {
  template: '<div @click="doubleAge=30">{{ doubleAge }}</div>',
  data () {
    return { age: 28 }
  },
  computed: {
    doubleAge: {
      get () {
        return this.age * 2
      },
      set (newAge) {
        this.age = newAge
      }
    }
  }
}) */

/* Vue.component('MyComponent', {
  template: '<div @click="plusNumber">{{ age }}</div>',
  data () {
    return {
      age: 28
    }
  },
  methods: {
    plusNumber () {
      this.age++
    }
  }
}) */

/* Vue.component('MyComponent', {
  template: '<div>{{ a }} {{ b }}</div>',
  data () {
    return {
      a: 'Hello World', b: 1
    }
  },
  watch: {
    a (nextValue, prevValue) {
      console.log(`new: ${nextValue}, old: ${prevValue}`)
    }
  }
}) */

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
