<template>
  <div>
    <h2 style="text-align:center;margin-top:5px">Update thông tin nhân viên</h2>
    <form @submit.prevent="UpdateUser">
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
        
        <button type="submit" class="btn btn-success" style="margin-top:5px; margin-left:45%">Update</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
const baseUrl = "http://localhost:3000/users";

export default {
  name: 'update-user',
  data() {
    return {
      users: {
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
    async getUserData() {
      try {
        const id = this.$route.params.id;  
        const response = await axios.get(`${baseUrl}/${id}`);
        this.users = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async UpdateUser() {
      if (confirm('Are you sure you want to update this user?')) {
        try {
          await axios.put(`${baseUrl}/${this.users.id}`, this.users);
          this.$router.push("/user"); 
          this.resetForm(); 
        } catch (error) {
          console.error(error);
        }
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

</style>
