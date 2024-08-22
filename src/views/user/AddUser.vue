<template>
      <!-- <comp-header/> -->
      <form>
     <div class="container">
    <label class="form-label">Username</label>
    <input type="text" class="form-control" v-model="adduser.username" >
    <label class="form-label">Password</label>
    <input type="text" class="form-control"  v-model="adduser.pass">
    <label class="form-label">Địa chỉ</label>
    <input type="text" class="form-control"  v-model="adduser.diachi">
    <label class="form-label">Giới tính</label>
    <input type="text" class="form-control"  v-model="adduser.gioitinh" >
    <button  @click="clickAdd" class="btn btn-success " style=" margin-top:3px; text-aline:center" >Thêm mới</button>
    </div>
      </form>
</template>

<script>
// import CompHeader from './components/CompHeader.vue';

export default {
    name:'add-user',
    method:{
      clickAdd(){
        this.$emit("save",this.adduser);
        console.log(this.adduser)
      }
    },
    data(){
        return{
          adduser:{
            id:Math.floor(Math.random()*1000),
            username:"",
            pass:"",
            sdt:"",
            gioitinh:"",
            diachi:""
          }
        }
    },
    components:{
    // CompHeader
  }
}
</script>
<style>

</style>