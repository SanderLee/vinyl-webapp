<template>
    <div class="vinyl">
        <div class="cover">
            <img width="100" height="100" v-bind:src="vinyl.coverArtUrl || 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/12in-Vinyl-LP-Record-Angle.jpg/1280px-12in-Vinyl-LP-Record-Angle.jpg'"/>
        </div>
        <div class="info">
            {{ vinyl.title }}
            <br/>
            {{ vinyl.artist }}
        </div>
    </div>
</template>

<script lang="ts">
import { Vinyl } from '@/api/api'
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    vinyl: Object as () => Vinyl
  }
})
export default class VinylComponent extends Vue {
    vinyl!: Vinyl
}
</script>

<style scoped>
    .vinyl {
        margin: 1em;
        padding: 1em;
        background-color: #3282b8;
        display: flex;
        width: 500px;
    }
    .info {
        float: right;
        font-weight: 1000;
        margin: 1em;
        padding: 0.5em;
        display:flex;
        align-items:center;
    }
    .cover {
        width: 100px;
        height: 100px;
    }
</style>
