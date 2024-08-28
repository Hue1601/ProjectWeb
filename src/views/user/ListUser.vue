<template>
  <div class="container">
    <comp-header @search="handleSearch" />
    <div class="list">
    <h2 style="text-align: center; margin-top: 3px">Danh sách nhân viên</h2>
    <div class="row-list">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="search" 
        v-on:keyup.enter="SearchUser" >
       
        <RouterLink to="/user/add" class="btn btn-outline-primary">Add</RouterLink> 
    </div>

    <div class="card-header">
      <table class="table" >
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Username</th>
            <th scope="col">Password</th>
            <th scope="col">SDT</th>
            <th scope="col">Giới tính</th>
            <th scope="col">Địa chỉ</th>
            <th scope="col">Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in users" :key="index">
             <td>{{ index+1 }}</td>
            <td>{{ item.username }}</td>
            <td>{{ item.pass }}</td>
            <td>{{ item.sdt }}</td>
            <td>{{ item.gioitinh }}</td>
            <td>{{ item.diachi }}</td>
            <td>
              <RouterLink :to="`/user/update/${item.id}`" class="btn btn-outline-primary">
              Update</RouterLink>
              <button @click="DeleteUser(item)" class="btn btn-outline-primary" style="margin-left: 3px">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  </div>
</template>

<script>
import CompHeader from "../../components/CompHeader.vue";
import axios from 'axios';
 //const baseUrl = "http://localhost:3000/users";
 const baseUrl = "http://localhost:8080/api/list";

export default {
  name: "list-user",
  data() {
    return {
      users: [],
      username:'',
      search:''
    };
  },
  components: {
    CompHeader,
  },
  methods: {
    handleSearch(value){
      console.log("handling search event" , value);
      this.users = value;
    },
async SearchUser() {
      console.log('search');
      try {
        const response = await axios.get(`http://localhost:8080/api/search`, {
          params: { keyword: this.search }
        });
        this.users = response.data;
      } catch (error) {
        console.error("Search error:", error);
      }
     this.$emit("search", this.users);
    },
    async GetListUser() {
      try {
        const response = await axios.get(baseUrl);
        this.users = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async DeleteUser(itemDelete) {
  if (confirm('Are you sure you want to delete this user?')) {
    try {
       await axios.delete(`http://localhost:8080/api/delete-user/${itemDelete.id}`);
      this.GetListUser();
      alert('User deleted successfully!');
    } catch (error) {
      console.error(error);
    }
  }
}
  },
  mounted() {
    this.GetListUser();
  }
};
</script>

<style>
.btn-outline-primary{
  margin-right: 13px;
}
.list{
  height: 90vh;
  border: 1px solid  #c4c4c4;
}
.row-list {
  margin-top: 5px;
    display: flex;
   padding-left: 60%; 

}
</style>
