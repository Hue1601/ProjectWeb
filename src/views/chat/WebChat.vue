<template>
  <div class="container">
      <comp-header />
    <div class="row">
      <div class="col-2 position-fixed " style="height: 100vh;with:100%; background:rgb(43, 38, 127);">cha</div>
      <div class="col-10  bg-success">chat box</div>
    </div>
  </div>
</template>
<script>
import CompHeader from "../../components/CompHeader.vue";
export default {
  name: "web-chat",
  data() {
    return {};
  },
  components: {
    CompHeader,
  },
};
</script>
<style >
</style>