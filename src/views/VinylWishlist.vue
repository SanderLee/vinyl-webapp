<template>
  <div>
    <h1 class="title">Vinyl wishlist</h1>
    <div v-if="loading" class="lds-ring"><div></div><div></div><div></div><div></div></div>
    <div v-for="vinyl in vinyls" :key="vinyl.title">
      <VinylComponent v-bind:vinyl="vinyl" />
    </div>
  </div>
</template>

<script lang="ts">
import { getVinylWishlist, Vinyl } from '@/api/api'
import { Options, Vue } from 'vue-class-component'
import VinylComponent from '@/components/VinylComponent.vue'

@Options({
  components: {
    VinylComponent
  }
})
export default class VinylWishlist extends Vue {
  vinyls: Vinyl[] = []
  loading = false

  mounted() {
    this.loading = true
    getVinylWishlist()
      .then((vinyls: Vinyl[]) => {
        this.vinyls = vinyls
        this.loading = false
      })
      .catch((err) => console.log(err))
  }
}
</script>

<style scoped>
.title {
  margin: 0.5em;
}

.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
