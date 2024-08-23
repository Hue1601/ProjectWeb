<template>
  <div class="row">
    <div class="col-2 " style="text-align:center">
      <h3>WEB CHAT</h3>
    </div>
    <div class="col-6">
      <div class="input-group rounded mt-2" >
         <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
            <span class="input-group-text border-0" id="search-addon">
              <i class="bi bi-search"></i>
            </span>
      </div>
    </div>
    <div class="col-4">
      <nav class="navbar navbar-expand-lg">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink to="/user">
              <a class="btn" style="color: white">User</a>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/webchat" style="color: white">
              <a class="btn" style="color: white">Chat</a>
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  name: "comp-header",
  data() {
    return {};
  },
};
</script>
<style >
.row {
  color: white;
  /* margin-top: 10px; */
  background: rgb(44, 37, 93);
}
.col-2 {
  padding-top: 10px;
}
.navbar-nav {
  padding-left: 1%;
}
</style>