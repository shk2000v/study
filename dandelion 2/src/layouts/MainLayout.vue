<template>
  <q-layout view="lHh Lpr lFf">
    <q-drawer
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <div class="column full-height">
        <div class="col text-center">
          <h2 class="q-ma-none">네비</h2>
        </div>
        <div class="col-10">
          <div class="column justify-center full-height">

            <div class="col-2 relative-position">
              <q-icon name="home" class="text-purple absolute-center" size="xl" />
            </div>
            <div class="col-2 relative-position">
              <q-icon name="account_circle" class="text-purple absolute-center" size="xl" />
            </div>
          </div>
        </div>
        <div class="col text-center">
          <h2 class="q-ma-none">단델리온</h2>
        </div>
      </div>
      
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>


export default {
  name: 'MainLayout',
  components: {  },
  data () {
    return {
    }
  }
}
</script>
