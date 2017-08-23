<template>
  <mu-drawer :open="open" :docked="true" :zDepth="1">
    <mu-appbar :zDepth="0">
      <a>Cg</a>
    </mu-appbar>
    <mu-divider/>
    <div class="drawer-content">
      <mu-list :value="1">
        <mu-list-item title="0" :value="0"></mu-list-item>
        <mu-list-item title="1" :value="1"><mu-icon slot="left" value="send" /></mu-list-item>
        <mu-list-item title="2" :value="2" toggleNested>
          <mu-list-item slot="nested" title="2-0" :value="20">
            <mu-icon slot="left" value="send" />
          </mu-list-item>
        </mu-list-item>
      </mu-list>
    </div>
  </mu-drawer>
</template>

<script type="text/javascript">
import { mapState } from 'vuex'

export default {
  computed: mapState({
    open: state => state.nav.open
  })
}
</script>
