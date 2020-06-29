<template>
  <div  class="part">
    <div class="slot-class">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Watch } from 'vue-property-decorator'
  @Component({
    name: 'Intro',
    components: {
    }
  })
  export default class extends Vue {

  }
</script>

<style>
  .slot-class {
    max-width: 1280px;
    margin:auto;
  }
</style>
