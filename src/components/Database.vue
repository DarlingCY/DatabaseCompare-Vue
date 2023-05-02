<template>
    <div class="database">
        <el-empty v-if="databaseDifference.addedDatabase.length<=0&&databaseDifference.deletedDatabase.length<=0" description="暂无差异"></el-empty>
        <el-descriptions direction="vertical" :column="1" border v-else>
            <el-descriptions-item label="新增数据库" v-if="databaseDifference.addedDatabase.length>0" :labelStyle="{fontWeight:'bold'}">
                <Tag v-for="(item,index) in databaseDifference.addedDatabase" :key="index" :type="'success'" :text="item"/>
            </el-descriptions-item>
            <el-descriptions-item label="删除数据库" v-if="databaseDifference.deletedDatabase.length>0" :labelStyle="{fontWeight:'bold'}">
                <Tag v-for="(item,index) in databaseDifference.deletedDatabase" :key="index" :type="'danger'" :text="item"/>
            </el-descriptions-item>
        </el-descriptions>
    </div>
</template>

<script>
import Tag from "./Tag.vue";

export default {
    name: 'Database',
    components: {Tag},
    data() {
        return {
            databaseDifference: {
                addedDatabase: [],
                deletedDatabase: [],
                commonDatabase: [],
            }
        }
    },
    created() {
        this.getDatabaseDifference()
    },
    methods: {
        getDatabaseDifference() {
            this.$axios.get("/compare/getDatabaseDifference").then(res => {
                this.databaseDifference = res.data.data
            })
        }
    }
}
</script>

<style scoped>
</style>
