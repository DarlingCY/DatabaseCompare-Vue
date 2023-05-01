<template>
    <div id="app">
        <el-container>
            <el-header height="auto" style="padding: 0;">
                <div id="header">
                    <span>DatabaseCompare —— 数据库比对工具</span>
                    <a id="author" href="https://github.com/DarlingCY/DatabaseCompare">By GreenLemon</a>
                </div>
            </el-header>
            <el-container>
                <el-aside width="auto" style="height: 50vh">
                    <el-menu router :default-active="$route.path" class="el-menu-vertical-demo">
                        <el-menu-item index="/">
                            <i class="el-icon-coin"></i>
                            <span slot="title">数据库</span>
                        </el-menu-item>
                        <el-menu-item index="/table">
                            <i class="el-icon-document-copy"></i>
                            <span slot="title">数据表</span>
                        </el-menu-item>
                        <el-menu-item index="/field">
                            <i class="el-icon-document"></i>
                            <span slot="title">表字段</span>
                        </el-menu-item>
                    </el-menu>
                </el-aside>
                <el-main>
                    <router-view/>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style scoped>
#header {
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
    font-weight: bolder;
    font-size: 1.5rem;
}

#author {
    font-size: 1rem;
    text-decoration: none;
}

#app {
    width: 100%;
    height: auto;
}

.el-menu-item > span {
    font-weight: bold;
}
</style>
