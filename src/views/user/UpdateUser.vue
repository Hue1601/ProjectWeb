<template>
  <h2 style="text-align:center;margin-top:5px">Update thông tin nhân viên</h2>
  <form @submit.prevent="updateUser">
    <div class="container">
      <label class="form-label">Username</label>
      <input type="text" class="form-control" v-model="updateuser.username" />
      
      <label class="form-label">Password</label>
      <input type="password" class="form-control" v-model="updateuser.pass" />

      <label class="form-label">SDT</label>
      <input type="text" class="form-control" v-model="updateuser.sdt" />
      
      <label class="form-label">Địa chỉ</label>
      <input type="text" class="form-control" v-model="updateuser.diachi" />
      
      <label class="form-label">Giới tính</label>
      <input type="text" class="form-control" v-model="updateuser.gioitinh" />
      
      <button type="submit" class="btn btn-success" style="margin-top:5px; margin-left:45%" v-on:click="UpdateUser">Update</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'update-user',
  data() {
    return {
      updateuser: {
        id: null,
        username: "",
        pass: "",
        sdt: "",
        gioitinh: "",
        diachi: ""
      }
    };
  },
  mounted() {
    this.getUserData();
  },
  methods: {
    getUserData() {
      const userId = this.$route.params.id;  
      console.log(this.$parent.list);
      const user = this.$parent.list.find(user => user.id == userId);
      if (user) {
        this.updateuser = { ...user };
      }
    },
    UpdateUser() {
      const userId = this.updateuser.id;
      const userIndex = this.$parent.list.findIndex(user => user.id == userId);
      if (userIndex !== -1) {
        this.$parent.list[userIndex] = { ...this.updateuser };
        alert('Are you sure you want to add this user?')
        this.$router.push('/user'); 
      }
    }
  }
};
</script>

<style>

</style>
