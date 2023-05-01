<template>
    <div class="table">
        <el-collapse accordion>
            <el-collapse-item v-for="(item,index) in tableDifference" :title="'数据库名'+item['databaseName']" :key="index">
                <template slot="title">
                    <div style="font-size: 1rem; font-weight: bold">
                        <i class="el-icon-coin"></i>
                        <span>{{ item['databaseName'] }}</span>
                    </div>
                </template>
                <el-descriptions direction="vertical" :column="1" border>
                    <el-descriptions-item label="新增表" v-if="item['addedTable'].length>0" :labelStyle="{fontWeight:'bold'}">
                        <Tag v-for="(item,index) in item['addedTable']" :key="index" :type="'success'" :text="item"/>
                    </el-descriptions-item>
                    <el-descriptions-item label="删除表" v-if="item['deletedTable'].length>0" :labelStyle="{fontWeight:'bold'}">
                        <Tag v-for="(item,index) in item['deletedTable']" :key="index" :type="'danger'" :text="item"/>
                    </el-descriptions-item>
                </el-descriptions>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
import Tag from "./Tag.vue";

export default {
    name: "Table",
    components: {
        Tag
    },
    data() {
        return {
            tableDifference: []
        }
    },
    created() {
        this.getTableDifference()
    },
    methods: {
        getTableDifference() {
            this.$axios.get("/compare/getTableDifference").then(res => {
                this.tableDifference = res.data.data
            })
        }
    }
}
</script>

<style scoped>
.el-tag {
    margin: 5px;
}
</style>
