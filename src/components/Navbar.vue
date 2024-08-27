<template>
    <header class="navbar">
        <div class="navbar-left">
            <div className="nav-links">
                <RouterLink to="/" active-class="mov">首页</RouterLink>
                <RouterLink :to="{path: '/dramaSeries'}" active-class="mov">番剧</RouterLink>
                <RouterLink :to="{path: '/comics'}" active-class="mov">漫画</RouterLink>
                <RouterLink :to="{path: '/lifeCycle'}" active-class="mov">生活圈</RouterLink>
            </div>
        </div>
        <div class="navbar-center">
            <input type="text" class="search-input" placeholder="搜索视频、番剧、UP主或AV号" />
            <button class="search-button">🔍</button>
        </div>
        <div class="navbar-right">
            <a href="#" class="navbar-icon">登录</a>
            <a href="/vip" className="nav-icon">🎖️大会员</a>

            <a href="/messages" className="nav-icon">✉️消息</a>
            <a href="/activities" className="nav-icon">📢动态</a>
            <a href="/favorites" className="nav-icon">⭐收藏</a>
            <a href="/history" className="nav-icon">🕓历史</a>
            <button className="submit-button">投稿</button>
        </div>
    </header>
</template>

<script lang="ts">
import { RouterLink } from 'vue-router';

export default {
    name: 'Navbar',
};

</script>

<style scoped>
.navbar {
    position: fixed;
    /* 固定在页面顶部 */
    top: 0;
    left: 0;
    width: 100%;
    /* 占满页面宽度 */
    z-index: 1000;
    /* 确保导航栏在其他元素之上 */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-image: url("/src/assets/image/navbar-background.png")
}

.navbar-left,
.navbar-center,
.navbar-right {
    display: flex;
    align-items: center;
}

.nav-links a {
    margin-right: 20px;
    font-size: 10px;
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;
}

.navbar-right a {
    margin-left: 20px;
    margin-right: 20px;
    font-size: 10px;
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;
}


.nav-links a:hover {
    text-decoration: none;
}

.search-input {
    width: 300px;
    padding: 5px;
    border: none;
    border-radius: 5px;
}

.search-button {
    padding: 5px 10px;
    border: none;
    background-color: white;
    color: #00a1d6;
    cursor: pointer;
    margin-left: 10px;
    border-radius: 5px;
}

.nav-button,
.nav-icon,
.submit-button {
    margin-right: 10px;
    color: white;
    text-decoration: none;
    font-weight: bold;
}

.navbar-right a:hover {
    text-decoration: none;
}

.submit-button {
    background-color: #fb7299;
    padding: 5px 10px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
}

.nav-icon:hover,
.nav-button:hover,
.submit-button:hover {
    text-decoration: none;
}

/* //响应式布局 */
@media (max-width: 768px) {
    .navbar {
        flex-direction: column;
        align-items: flex-start;
    }

    .navbar-center {
        margin: 10px 0;
    }

    .navbar-right {
        flex-wrap: wrap;
    }

    .navbar-item,
    .navbar-icon {
        margin-right: 10px;
        margin-bottom: 10px;
    }

    .search-input {
        width: 200px;
    }
}

@media (max-width: 480px) {
    .search-input {
        width: 150px;
    }

    .navbar-item,
    .navbar-icon {
        font-size: 14px;
    }
}
</style>