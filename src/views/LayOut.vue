<template>
  <el-container>
    <el-aside width="auto">
      <!--侧边栏-->
      <ComAside></ComAside>
    </el-aside>
    <el-container>
      <el-header>
        <!--头部-->
        <ComHeader></ComHeader>
      </el-header>
      <!--窗体区域-->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import ComAside from "@/components/ComAside";
import ComHeader from "@/components/ComHeader";

export default {
  name: "LayOut",
  components: {
    ComAside,
    ComHeader,
  }
}
</script>

<style scoped>
.el-aside {
  background-color: rgb(48, 65, 86);
  color: #333;
  /*让侧边到后来与视图一样高*/
  height: 100vh;
  width: 100%;
}

.el-header {
  background-color: #fff;
  color: #333;
  line-height: 60px;
  padding: 0;
  width: 100%;
}

.el-main {
  background-color: #f5f5f5;
  color: #333;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

</style>
