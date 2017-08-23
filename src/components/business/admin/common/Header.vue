<template>
  <mu-appbar :zDepth="0" title="Cg" titleClass="title">
    <mu-icon-button icon="menu" slot="left" @click="toggleNav" />
    <mu-icon-button slot="right" href="https://github.com/YuAoi/cgscript-website" icon="home"/>
  </mu-appbar>
</template>

<script type="text/javascript">
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions([
      'toggleNav'
    ])
  }
}
</script>

