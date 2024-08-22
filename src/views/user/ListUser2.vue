<template>
 <div class="row-list">   
      <RouterLink to="/user/add">
      <div class="btn btn-light "> List user 2</div>
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
      <th >{{item.id}}</th>
      <td>{{item.username}}</td>
      <td>{{item.pass}}</td>
      <td>{{item.sdt}}</td>
      <td>{{item.gioitinh}}</td>
       <td>{{item.diachi}}</td>
      <td>
        <a  href="" class="btn btn-light" style="color:black">Update</a>
        <button class="btn btn-light" >Delete</button>
     </td>
    </tr>
  </tbody>
    </table>
</div>
<!-- <router-view/> -->
</template>

<script>

export default {
    name: 'list-user',
    data(){
        return{
           list:[
            {
              id:1,
              username:"huept",
              pass:"1",
              sdt:"033333333",
              gioitinh:"Nữ",
              diachi:"HN"
            },
            {
              id:2,
              username:"lanlt",
              pass:"13567",
              sdt:"0385468",
              gioitinh:"Nam",
              diachi:"TH"
            }
           ]
        
        }
    }
    }
</script>
<style >
.row-list{
  margin-top:5px ;
  padding-left: 80%;
}
</style>