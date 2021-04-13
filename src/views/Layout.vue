<template>
  <a-layout class="layout">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo">{{ collapsed ? "景蕾" : "景蕾加油干" }}</div>
      <a-menu
        class="left_menu"
        theme="dark"
        mode="inline"
        :defaultOpenKeys="openKeys"
        :default-selected-keys="selectedKeys"
      >
        <a-menu-item key="/">
          <router-link to="/">
            <a-icon type="radar-chart" />
            <!-- 添加span 隐藏掉溢出的文字 -->
            <span>数据驾驶舱</span>
          </router-link>
        </a-menu-item>
        <a-sub-menu key="员工管理">
          <span slot="title">
            <a-icon type="appstore" />
            <span>员工管理</span>
          </span>
          <a-menu-item key="/userlist">
            <router-link to="/userlist">员工列表</router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="业务管理">
          <span slot="title">
            <a-icon type="appstore" />
            <span>业务管理</span>
          </span>
          <a-menu-item key="/worklist">
            <router-link to="/worklist">工单列表</router-link>
          </a-menu-item>
          <a-menu-item key="3-2">业务列表</a-menu-item>
          <a-menu-item key="3-3">投诉列表</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header
        type="flex"
        justify="space-between"
        style="background: #fff; padding: 0"
      >
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
        <div class="ant-pro-global-header-index-right">
          <a-dropdown-button class="ant-pro-global-header-index-right-span">
            Beauty
            <a-menu slot="overlay">
              <a-menu-item key="1">
                <a-icon type="user" />个人中心
              </a-menu-item>
              <a-menu-item key="2">
                <a-icon type="edit" />修改密码
              </a-menu-item>
              <a-menu-item key="3" @click="logout">
                <a-icon type="logout" />退出
              </a-menu-item>
            </a-menu>
            <a-icon slot="icon" type="user" />
          </a-dropdown-button>
        </div>
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <Bread></Bread>
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import Bread from "../components/Bread";
export default {
  components: {
    Bread,
  },
  data() {
    return {
      collapsed: false,
      selectedKeys: [],
      openKeys: [],
    };
  },
  watch: {
    $route() {
      document.title = "小垃圾管理系统" + "-" + this.$route.meta.title;
    },
  },
  created() {
    if (this.$route.meta && this.$route.meta.module) {
      this.openKeys = [this.$route.meta.module];
    }
    this.selectedKeys = [this.$route.path];
  },
  methods: {
    logout() {
      // 清除缓存
      this.$router.push("/login");
    },
  },
};
</script>
<style>
.layout {
  height: 100vh;
}
.layout .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.layout .trigger:hover {
  color: #1890ff;
}

.layout .logo {
  height: 32px;
  line-height: 32px;
  color: #fff;
  text-align: center;
  letter-spacing: 2px;
  font-family: 楷体;
  font-size: 17px;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.ant-pro-global-header-index-right {
  margin-right: 8px;
  float: right;
  height: 100%;
  margin-left: auto;
  overflow: hidden;
}
.ant-pro-global-header-index-right-span {
  display: inline-block;
  padding: 0 12px;
}
.left_menu {
  height: calc(100vh - 32px);
  overflow-y: auto;
}
</style>