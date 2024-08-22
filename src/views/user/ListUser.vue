<template>
  <div class="container">
    <comp-header />
    <add-user/>
    <div class="row-list">
      <RouterLink to="/user/add">
        <a class="btn btn-outline-primary">Add</a>
      </RouterLink>
    </div>
    <div class="card-header">
      <table class="table">
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
            <td>
              <RouterLink to="/user/update">
                <a href="" class="btn btn-outline-primary" >Update</a>
              </RouterLink>
              <button class="btn btn-outline-primary" style="margin-left:3px">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import CompHeader from "../../components/CompHeader.vue";
import AddUser from './AddUser.vue';
import AddUserVue from './AddUser.vue';
export default {
  name: "list-user",
  data() {
    return {
      list: [
        {
          id: 1,
          username: "huept",
          pass: "1",
          sdt: "033333333",
          gioitinh: "Nữ",
          diachi: "HN",
        },
        {
          id: 2,
          username: "lanlt",
          pass: "13567",
          sdt: "0385468",
          gioitinh: "Nam",
          diachi: "TH",
        },
      ],
    };
  },
  components: {
    CompHeader,
    AddUser,
    AddUser
  },
};
</script>
<style >
.row-list {
  margin-top: 5px;
  padding-left: 90%;
}
</style>