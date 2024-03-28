<template>
  <el-menu
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="rgb(48, 65, 86)"
      text-color="#fff"
      router
      default-active="home"
      :collapse="isCollapse"
  >
    <!--    菜单栏logo-->
    <img src="../assets/img/logo.png"/>
    <el-menu-item v-for="item in menuData" :key="item.name" :index="item.name">
      <i :class="item.icon"></i>
      <span slot="title">{{ item.title }}</span>
    </el-menu-item>

  </el-menu>
</template>

<script>
// 侧边栏组件
export default {
  name: "ComAside",
  data() {
    return {
      menuData: [
        {
          path: '/home',
          name: 'home',
          title: '首页',
          icon: 'el-icon-s-home',
        },
        {
          path: '/slideshow',
          name: 'slideshow',
          title: '轮播图',
          icon: 'el-icon-picture',
        },
        {
          path: '/article',
          name: 'article',
          title: '文章',
          icon: 'el-icon-notebook-2',
        },
        {
          path: '/product',
          name: 'product',
          title: '商品',
          icon: 'el-icon-s-shop',
        },
        {
          path: '/user',
          name: 'user',
          title: '用户',
          icon: 'el-icon-user',
        },
      ],
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  computed: {
    isCollapse() {
      return this.$store.state.tab.isCollapse
    },
  }
}
</script>

<style scoped>
/*菜单栏的高度*/
.el-menu {
  border: none;
}

/*增加el-menu-item的权重*/
.el-menu-item.is-active {
  background-color: #fff !important;
}

/*侧边导航栏宽度自适应*/
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

/*设置logo的大小以及位置*/
img {
  clear: both;
  display: block;
  margin: auto;
  height: 60px;
}
</style>
