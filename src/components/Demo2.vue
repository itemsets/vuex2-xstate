<template>
  <div class="Demo2">
    <h1>{{ msg }}</h1>
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
  name: 'Demo2',
  data () {
    return {
      state: null,
      lightMachine: this.$store.getters.getlightMachine,
      buttonOptions: {
        green: "foo",
        yellow: "bar",
        red: "baz"
      },
      msg: 'Finite State Machines'
    }
  },
  mounted() {
    this.state = this.lightMachine.initial;
    setInterval(() => {
      this.state = this.lightMachine.transition(this.state, "TIMER").value;
    }, 3000);
  },
  computed: {
    buttonText() {
      return this.buttonOptions[this.state];
    }
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

button {
  padding: 5px 25px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
