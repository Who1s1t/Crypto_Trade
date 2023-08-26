<template>
  <header>
    <div class="logo">
      <a href="https://d3.dev/" target="_blank">
        <img  src="../assets/TD_logo.png">
        <p>Trade</p>
      </a>
    </div>
    <div class="btn">
      <button v-if="!connected" :disabled="loading" @click="connect">Connect wallet</button>
      <p class="wallet__address" v-if="connected">{{ address }}</p>

    </div>
  </header>
</template>



<script>

import {defineComponent} from "vue";

export default defineComponent({


  data() {
    return {
      connected: false,
      loading: false,
      address: null
    }
  },

  methods: {

    connect: function () {
      if (window.ethereum) {
        this.loading = true

        window.ethereum.request({ method: 'eth_requestAccounts' })
            .then((res) => {
              this.address = res[0]
              this.connected = true;
            })
            .catch((err) => {
              console.error(err);
            })
            .finally(() => {
              this.loading = false
            });

      }
    }
  }
})
</script>