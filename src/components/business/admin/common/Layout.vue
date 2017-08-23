<template>
  <div class="layout">
    <header :class="{'nav-hide': !open}">
      <Vheader></Vheader>
    </header>
    <SideBar></SideBar>
    <div class="content" :class="{'nav-hide': !open}">
      <transition
        name="pos-op"
        mode="out-in"
      >
        <router-view></router-view>
      </transition>
    </div>
    <!-- <Vfooter></Vfooter> -->
  </div>
</template>

<script type="text/javascript">
import { mapState } from 'vuex'

import Header from './Header'
import SideBar from './SideBar'
import Footer from './Footer'

export default {
  computed: mapState({
    open: state => state.nav.open
  }),
  components: {
    Vheader: Header,
    SideBar,
    Vfooter: Footer
  }
}
</script>

<style type="text/css" lang="scss" scoped>
header {
  position: fixed;
  left: 256px;
  right: 0;
  top: 0;
  width: auto;
  transition: all .45s cubic-bezier(0.23, 1, 0.32, 1);
  &.nav-hide {
    left: 0;
  }
}
.content {
  padding-top: 56px;
  padding-left: 256px;
  transition: all .45s cubic-bezier(0.23, 1, 0.32, 1);
  &.nav-hide {
    padding-left: 0;
  }
}

.pos-op-enter-active,
.pos-op-leave-active {
  -webkit-transition: all .38s cubic-bezier(.55,0,.1,1);
  transition: all .38s cubic-bezier(.55,0,.1,1);
}
.pos-op-enter,
.pos-op-leave-to {
  opacity: 0;
  -webkit-transform: translate(0, 20px);
  transform: translate(0, 20px);
}
</style>
