<template>
  <h1>About Pokemon Page</h1>
  <hr>
  <h2>{{ name }}</h2>
  <button @click="changeName">changeName</button>
</template>

<script>
export default {
  name: "PokemonAboutPage",
  data() {
    return {
      name: 'Gerardo Estrella'
    }
  },
  methods: {
    changeName() {
      console.log('Se cambiara el nombre a Silvia')
      this.name = 'Silvia Arteaga'
    }
  },
  beforeCreate() {
    console.log('beforeCreate')
  },
  created() {
    console.log('created')
    //peticiones http
  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log('mounted')
  },
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  updated() {
    console.log('updated')
  },
  activated() {
    console.log('activated')
  },
  deactivated() {
    console.log('deactivated')
  },
  beforeUnmount() {
    console.log('beforeUnmount')
  },
  unmounted() {
    console.log('unmounted')
  },
  errorCaptured() {
    console.log('errorCaptured')
  },
  renderTracked() {
    console.log('renderTracked')
  },
  renderTriggered() {
    console.log('renderTriggered')
  }
}
</script>

<style scoped>

</style>
