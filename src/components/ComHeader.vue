<template>
  <div class="header-container">

    <div class="header-button">
      <!--侧边栏收缩扩展-->
      <el-button size="medium" @click="handleMeun">
        <i v-if="isCollapse" class="el-icon-s-unfold"></i>
        <i v-else class="el-icon-s-fold"></i>
      </el-button>
    </div>
    <!--面包屑导航-->
    <div class="header-bread">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!--    用户-->
    <div class="header-user">
      <el-button>
        <el-dropdown>
        <span class="el-dropdown-link">
            user
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人主页</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>

          </el-dropdown-menu>
        </el-dropdown>
      </el-button>
    </div>

  </div>
</template>

<script>
// 头部组件
export default {
  name: "ComHeader",
  props: {
    routes: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data() {
    return {
      fits: ['contain'],
      logo: require('../assets/img/logo.png'),
      breadcrumbList: [],

    }
  },
  methods: {
    handleMeun() {
      this.$store.commit('collapseMenu')
    },
    getBreadcrumb() {
      // only show routes with meta.title
      let matched = this.$route.matched.filter(item => item.meta && item.meta.title)
      const first = matched[0]

      if (!this.isDashboard(first)) {
        matched = [{path: '/dashboard', meta: {title: 'Dashboard'}}].concat(matched)
      }

      this.levelList = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
    },
    isDashboard(route) {
      const name = route && route.name
      if (!name) {
        return false
      }
      return name.trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase()
    },
    // pathCompile(path) {
    //   // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
    //   const { params } = this.$route
    //   var toPath = pathToRegexp.compile(path)
    //   return toPath(params)
    // },
    handleLink(item) {
      const {redirect, path} = item
      if (redirect) {
        this.$router.push(redirect)
        return
      }
      this.$router.push(this.pathCompile(path))
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  },
  created() {
    this.getBreadcrumb()
  },
  computed: {
    isCollapse() {
      return this.$store.state.tab.isCollapse
    },
  },

}
</script>

<style scoped lang="less">
.header-container {
  .header-button {
    height: 60px;
    width: 70px;
    //text-align: center;

    .el-button {
      height: 60px;
      width: 70px;
      border: none;

      i {
        font-size: 30px;
      }
    }
  }

  .header-bread {

  }

  .header-user {
    margin-right: 40px;
    margin-left: auto;

    .el-button {
      height: 60px;
      border: none;

      .el-dropdown-menu {
        margin-top: 10px;
        background-color: red;
      }

      .el-icon-arrow-down {
        font-size: 12px;
      }
    }
  }

  //  flex布局
  // justify-content: space-between;两端对齐
  // align-items: center;垂直居中
  display: flex;
  //justify-content: space-between;
  align-items: center;
}
</style>
