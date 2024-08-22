<template>
      <!-- <comp-header/> -->
     <div class="container">
    <label class="form-label">Username</label>
    <input type="text" class="form-control" >
    <label class="form-label">Password</label>
    <input type="text" class="form-control" >
    <label class="form-label">Địa chỉ</label>
    <input type="text" class="form-control" >
    <label class="form-label">Giới tính</label>
    <input type="text" class="form-control" >
    <button class="btn" style="background: green; margin-top: 5px; color:white">Update</button>
    </div>
</template>

<script>
// import CompHeader from './components/CompHeader.vue';

export default {
    name:'update-user',
    data(){
        return{
        }
    },
    components:{
    // CompHeader
  }
}
</script>
<style>

</style>