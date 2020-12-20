<template>
  <div>
      <h1>Vinyl wishlist</h1>
      <div v-for="vinyl in vinyls" :key="vinyl.title">
        {{ vinyl.title }}<br>
        {{ vinyl.artist }}<br>
        <img width="100" height="100" v-bind:src="vinyl.coverArtUrl"/><br>
      </div>
  </div>
</template>

<script lang="ts">
import { getVinylWishlist, Vinyl } from '@/api/api'
import { Vue } from 'vue-class-component'

export default class VinylWishlist extends Vue {
  vinyls: Vinyl[] = []

  mounted() {
    getVinylWishlist()
      .then((vinyls: Vinyl[]) => {
        this.vinyls = vinyls
      })
      .catch(err => console.log(err))
  }
}
</script>

<style scoped>

</style>
