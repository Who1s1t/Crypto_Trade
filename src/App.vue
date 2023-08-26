<template>
    <AppHeader />
    <AppMain />
    <AppFooter />
</template>

<script>

import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import AppMain from "@/components/AppMain";
import {defineComponent} from "vue";

export default defineComponent({
  name: 'App',
  components: {AppMain, AppFooter, AppHeader},

})
</script>

<style>

</style>
