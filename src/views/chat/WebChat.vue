<template>
  <div class="container">
      <comp-header />
    <div class="row mt-1" >
      <div class="col-2 position-absolute " style="height: 90vh; background:rgb(44, 37, 93)">cha</div>
      <div class="col-9 offset-1 p-0 position-relative bg-light" style="color:black">chat box</div>
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

.col-9{
  width: 80.33%;
  height: 90vh;
}
.offset-1 {
    margin-left: 19.7%;
}

</style>