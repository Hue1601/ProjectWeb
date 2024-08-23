<template>
  <div class="container">
     <h2 style="text-align:center; margin-top:7px">ĐĂNG NHẬP</h2>
    <form>
      <div class="mb-3">
        <label class="form-label">Email address</label>
        <input type="email" class="form-control" />
      </div>
      <div class="mb-3">
        <label class="form-label">Password</label>
        <input type="password" class="form-control" />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {};
  },
};
</script>
<style>
</style>