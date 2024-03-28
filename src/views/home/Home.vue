<template>
  <el-row>
    <el-col :span="8">
      <div class="grid-content bg-purple">
        <el-card class="box-card">
          <div v-for="o in 4" :key="o" class="text item">
            {{ '列表内容 ' + o }}
          </div>
        </el-card>
      </div>
    </el-col>
    <el-col :span="16">
      <div class="grid-content bg-purple-light"></div>
    </el-col>
  </el-row>

</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>

</style>
