<template>
  <h2 style="text-align:center;margin-top:5px">Thêm mới nhân viên</h2>
  <div class="container">
    <label class="form-label">Username</label>
    <input type="text" class="form-control" v-model="users.username" />
    
    <label class="form-label">Password</label>
    <input type="password" class="form-control" v-model="users.pass" />

    <label class="form-label">SDT</label>
    <input type="text" class="form-control" v-model="users.sdt" />
    
    <label class="form-label">Địa chỉ</label>
    <input type="text" class="form-control" v-model="users.diachi" />
    
    <label class="form-label">Giới tính</label>
    <input type="text" class="form-control" v-model="users.gioitinh" />
    
    <button type="button" class="btn btn-success" style="margin-top:5px; margin-left:45%" @click="AddUser">Thêm mới</button>
  </div>
</template>

<script>
import axios from 'axios';
const baseUrl = "http://localhost:3000/users";

export default {
  name: 'add-user',
  data() {
    return {
      users: {
        username: '',
        pass: '',
        sdt: '',
        diachi: '',
        gioitinh: ''
      }
    };
  },
  methods: {
    async AddUser() {
      try {
        await axios.post(baseUrl, this.users);
        alert('Are you sure you want to add this user?')
        this.$router.push("/user"); 
        this.resetForm(); 
      } catch (error) {
        console.error(error);
      }
    },
    resetForm() {
      this.users = {
        username: '',
        pass: '',
        sdt: '',
        diachi: '',
        gioitinh: ''
      };
    }
  }
};
</script>

<style>
/* Add any necessary styles here */
</style>
