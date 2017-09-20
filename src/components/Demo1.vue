<template>
  <div class="Demo1">
    <h1>{{ msg }}</h1>
    <!-- <h2>Essential Links</h2> -->
    <ul>
      <li>
        <router-link to="demo1">Go to demo-1</router-link>
      </li>
      <li>
        <router-link to="demo2">Go to demo-2</router-link>
      </li>
    </ul>
    <div>{{ state }}</div>
    <button :style="{color: state}">{{ buttonText }}</button>
  </div>
</template>

<script>

export default {
  name: 'Demo1',
  data () {
    return {
      buttonOptions: {
        green: "foo",
        yellow: "bar",
        red: "baz"
      },
      msg: 'Finite State Machines'
    }
  },
  mounted() {
    setInterval(() => {
      this.$store.commit("transition", "TIMER")
    }, 3000)
  },
  computed: {
    buttonText() {
      return this.buttonOptions[this.state]
    },
    state() {
      return this.$store.state.currentState
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

button {
  padding: 5px 25px;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
