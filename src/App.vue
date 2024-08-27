<template>
  <div class="app">
    <div class="common-layout">
      <el-container>
        <el-header>
          <Navbar/>
        </el-header> 
        <el-main>
          <RouterView />
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </div>
  </div>
</template>

<script lang="ts">
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import Home from './views/Home.vue';
import Comics from './views/Comics.vue';
import Drama from './views/DramaSeries.vue';
import Life from './views/LifeCycle.vue';
export default {
  name: 'App',
  components: {
    Navbar,
    Home,
    Comics,
    Drama,
    Life,
  },
};
</script>

<style>
.app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  text-align: center;
}

.content {
  margin: 0;
  padding: 0;
  /* margin-top: 20px; */
}


</style>
