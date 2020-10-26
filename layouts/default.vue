<template>
  <div>
    <nuxt/>
    <Certificates />
    <Popup />
    <ContuctMe />
  </div>
</template>

<script>
  import Certificates from '@/components/Certificates';
  import Popup from '@/components/popup/popup';
  import ContuctMe from "@/components/ContuctMe";

  export default {
    components: {Certificates, Popup, ContuctMe}
  }
</script>
