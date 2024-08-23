<template>
  <h2 style="text-align:center;margin-top:5px">Thêm mới nhân viên</h2>
  <div class="container">
    <label class="form-label">Username</label>
    <input type="text" class="form-control" v-model="user.username" />
    
    <label class="form-label">Password</label>
    <input type="password" class="form-control" v-model="user.pass" />

    <label class="form-label">SDT</label>
    <input type="text" class="form-control" v-model="user.sdt" />
    
    <label class="form-label">Địa chỉ</label>
    <input type="text" class="form-control" v-model="user.diachi" />
    
    <label class="form-label">Giới tính</label>
    <input type="text" class="form-control" v-model="user.gioitinh" />
    
    <button type="button" class="btn btn-success" style="margin-top:5px; margin-left:45%" v-on:click="AddUser">Thêm mới</button>
  </div>

  <!-- <table class="table">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Username</th>
        <th scope="col">Password</th>
        <th scope="col">SDT</th>
        <th scope="col">Giới tính</th>
        <th scope="col">Địa chỉ</th>
        <th scope="col">Hành động</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in list" :key="item.id">
        <th>{{ item.id }}</th>
        <td>{{ item.username }}</td>
        <td>{{ item.pass }}</td>
        <td>{{ item.sdt }}</td>
        <td>{{ item.gioitinh }}</td>
        <td>{{ item.diachi }}</td>
      </tr>
    </tbody>
  </table> -->
</template>

<script>
export default {
  name: 'add-user',
  data() {
    return {
      user: {
        id: Math.floor(Math.random() * 1000),
        username: "",
        pass: "",
        sdt: "",
        gioitinh: "",
        diachi: ""
      },
      // list: [
      //    {
      //     id: 1,
      //     username: "huept",
      //     pass: "1",
      //     sdt: "033333333",
      //     gioitinh: "Nữ",
      //     diachi: "HN",
      //   },
      //    {
      //     id: 2,
      //     username: "lanlt",
      //     pass: "13567",
      //     sdt: "0385468",
      //     gioitinh: "Nam",
      //     diachi: "TH",
      //   }
      // ]
    };
  },
  methods: {
   
     AddUser() {
      this.$emit("save", this.AddUser);
      alert('Are you sure you want to add this user?')
    //  this.list.push({ ...this.user }); 
      this.$router.push("/user" );
      this.resetForm();
    },

    resetForm() {
      this.user = {
        id: Math.floor(Math.random() * 1000),
        username: "",
        pass: "",
        sdt: "",
        gioitinh: "",
        diachi: ""
      };
    }
  }
};
</script>

<style>

</style>
