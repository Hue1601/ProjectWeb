<template>
  <div class="row">
    <div class="col-2">
      <h3>WEB CHAT</h3>
    </div>
    <div class="col-9 ">
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
  padding-left: 80%;
}
.nav-item {
  padding-left: 45px;
}
</style>